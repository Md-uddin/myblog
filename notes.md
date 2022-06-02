
///for building docker image

-docker build -t name-of-image .

///to see the images 
-docker image ls

//to run the image (it also pull the image if it is available on dockerhub)
-docker run name-of-image

//to pull on docker hub
-docker pull repo/name-of-image

//to see all containers 
docker ps 
//to see all containers wheather they are stopped
-docker ps -a

//to run the shell in that images
-docker run -it ubuntu(image name)
 // to remove the image
 -docker image rm imageid

//running a react app on docker
-docker run -d -p 3000:3000 --name react-app image-name

//to open the bash in docker container(running)
-docker exec -it react-app bash
-ls( you can see the files)
-cd /foldername(to navigate)
-cat filename(to see the code inside file)

//To solve the problem for updating or hot reloading the container after changes 

-docker run -v dirlocaldirectory:contianerdirectory-d -p 3000:3000 --name react-app image-name

Ex: 



-docker run -v C:\Users\easea\OneDrive\Documents\onedrive\version 1.1\next-cypress-docker-more\with-cypress-app:/app   -d -p 3000:3000 --name react-app image-name

short form :
=for powershell

-docker run -v ${pwd}\src(if src to be tracked):app/src -d -p 3000:3000 --name react-app image-name

-docker run -v ${pwd}\src:app/src -d -p 3000:3000 --name react-app image-name

=for cmd
-docker run -v %cd%\src(if src to be tracked):app/src -d -p 3000:3000 --name react-app image-name

=for linux 
-docker run -v $(pwd)/src(if src to be tracked):app/src -d -p 3000:3000 --name react-app image-name

=for windows if it not works
-docker run -e CHOKIDAR_USEPOLLING=true -v ${pwd}:/app -d -p 3000:3000 --name react-app name-of-image



//some linux ubuntu comands 
-whoami (show the username)
-echo $0(show the directory where we are)
-history(show comands history)
-press Up and Down to get the previous commands


