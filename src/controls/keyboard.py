from pynput.keyboard import Key, Listener
from connection import connecter, Topic
import os
import sys
dir_path = os.path.dirname(os.path.realpath(__file__))
parent_dir_path = os.path.abspath(os.path.join(dir_path, os.pardir))
sys.path.insert(0, parent_dir_path)

IDLE = 0
STRAIGHT = 0
VELOCITY = 100
DIRECTION = 100
MQTT_VELOCITY_FORWARD = connecter.create("Forward")
MQTT_VELOCITY_BACKWARD = connecter.create("Backward")
MQTT_STEERING = connecter.create("steering")
TOPIC = Topic()


class Keyboard:
    def __init__(self):
        self.up = False
        self.down = False
        self.left = False
        self.right = False
        self.crash_expected = False
        self.front_sensor = connecter.create("front-sensor")
        self.front_sensor.subscribe(TOPIC.front_sensor)
        self.front_sensor.on_message = self.on_message_front_sensor
        self.front_sensor.loop_start()
        self.infrared_front = connecter.create("infrared-front")
        self.infrared_front.subscribe(TOPIC.infrared_front)
        self.infrared_front.on_message = self.on_message_infrared_front
        self.infrared_front.loop_start()
        self.listener = Listener(
            on_press=self.on_press, on_release=self.on_release)
        self.listener.start()

    def on_message_front_sensor(self, client, userdata, msg):
        print(f"ultrasonic - {msg.payload}")
        if int(msg.payload) > 200 and self.up is True:
            MQTT_VELOCITY_FORWARD.publish(TOPIC.throttle_forward, IDLE)
            self.crash_expected = True
        else:
            self.crash_expected = False

    def on_message_infrared_front(self, client, userdata, msg):
        print(f"infrared - {msg.payload}")
        if int(msg.payload) > 0 and self.up is True:
            MQTT_VELOCITY_FORWARD.publish(TOPIC.throttle_forward, IDLE)
            self.crash_expected = True
        else:
            self.crash_expected = False

    def on_press(self, key):
        if key is Key.up:
            if self.crash_expected:
                pass
            else:
                if self.up is False:
                    self.up = True
                    MQTT_VELOCITY_FORWARD.publish(
                        TOPIC.throttle_forward, VELOCITY)
        if key is Key.down:
            if self.down is False:
                self.down = True
                MQTT_VELOCITY_BACKWARD.publish(
                    TOPIC.throttle_reverse, -VELOCITY)
        if key is Key.right:
            if self.right is False:
                self.right = True
                MQTT_STEERING.publish(TOPIC.steering_right, DIRECTION)
        if key is Key.left:
            if self.left is False:
                self.left = True
                MQTT_STEERING.publish(TOPIC.steering_left, -DIRECTION)

    def on_release(self, key):
        if key is Key.up:
            self.up = False
            MQTT_VELOCITY_FORWARD.publish(TOPIC.throttle_forward, IDLE)
        if key is Key.down:
            self.down = False
            MQTT_VELOCITY_BACKWARD.publish(TOPIC.throttle_reverse, IDLE)
        if key is Key.right:
            self.right = False
            MQTT_STEERING.publish(TOPIC.steering_right, STRAIGHT)
        if key is Key.left:
            self.left = False
            MQTT_STEERING.publish(TOPIC.steering_left, STRAIGHT)

    # def start(self):
    #     l = Listener(on_press=on_press, on_release=self.on_release)
    #     l.start()
