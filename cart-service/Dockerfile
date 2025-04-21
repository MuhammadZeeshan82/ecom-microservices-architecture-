# Use Node.js base image
FROM node:18

# Set working directory inside container
WORKDIR /app

# Copy package files and install deps
COPY package*.json ./
RUN npm install

# Copy everything else
COPY . .

# Expose the port
EXPOSE 5002

# Start the app
CMD ["node", "index.js"]
