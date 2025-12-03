# ==========================
# React + Firebase (Vite) dev server in Docker
# ==========================
FROM node:20-alpine

# Create app directory
WORKDIR /usr/src/app

# Install deps from package.json
COPY package*.json ./
RUN npm install

# Copy the rest of the app
COPY . .

# Vite dev server will run on 3000 inside container
EXPOSE 3000

# Vite: run dev server on 0.0.0.0:3000 so Docker can access it
CMD ["npm", "start"]
