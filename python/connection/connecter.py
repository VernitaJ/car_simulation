import paho.mqtt.client as mqtt
import re

def on_connect(client, userdata, flags, rc):
    original_message = f"Client - {client._client_id}\n{str(flags)}"
    formated = re.sub("'|b'|{|}", "", original_message)
    print(formated)

def on_disconnect(client, userdata, rc):
    print("disconnecting reason  " + str(rc))

def create(name):
    client = mqtt.Client(name)
    #client.username_pw_set(USERNAME, PASSWORD)
    client.on_connect = on_connect
    client.on_disconnect = on_disconnect
    client.connect("127.0.0.1", 1883)
    client.max_queued_messages_set(1)
    return client
