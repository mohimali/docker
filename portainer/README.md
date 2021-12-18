## Setup portainer
```
docker-compose up -d
```

Access url at http://localhost:9000


## Clean
```
docker stop portainer
docker rm portainer
rm -rf portainer_data
```