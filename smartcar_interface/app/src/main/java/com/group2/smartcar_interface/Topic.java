package com.group2.smartcar_interface;
public class Topic {
    String testTopic = "test";
    String right = "/smartcar/control/steering/right";
    String left = "/smartcar/control/steering/left";
    String forward = "/smartcar/control/throttle/forward";
    String reverse = "/smartcar/control/throttle/reverse";
    String cameraTopic = "/smartcar/camera";
    String frontSensorTopic = "/smartcar/ultrasound/front";
    String infraredFrontTopic = "/smartcar/infrared/front";
    public final int IDLE = 0;
    public final String STRAIGHT = "0";
    public final String VELOCITY = "100";
    public final int DIRECTION = 50;

    public String getForward() {
        return forward;
    }

    public String getReverse() {
        return reverse;
    }

    public String getLeft() {
        return left;
    }

    public String getRight() {
        return right;
    }
}
