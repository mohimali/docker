# Sonar UI

## Start Sonar Docker UI
```
docker-compose up -d
docker ps
```

Ensure that both sonarqube and postgresql is running. If it fails to run at the same time, re-run docker above commands

## Install sonar-scanner

Sonar scanner is useful for running sonar commands

```
brew install sonar-scanner
sonar-scanner --version
```

If you don't have brew install it from the below website

https://brew.sh/

or run the below command and follow the instructions after installing brew to add brew to your .bashrc or .zshrc file
```
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

## Using sonar scanner
If you used brew to install sonar-scanner you can update the below file

```
nano /home/linuxbrew/.linuxbrew/Cellar/sonar-scanner/4.7.0.2747/libexec/conf/sonar-scanner.properties
```

Your file should be something like this pointing to your sonar instance

```
sonar.host.url=http://localhost:9000
```
 

## In your project you may need something like this in your sonar-project.properties file 



