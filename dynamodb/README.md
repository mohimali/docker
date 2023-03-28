# Docker Compose for DynamoDB with UI 

## Command to run app
```
docker-compose up -d

```

DynamoDB UI: http://localhost:8002


## Other useful commands if you have aws-cli installed
```
aws configure
aws dynamodb list-tables --endpoint-url http://localhost:8000
aws dynamodb delete-table --table-name VehicleShadow  --endpoint-url http://localhost:8000
aws configure get region
aws dynamodb create-table --cli-input-json file://./createTable.json --endpoint-url http://localhost:8000
```
