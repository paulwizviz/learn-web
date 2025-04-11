package main

import (
	"embed"
	"fmt"
	"io"
	"log"
	"net/http"
)

//go:embed index.html
var web embed.FS

func getHandler(rw http.ResponseWriter, r *http.Request) {
	log.Println(r.URL)
	rw.WriteHeader(http.StatusOK)
}

func bodyHandler(rw http.ResponseWriter, r *http.Request) {
	log.Println("Method: ", r.Method)

	body := r.Body
	defer r.Body.Close()

	b, err := io.ReadAll(body)
	if err != nil {
		log.Println(err)
		return
	}

	log.Println(string(b))
	rw.WriteHeader(http.StatusOK)
}

func main() {
	port := "8080"
	mux := http.NewServeMux()
	mux.Handle("GET /", http.FileServer(http.FS(web)))
	mux.HandleFunc("GET /clicked", getHandler)
	mux.HandleFunc("POST /clicked", bodyHandler)
	mux.HandleFunc("PUT /clicked", bodyHandler)

	log.Printf("Starting web %s", port)
	log.Fatal(http.ListenAndServe(fmt.Sprintf("0.0.0.0:%s", port), mux))
}
