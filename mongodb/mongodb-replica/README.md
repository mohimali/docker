## Mongodb Replica
Mongodb Replicas use a key file for the certificate
```
chmod +x setup-cert.sh
./setup.sh
docker-compose -f docker-compose-replica.yml up -d
docker ps ## until container is healthy
```
