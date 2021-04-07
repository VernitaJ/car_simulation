import dotenv
from dotenv import load_dotenv
import os
import paho.mqtt.client as mqtt
import re

load_dotenv()

HOST = os.getenv('HOST')
PORT = int(os.getenv('PORT'))
USERNAME = os.getenv('MQTTUSER')
PASSWORD = os.getenv('MQTTPASS')


def on_connect(client, userdata, flags, rc):
    original_message = f"Client - {client._client_id}\n{str(flags)}"
    formated = re.sub("'|b'|{|}", "", original_message)
    print(formated)


def on_disconnect(client, userdata, rc):
    print("disconnecting reason  " + str(rc))

def create(name):
    client = mqtt.Client(name)
    client.username_pw_set(USERNAME, PASSWORD)
    client.on_connect = on_connect
    client.on_disconnect = on_disconnect
    client.connect(HOST, PORT)
    return client
