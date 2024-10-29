FROM node AS base
WORKDIR /app
COPY package.* .
RUN npm install
COPY . .
EXPOSE 3000

FROM base AS development
ENV NODE_ENV=development
CMD ["npm", "run", "dev"]

FROM base AS production
ENV NODE_ENV=production
RUN npm run build
CMD ["npm", "start"]