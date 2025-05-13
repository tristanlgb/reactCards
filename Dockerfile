# Step 1: Use an official Node.js runtime as a base image
FROM node:16-alpine

# Step 2: Set the working directory inside the container
WORKDIR /app

# Step 3: Copy the package.json and package-lock.json to install dependencies
COPY package*.json ./

# Step 4: Install dependencies
RUN npm install

# Step 5: Copy the rest of the application code into the container
COPY . .

# Step 6: Build the React application
RUN npm run build

# Step 7: Use an Nginx server to serve the static files
FROM nginx:stable-alpine

# Copy the build output to the Nginx HTML folder
COPY --from=0 /app/build /usr/share/nginx/html

# Expose port 80 to allow external access to the app
EXPOSE 80

# Start Nginx when the container starts
CMD ["nginx", "-g", "daemon off;"]
