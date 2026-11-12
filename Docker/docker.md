# DOCKER:
docker help us to run any appliction without downloading the exact machine version that apppliaction need or any extra service that application needd for eg :
for running a nodejs server we need a node to be installe din our amchine to run node but if we dokersie a app and someone run taht app in his machine with the use of docker he can run it irrespective of he have node isntaled or exact same version or not . 

# STEPS :
easy steps to dockersise a app 
1. create a dockerfile inside the src and write all the comman that application need and etc  this is calle creating IMAGE ,
     use this command to build the image : docker build -t my-imagename  .

     how your image setup looks like :
     # 1. Get Node.js environment
FROM node:22-alpine

# 2. Set working directory
WORKDIR /app

# 3. Copy package files
COPY package*.json ./

# 4. Install dependencies
RUN npm install

# 5. Copy application code
COPY . .

# 6. Expose application port
EXPOSE 5000

# 7. Start application
CMD ["npm", "start"]

     this i basically creating a custom image we do this for services  that need mannuly to start like backend frontend , but there are pre made service in docker hub for db like monog redis postgresql so we use that for db but for backend and frontend we create these docker file means custom image .


2. create a docker compose.yaml file in the root and run that image using that dockerfile and this is called CONTAINER , we can add mutiple images here and run different images inisde on container and boom 

     use this command to run the container : docker run -d -p 5000:5000 --name backend my-backend

     BUT USE THIS AS WE WILLC REATE IMAAGED AND COMPSOED ALL THOSE IMAGE IN ONE COMPOSE FILE SO RUN THIS :
     docker compose -f ./filname up -d . this will run that compose file and run a container.

     -d flag un the service in bg its called detached mode ,
     -f flag means filenamee 

3.  so these are the only thing needed and it will be dockersie some NOTES :

* YOU NEED TO EXPOSE THE PORT TO ACCESS IT EG 4000:2020 , 2020 IS THE RUNNING PORT AND OUTER APPLCIATION CAN ACCESS IT USING PORT 4000

# VOLUME :
Docker Volumes are used to persist data and share files between your computer and Docker containers.

Let's understand why we need them.
1. First, understand the problem
Suppose you have a MongoDB container running.
You register a user in your application:
MongoDB stores this data inside the container's filesystem.

Now imagine you delete the MongoDB container and create a new one. the data will be detled as the container is not more there so this is why we nee volmd

2. we only need volume when we checking in developement in local we dont need when we using cloud storage like atals or anything .

3. we mount the data as anonymous , first we create volume service and add the volume name and give driver to setup local or whaat
eg: volume :
        mydbvolume :
            driver:local

 now inside the mongodb service we will use this name mydbvolume/pathname to store and mouunt the data .

 4. For local development, you can use a Bind Mount so that whenever you change your code on your computer, the changes are reflected inside your Docker container.               