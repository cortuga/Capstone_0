dotnet publish -c Release   

REM # publishes the app. command above

cp dockerfile ./bin/release/netcoreapp2.2/publish

REM # line above. Moves the docker file to a new release folder

docker build -t capstone_0 ./bin/release/netcoreapp2.2/publish

REM # line above. 

docker tag capstone_0 registry.heroku.com/capstone0/web

docker push registry.heroku.com/capstone0/web

heroku container:release web -a capstone0


# sudo chmod 755 deploy.bat ./deploy.bat

# ./deploy.bat