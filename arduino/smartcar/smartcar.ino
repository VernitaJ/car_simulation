// #if defined(__has_include) && __has_include("./secrets.hpp")
// #include "./secrets.hpp"
// #else
// #include "./secrets-defaults.hpp"
// #endif

#ifdef __SMCE__
#include <vector>
#include <MQTT.h>
#include <WiFi.h>
#include <OV767X.h>
#endif

#include <Smartcar.h>

#ifndef __SMCE__
WiFiClient net;
#endif
MQTTClient mqtt;
ArduinoRuntime arduinoRuntime;
BrushedMotor leftMotor(arduinoRuntime, smartcarlib::pins::v2::leftMotorPins);
BrushedMotor rightMotor(arduinoRuntime, smartcarlib::pins::v2::rightMotorPins);
DifferentialControl control(leftMotor, rightMotor);

SimpleCar car(control);

// CI you are are gandalf I am belrog
const char user[] = "public";
const char pass[] = "public";
const char ip[] = "127.0.0.1";
const int port = 1883;

const auto oneSecond = 1000UL;
const auto safetyTime = 100UL;
const auto triggerPin = 6;
const auto echoPin = 7;
const auto maxDistance = 400;
const auto redFrontPin = 0;

boolean allowForward = true;
int safetySpeed = 0;
SR04 front(arduinoRuntime, triggerPin, echoPin, maxDistance);
GP2D120 frontIR(arduinoRuntime, redFrontPin);

//std::vector<char> frameBuffer;

void setup()
{
    Serial.begin(9600);
#ifdef __SMCE__
    //int OV767X::begin(int resolution, int format, int fps)
    // Camera.begin(QVGA, RGB888, 60);
    // frameBuffer.resize(Camera.width() * Camera.height() * Camera.bytesPerPixel());
    mqtt.begin(ip, port, WiFi);
    // mqtt.begin(WiFi); // Will connect to localhost
#else
    mqtt.begin(net);
#endif
    if (mqtt.connect("arduino", user, pass))
    {
        mqtt.subscribe("/smartcar/control/#", 1);
        mqtt.onMessage([](String topic, String message) {
            handleInput(topic, message);
        });
    }
}

void loop()
{
    if (connected())
    {
        mqtt.loop();
        const auto currentTime = millis();
        obstacleDetection(currentTime);
    }
#ifdef __SMCE__
    // Avoid over-using the CPU if we are running in the emulator
    delay(35);
#endif
}

void handleInput(String topic, String message)
{

    if (topic == "/smartcar/control/throttle/forward" && allowForward)
    {
        car.setSpeed(message.toInt());
    }
    else if (topic == "/smartcar/control/throttle/reverse")
    {
        car.setSpeed(message.toInt());
    }
    else if (topic == "/smartcar/control/steering/left")
    {
        car.setAngle(message.toInt());
    }
    else if (topic == "/smartcar/control/steering/right")
    {
        car.setAngle(message.toInt());
    }
    else
    {
        println("imput ignored:");
        println(topic + " " + message);
    }
}

// object dection implementation
void obstacleDetection(long currentTime)
{
    static auto previousCheck = 0UL;
    if (currentTime - previousCheck >= safetyTime)
    {
        previousCheck = currentTime;
        const auto sonicDistance = String(front.getDistance()).toInt();
        const auto IRdistance = String(frontIR.getMedianDistance()).toInt();
        if (checkSensor(sonicDistance, 200))
        {
            if (allowForward)
            {
                allowForward = false;
                speed(0);
            }
        }
        else
        {
            allowForward = true;
        }
    }
}

boolean checkSensor(int sensorData, int max)
{
    if (0 < sensorData && sensorData < max)
    {
        return true;
    }
    else
    {
        return false;
    }
}

boolean connected()
{
    return mqtt.connected();
}

void speed(int speed)
{
    car.setSpeed(speed);
}
void println(String msg)
{
    Serial.println(msg);
}