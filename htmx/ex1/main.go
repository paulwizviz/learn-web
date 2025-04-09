package main

import (
	"embed"
	"fmt"
	"log"
	"net/http"
)

//go:embed index.html
var web embed.FS

func clickHandler(rw http.ResponseWriter, r *http.Request) {
	rw.WriteHeader(http.StatusOK)
	rw.Write([]byte("<h1>Hello World</h1>"))
}

func main() {
	port := "8080"
	mux := http.NewServeMux()
	mux.Handle("GET /", http.FileServer(http.FS(web)))
	mux.HandleFunc("GET /clicked", clickHandler)

	log.Printf("Starting web %s", port)
	log.Fatal(http.ListenAndServe(fmt.Sprintf("0.0.0.0:%s", port), mux))
}
