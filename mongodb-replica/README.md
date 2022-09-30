# Mongodb Replica guides


For some reason replicates require you to generate some sort of a key file so do the below before running

#### Setup keyfile
```

openssl rand -base64 756 > keyfile
chmod 600 keyfile
sudo chown 999 keyfile
sudo chgrp 999 keyfile

docker-compose up -d
docker ps
```

### Run docker-compose

```
docker-compose up -d
```

### MongoDB Compass

https://www.mongodb.com/products/compass


Compass can be used to manipulate the data

Use the below connection string to connect to replicas

```
mongodb://root:root@localhost:57017/?authSource=admin&readPreference=primary&directConnection=true&ssl=false
```
