from connection.publisher import Publisher 
from connection.topic import Topic

pub = Publisher()
topic = Topic()

pub.start()

pub.send(topic.test, "hello world!")