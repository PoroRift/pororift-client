FROM golang:1.11 AS builder
WORKDIR /go-source


COPY ./pororift-client-server.go .

RUN go mod init pororift-client
RUN go build ./pororift-client-server.go

FROM ubuntu:19.04
WORKDIR /app

COPY --from=builder /go-source/pororift-client-server .
RUN apt-get update && \
        apt-get -y install sudo
RUN apt-get install -y nodejs npm 

COPY . .

RUN npm install && \
        npm run build

EXPOSE 443

ENTRYPOINT ["./pororift-client-server"]