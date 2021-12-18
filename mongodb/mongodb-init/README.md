## Mongodb with init script
For pre-creating mongodb collections. Use the docker-entrypoint-initdb.d/mongo-init.js file to pre-populate the db
```
docker-compose -f docker-compose-init.yml up -d
```
