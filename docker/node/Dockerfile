FROM node:lts-alpine

# Arguments will be defined in docker-compose.yml 
# Args available only in build-time 
# Set default values if need
ARG ARG_USER

#define this to pass ARG_WORKDIR from docker-compose.yml here
ARG ARG_WORKDIR  

# ENV available always. I get .env in docker-compose.yml, then pass data in build: args:
# there is no way to pass ENVs to Dockerfile from outer sources? 
ENV ENV_VITE_WORKDIR=${ARG_WORKDIR}  



# RUN позволяет выполнять команды внутри вашего docker-образа
# такие команды выполняются только один раз во время сборки и создают новый слой в итоговом docker-образе

# CMD — аргументы по умолчанию для ENTRYPOINT
# ENTRYPOINT — команда по умолчанию, которая будет выполнена при запуске контейнера

WORKDIR ${ENV_VITE_WORKDIR}

#RUN echo ${ENV_VITE_WORKDIR}  #thisIsDebug

# CMD ["sh", "-c", "npm install && npm run dev -- --host"]
CMD [ "npm", "run", "dev", "--", "--host", "0.0.0.0" ]

USER ${ARG_USER}