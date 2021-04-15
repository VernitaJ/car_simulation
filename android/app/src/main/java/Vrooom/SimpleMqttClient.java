package Vrooom;

import org.eclipse.paho.client.mqttv3.*;

/**
 * A sample application that demonstrates how to use the Paho MQTT v3.1 Client blocking API.
 *
 * It can be run from the command line in one of two modes:
 *  - as a publisher, sending a single message to a topic on the server
 *  - as a subscriber, listening for messages from the server
 *
 *  There are three versions of the sample that implement the same features
 *  but do so using using different programming styles:
 *  <ol>
 *  <li>Sample (this one) which uses the API which blocks until the operation completes</li>
 *  <li>SampleAsyncWait shows how to use the asynchronous API with waiters that block until
 *  an action completes</li>
 *  <li>SampleAsyncCallBack shows how to use the asynchronous API where events are
 *  used to notify the application when an action completes<li>
 *  </ol>
 *
 *  If the application is run with the -h parameter then info is displayed that
 *  describes all of the options / parameters.
 */
public class SimpleMqttClient implements MqttCallback {

    /**
     * The main entry point of the sample.
     * <p>
     * This method handles parsing of the arguments specified on the
     * command-line before performing the specified action.
     */

    MqttClient myClient;
    MqttConnectOptions connOpt;

        // Default settings:
        boolean quietMode = false;
        String action = "publish";
        String topic = "";
        String message = "Message from blocking Paho MQTTv3 Java client sample";
        int qos = 2;
        String broker = "tcp://46.101.108.246";
        int port = 1883;
        String username = "sauce";
        String password = "sauce";
        String clientId = null;
        String testTopic = "test";
        String steeringRightTopic = "/smartcar/control/steering/right";
        String steeringLeftTopic = "/smartcar/control/steering/left";
        String throttleForwardTopic = "/smartcar/control/throttle/forward";
        String throttleReverseTopic = "/smartcar/control/throttle/reverse";
        String cameraTopic = "/smartcar/camera";
        String frontSensorTopic = "/smartcar/ultrasound/front";
        String infraredFrontTopic = "/smartcar/infrared/front";

    static final Boolean subscriber = true;
    static final Boolean publisher = true;

    /**
     *
     * connectionLost
     * This callback is invoked upon losing the MQTT connection.
     *
     */
    @Override
    public void connectionLost(Throwable t) {
        System.out.println("Connection lost!");
        // code to reconnect to the broker would go here if desired
    }

    @Override
    public void messageArrived(String topic, MqttMessage message) throws Exception {

    }

    @Override
    public void deliveryComplete(IMqttDeliveryToken token) {

    }

    /**
     *
     * deliveryComplete
     * This callback is invoked when a message published by this client
     * is successfully received by the broker.
     *
     */
    public void deliveryComplete(MqttDeliveryToken token) {
        //System.out.println("Pub complete" + new String(token.getMessage().getPayload()));
    }

    /**
     *
     * messageArrived
     * This callback is invoked when a message is received on a subscribed topic.
     *
     */
    public void messageArrived(MqttTopic topic, MqttMessage message) throws Exception {
        System.out.println("-------------------------------------------------");
        System.out.println("| Topic:" + topic.getName());
        System.out.println("| Message: " + new String(message.getPayload()));
        System.out.println("-------------------------------------------------");
    }

    /**
     *
     * MAIN
     *
     */
    public static void main(String[] args) {
        SimpleMqttClient smc = new SimpleMqttClient();
    }

    /**
     *
     * runClient
     * The main functionality of this simple example.
     * Create a MQTT client, connect to broker, pub/sub, disconnect.
     *
     */

}