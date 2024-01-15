# Step 1: Use an official Node runtime as a parent image
FROM node:20.11

# Step 2: Set the working directory
WORKDIR /app

# Step 3: Copy package.json and package-lock.json
COPY package*.json ./

# Step 4: Install app dependencies
RUN npm install

# Step 5: Bundle app source
COPY . .

# Step 6: Build the app
RUN npm run build

# Step 7: Use nginx to serve the React app
FROM nginx:alpine
COPY --from=0 /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
