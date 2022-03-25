## Setup portainer
```
docker-compose up -d
```

Access url at http://localhost:9000

It will allow you to create an account, if you forget it then clean and start again

## Clean
```
docker stop portainer
docker rm portainer
rm -rf portainer_data
```
