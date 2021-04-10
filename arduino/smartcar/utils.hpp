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

int msgToInt(String msg)
{
    return msg.toInt();
}

void println(String msg)
{
    Serial.println(msg);
}