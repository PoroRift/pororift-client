FROM golang:1.11 AS builder-go
WORKDIR /go-source


COPY ./pororift-client-server.go .

RUN go mod init pororift-client
RUN go build ./pororift-client-server.go

FROM node:10 AS builder-node
WORKDIR /node-source

COPY . .

RUN npm cache verify
RUN npm install 
RUN npm run test
RUN npm run build

FROM centos:7
WORKDIR /app

COPY --from=builder-node /node-source/dist ./dist/
COPY --from=builder-go /go-source/pororift-client-server .

EXPOSE 443

ENTRYPOINT ["./pororift-client-server"]