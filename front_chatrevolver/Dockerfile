FROM node:16-alpine

# Create app directory
RUN mkdir -p /usr/src/app/front/
WORKDIR /usr/src/app/front/

# Install app dependencies
COPY package*.json ./
RUN npm install --legacy-peer-deps


# Bundle app source
COPY . .
ENV ADMIN_API_URL=https://localhost:8080
RUN npm run build

EXPOSE 3000
CMD [ "npm", "start" ]