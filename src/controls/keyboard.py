import os, sys
dir_path = os.path.dirname(os.path.realpath(__file__))
parent_dir_path = os.path.abspath(os.path.join(dir_path, os.pardir))
sys.path.insert(0, parent_dir_path)
from connection import Publisher, Topic
from pynput.keyboard import Key, Listener

throttle = Publisher()
steering = Publisher()
topic = Topic()
throttle.start()
steering.start()

idle = 0
vroom = 100
straight = 0
turn = 100

up = False
down = False
left = False
right = False


def drive(velocity, direction):
    throttle.send(topic.throttle, velocity)
    steering.send(topic.steering, direction)




def on_press(key):
    global up, down, left, right
    # print(f"pressed '{key}'")
    if key is Key.up:
        if up is False:
            drive(vroom, straight)
            up = True
    if key is Key.down:
        if down is False:
            down = True
            drive(-vroom, straight)
    if key is Key.right:
        if right is False:
            right = True
            steering.send(topic.steering, turn)
    if key is Key.left:
        if left is False:
            left = True
            steering.send(topic.steering, -turn)

def on_release(key):
    global up, down, left, right
    #print(f"release '{key}'")
    if key is Key.up:
        up = False
        drive(idle, straight)
    if key is Key.down:
        down = False
        drive(idle, straight)
    if key is Key.right:
        right = False
        steering.send(topic.steering, straight)
    if key is Key.left:
        left = False
        steering.send(topic.steering, straight)

with Listener(
        on_press=on_press,
        on_release=on_release) as listener:
    listener.join()