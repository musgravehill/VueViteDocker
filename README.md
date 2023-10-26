
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
        FQDN: vvd.ru  

        === Generate the root certificate ===

        Much better to use /usr/local/share/ca-certificates, 
        so you don't interfere with the package manager. /usr/local was specially reserved for this purpose. 
        https://refspecs.linuxfoundation.org/FHS_3.0/fhs/ch04s09.html

        cd /home/eva/DEV/cert
        sudo openssl req -x509 -nodes -days 2365 -newkey rsa:2048 -keyout myCA.key -out myCA.crt
        sudo cp myCA.crt /usr/local/share/ca-certificates/
        sudo update-ca-certificates  

        === Domain certificate ===

        cd /home/eva/DEV/cert

        sudo openssl genrsa -out vvd.ru.key 2048
        sudo openssl req -new -key vvd.ru.key -out vvd.ru.csr

        Create file vvd.ru.ext with:
        authorityKeyIdentifier=keyid,issuer
        basicConstraints=CA:FALSE
        keyUsage = digitalSignature, nonRepudiation, keyEncipherment, dataEncipherment
        subjectAltName = @alt_names
        [alt_names]
        DNS.1 = vvd.ru

        sudo openssl x509 -req -in vvd.ru.csr -CA myCA.crt -CAkey myCA.key -CAcreateserial \
        -out vvd.ru.crt -days 2365 -sha256 -extfile vvd.ru.ext

        === Chrome ===

        chrome://settings/certificates
        Import myCA.crt to "Сertification centers Certification authority CA" 


         

        
         

        

        
 



