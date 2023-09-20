FROM node:lts-alpine

# ENV always available 
ENV env_app_workdir = /var/www/vue-vite

# Arguments will be defined in docker-compose.yml  Set default values. Args available only in "build"-time 
ARG arg_user=node

USER ${arg_user}

#CMD ["sh", "-c", "npm install && npm run dev -- --host"]
CMD [ "npm", "run", "dev", "--", "--host", "0.0.0.0" ]

# Set working directory
WORKDIR ${env_app_workdir}