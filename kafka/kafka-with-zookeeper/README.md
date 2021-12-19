# Setup kafka
A quick and easy way to set up kafka locally 

## Start kafka container
```
docker-compose up -d
```

## Useful kafka commands

Create new topic and view topics.
```
docker exec -it kafka1 kafka-topics --create --topic test-topic --bootstrap-server localhost:9092 --replication-factor 1 --partitions 4
```

Start producing to topics
```
docker exec -it kafka1 kafka-console-producer --broker-list localhost:9092 --topic test-topic 
```

Consume from topics
```
docker exec -it kafka1 kafka-console-consumer --bootstrap-server localhost:9092 --topic test-topic --from-beginning
```

Ssh inside kafka container
```
docker exec -it kafka1 /bin/bash
```