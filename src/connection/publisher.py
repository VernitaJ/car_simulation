import dotenv 
from dotenv import load_dotenv
import os
import paho.mqtt.client as mqtt

load_dotenv()

HOST = os.getenv('HOST')
PORT = int(os.getenv('PORT'))
USERNAME = os.getenv('MQTTUSER')
PASSWORD = os.getenv('MQTTPASS')

class Publisher:
    def __init__(self):
        self.host = HOST
        self.port = PORT
        self.username = USERNAME
        self.password = PASSWORD
        self.client = mqtt.Client()

    # def on_connect():

    # def on_disconnect():


    def start(self):
        self.client.username_pw_set(self.username, self.password)
        self.client.connect(self.host, self.port)

    def send(self, topic, value):
        self.client.publish(topic, str(value))