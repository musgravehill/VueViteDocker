FROM node:lts-alpine

#ENV available always. I get .env in docker-compose.yml, then pass data in build: args:
#there is no way to pass ENVs to Dockerfile from outer sources? 
ENV ENV_WORKDIR=${ARG_WORKDIR}  

# Arguments will be defined in docker-compose.yml 
#Args available only in build-time 
#Set default values. 
ARG ARG_USER=node

USER ${ARG_USER}

#CMD ["sh", "-c", "npm install && npm run dev -- --host"]
CMD [ "npm", "run", "dev", "--", "--host", "0.0.0.0" ]

# Set working directory
WORKDIR ${ENV_WORKDIR}