FROM node:18

# Create app directory
WORKDIR /usr/src/app
ENV DEMO_APP=Working

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm config set update-notifier false

RUN npm install --omit=dev --no-update-notifier
# If you are building your code for production
# RUN npm ci --omit=dev

# Bundle app source
COPY . .

EXPOSE 8080
CMD [ "node", "server.js" ]