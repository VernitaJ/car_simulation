package Controls;

public class joystick {
    String testTopic = "test";
    String steeringRightTopic = "/smartcar/control/steering/right";
    String steeringLeftTopic = "/smartcar/control/steering/left";
    String throttleForwardTopic = "/smartcar/control/throttle/forward";
    String throttleReverseTopic = "/smartcar/control/throttle/reverse";
    String cameraTopic = "/smartcar/camera";
    String frontSensorTopic = "/smartcar/ultrasound/front";
    String infraredFrontTopic = "/smartcar/infrared/front";
    int IDLE = 0;
    int STRAIGHT = 0;
    int VELOCITY = 100;
    int DIRECTION = 50;

    Connector connector = new Connector();


}
