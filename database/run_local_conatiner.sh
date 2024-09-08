
docker build -f Dockerfile.database -t my-database-image .

docker run -d --name my-database-container -p 27017:27017 my-database-image
