# syntax=docker/dockerfile:1

FROM node:12.18.1

ENV NODE_ENV=production

WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile
COPY . .
RUN yarn build

EXPOSE 3000
CMD ["yarn", "start"]