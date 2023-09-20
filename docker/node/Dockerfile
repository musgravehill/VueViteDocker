FROM node:lts-alpine

# ENV available always. I get .env in docker-compose.yml, then pass data in build: args:
# there is no way to pass ENVs to Dockerfile from outer sources? 
ENV ENV_WORKDIR=${ARG_WORKDIR}  

# Arguments will be defined in docker-compose.yml 
# Args available only in build-time 
# Set default values. 
ARG ARG_USER=node



# RUN позволяет выполнять команды внутри вашего docker-образа
# такие команды выполняются только один раз во время сборки и создают новый слой в итоговом docker-образе

# CMD — аргументы по умолчанию для ENTRYPOINT
# ENTRYPOINT — команда по умолчанию, которая будет выполнена при запуске контейнера

USER ${ARG_USER}

# CMD ["sh", "-c", "npm install && npm run dev -- --host"]
CMD [ "npm", "run", "dev", "--", "--host", "0.0.0.0" ]

WORKDIR ${ENV_WORKDIR}