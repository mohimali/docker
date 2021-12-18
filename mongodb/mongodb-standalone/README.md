## Mongodb standalone
The docker-compose file contains the username and password. Run the below
```
docker-compose -f docker-compose-standalone.yml up -d
```

You can connect via mongodb compass using the following connection string
```
mongodb://root:root@localhost:27017/?authSource=admin&readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false
```