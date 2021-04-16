package com.group2.smartcar_interface;

import org.eclipse.paho.client.mqttv3.*;

public class Connector implements MqttCallback {

    MqttConnectOptions connOpt;

    String action = "publish";
    String topic = "";
    String message = "";
    int qos = 2;
    String broker = "tcp://46.101.108.246";

    String username = "sauce";
    String password = "sauce";
    String clientId = "";
    int port = 1883;
    MqttClient mqtt;


    public Connector(String username, String password) {
        this.username = username;
        this.password = password;

        try {
            this.mqtt = new MqttClient(this.broker , "client");
        } catch (MqttException e) {
            e.printStackTrace();
        }

    }

    static final Boolean subscriber = true;
    static final Boolean publisher = true;

    /*public static void main(String[] args) throws MqttException {
        Connector connector = new Connector();
        connector.connect();
    }
*/
    public void connect(){
        // setup MQTT Client
        String clientID = "clientConnection";
        connOpt = new MqttConnectOptions();

        connOpt.setCleanSession(true);
        connOpt.setKeepAliveInterval(60);
        connOpt.setUserName(username);
        connOpt.setPassword(password.toCharArray());

        // Connect to Broker
        try {
            mqtt = new MqttClient(broker, clientID);
            mqtt.setCallback(this);
            mqtt.connect(connOpt);
        } catch (MqttException e) {
            e.printStackTrace();
            System.exit(-1);
        }
        System.out.println("Connected to BROKER");
        testClient();
    }

    public void disconnect() throws MqttException {
        try {
            // wait to ensure subscribed messages are delivered
            if (subscriber) {
                Thread.sleep(5000);
            }
            mqtt.disconnect();
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    public void subscribe(String topic, int qos, IMqttMessageListener subscriptionCallback) {
        try {
            mqtt.subscribe(topic, qos, subscriptionCallback);
        } catch (MqttException e) {
            e.printStackTrace();
        }
    }

    public void unsubscribe(String topic) {
        try {
            mqtt.unsubscribe(topic);
        } catch (MqttException e) {
            e.printStackTrace();
        }
    }

    public void publish(String topic, String message, int qos) {
        MqttMessage mqttMessage = new MqttMessage();
        mqttMessage.setPayload(message.getBytes());
        mqttMessage.setQos(qos);
        try {
            mqtt.publish(topic, mqttMessage);
        } catch (MqttException e) {
            e.printStackTrace();
        }
    }

    public void testClient() {

        if (publisher) {
            for (int i=1; i<=10; i++) {
                String pubMsg = "{\"pubmsg\":" + i + "}";
                int pubQoS = 0;
                MqttMessage message = new MqttMessage(pubMsg.getBytes());
                message.setQos(pubQoS);
                message.setRetained(false);

                // Publish the message
                System.out.println("Publishing to topic \"" + topic + "\" qos " + pubQoS);
                MqttDeliveryToken token = null;
                try {
                    // publish message to broker
                    mqtt.publish("testing", message);
                    // Wait until the message has been delivered to the broker
                    token.waitForCompletion();
                    Thread.sleep(100);
                } catch (Exception e) {
                    e.printStackTrace();
                }
            }
        }

        try {
            // wait to ensure subscribed messages are delivered
            if (subscriber) {
                Thread.sleep(5000);
            }
            mqtt.disconnect();
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    @Override
    public void connectionLost(Throwable cause) {

    }

    @Override
    public void messageArrived(String topic, MqttMessage message) throws Exception {

    }

    @Override
    public void deliveryComplete(IMqttDeliveryToken token) {

    }
}
