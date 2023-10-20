
## howto run
        in docker/node/Dockerfile disable run npm:
        # CMD [ "npm", "run", "dev", "--", "--host", "0.0.0.0" ]

        SELECT 1 or 2
        1. after clone from repo
        docker compose up 
        attach shell vvd-vite:
        npm install

        docker compose down
        in docker/node/Dockerfile ENABLE run npm:
        CMD [ "npm", "run", "dev", "--", "--host", "0.0.0.0" ]


        2. for init brand new 
        docker compose up 
        attach shell vvd-vite:
                npm create vite@latest
                --select what you need
                --then
                cd *your project folder*
                npm install
                --npm suggests you run: npm run dev 
                --but dont do it. See at Dockerfile CMD [npm run dev -- --host 0000]

        docker compose down
        in docker/node/Dockerfile ENABLE run npm:
        CMD [ "npm", "run", "dev", "--", "--host", "0.0.0.0" ]


        docker compose up 

        Then you can use:  
                cd /var/www/vvd-vite && npx vite build  
                npx vite --help 
                npx vite build  

       
## info       
        npx vite build - build ready-site and place html\css\js into "dist" folder. 

        http://vvd.ru/ - build ready-site and place html\css\js into "dist" folder. 
        http://vite.vvd.ru/ - see reactive live site 
        http://localhost:5173  - see reactive live site 

## SSL
        sudo openssl req -x509 -nodes -days 2365 -newkey rsa:2048 -keyout /home/eva/DEV/www/VueViteDocker/docker/nginx/ssl/nginx-selfsigned.key -out /home/eva/DEV/www/VueViteDocker/docker/nginx/ssl/nginx-selfsigned.crt

        FQDN: vvd.ru   



