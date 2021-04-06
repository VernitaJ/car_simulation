from connection import Publisher, Topic

pub = Publisher()
topic = Topic()

pub.start()

pub.send(topic.test, "hello world!")