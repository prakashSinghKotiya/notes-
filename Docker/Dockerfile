// THIS FILE IS THE IMAGE OF THAT SERVICE AND DEFINES HOW IT SHOULD BE BUILT
// THIS FILE IS BUILD INSIDE THE SRC FOLDER 

# 1. Get Node.js environment
FROM node:22-alpine

# 2. Set working directory
WORKDIR /app

# 3. Copy package files
COPY package*.json ./

# 4. Install dependencies // ONLY ISNTALLING NPM IF THERE IS CHANGE IN PACKAGE.JSON FILES 
RUN npm install

# 5. Copy application code 
COPY . . 

# 6. Expose application port THE BACKEN WILL RUN ON THIS PORT 
EXPOSE 5000

# 7. Start application
CMD ["npm", "start"]


// AND TO BUILD THIS IMAGE USE : dcoker build -t imagename : this will build an iamge so we can use this image inside container
// ie dockercompose file

# docker build → Build an image.
# -t imagename → Give the image a name/tag.
# . → Use the current directory as the build context.


# 1. Where is /app created?
# Inside the Docker image's filesystem.