package com.group2.smartcar_interface;

import androidx.appcompat.app.AppCompatActivity;

import android.graphics.Bitmap;
import android.graphics.Color;
import android.os.Bundle;
import android.util.Log;
import android.view.View;
import android.widget.ImageView;
import android.widget.Toast;

import org.eclipse.paho.client.mqttv3.IMqttActionListener;
import org.eclipse.paho.client.mqttv3.IMqttDeliveryToken;
import org.eclipse.paho.client.mqttv3.IMqttToken;
import org.eclipse.paho.client.mqttv3.MqttCallback;
import org.eclipse.paho.client.mqttv3.MqttClient;
import org.eclipse.paho.client.mqttv3.MqttException;
import org.eclipse.paho.client.mqttv3.MqttMessage;

public class MainActivity extends AppCompatActivity {
    private static final String TAG = "SmartcarMqttController";
    private static final String EXTERNAL_MQTT_BROKER = "aerostun.dev";
    private static final String LOCALHOST = "10.0.2.2";
    private static final String MQTT_SERVER = "tcp://" + EXTERNAL_MQTT_BROKER + ":1883";
    private static final String THROTTLE_CONTROL = "/smartcar/control/throttle";
    private static final String STEERING_CONTROL = "/smartcar/control/steering";
    private static final String MOVEMENT_SPEED = "70";
    private static final String IDLE_SPEED = "0";
    private static final String STRAIGHT_ANGLE = "0";
    private static final String STEERING_ANGLE = "50";
    private static final int QOS = 1;
    private static final int IMAGE_WIDTH = 320;
    private static final int IMAGE_HEIGHT = 240;

    private MqttClient mMqttClient;
    private boolean isConnected = false;
    private ImageView mCameraView;
    Connector connector = new Connector();


    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        mCameraView = findViewById(R.id.imageView);

        connector.connect();
    }

    @Override
    protected void onResume() {
        super.onResume();

        connector.connect();
    }



    void drive(String throttleSpeed, String steeringAngle, String actionDescription)  {

        try {
            connector.mqtt.publish(THROTTLE_CONTROL, new MqttMessage(throttleSpeed.getBytes()));
            connector.mqtt.publish(STEERING_CONTROL, new MqttMessage(steeringAngle.getBytes()));
        } catch (MqttException e) {
            e.printStackTrace();
        }



    }

    public void moveForward(View view) {
        drive(MOVEMENT_SPEED, STRAIGHT_ANGLE, "Moving forward");
    }

    public void moveForwardLeft(View view) {
        drive(MOVEMENT_SPEED, STEERING_ANGLE, "Moving forward left");
    }

    public void stop(View view) {
        drive(IDLE_SPEED, STRAIGHT_ANGLE, "Stopping");
    }

    public void moveForwardRight(View view) {
        drive(MOVEMENT_SPEED, STEERING_ANGLE, "Moving forward left");
    }

    public void moveBackward(View view) {
        drive(MOVEMENT_SPEED, STRAIGHT_ANGLE, "Moving backward");
    }
}