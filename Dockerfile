
FROM ubuntu:19.04
WORKDIR /source

RUN apt-get update
RUN apt-get install -y golang-go 
RUN apt-get install -y nodejs npm 

COPY . .

# RUN go mod init pororift-client
# RUN go build ./pororift-client-server.go 
# RUN npm install 
# RUN npm run build 

# EXPOSE 443

ENTRYPOINT ["./pororift-client-server"]