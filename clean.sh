if [ "$(docker ps -q)" ]; then
    docker stop $(docker ps -q)
fi
if [ "$(docker ps -aq)" ]; then
    docker rm $(docker ps -aq)
fi
docker-compose down
docker image prune -f
docker rmi cu-passport-api
docker rmi cu-passport-mongo
docker volume prune -f