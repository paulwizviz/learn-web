FROM golang:alpine3.19 AS builder

WORKDIR /opt

COPY ./cmd ./cmd
COPY ./htmx ./cmd/htmx
COPY ./go.mod ./go.mod
# COPY ./go.sum ./go.sum

RUN go mod download && \
    env CGO_ENABLED=0 env GOOS=linux GOARCH=amd64 go build -ldflags="-w -s" -o ./build/htmx ./cmd/htmx

FROM alpine:3.19

COPY --from=builder /opt/build/htmx /usr/local/bin/htmx

CMD ["/usr/local/bin/htmx"]