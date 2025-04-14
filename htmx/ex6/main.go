package main

import (
	"embed"
	"encoding/json"
	"fmt"
	"log"
	"net/http"
)

//go:embed index.html
var web embed.FS

func bodyHandler(rw http.ResponseWriter, r *http.Request) {
	log.Println("Method: ", r.Method)

	s := struct {
		Name string `json:"name"`
		Age  int    `json:"age"`
	}{
		Name: "John Doe",
		Age:  30,
	}

	b, err := json.Marshal(s)
	if err != nil {
		log.Println(err)
		rw.WriteHeader(http.StatusInternalServerError)
		return
	}

	rw.WriteHeader(http.StatusOK)
	rw.Write(b)
}

func main() {
	port := "8080"
	mux := http.NewServeMux()
	mux.Handle("GET /", http.FileServer(http.FS(web)))
	mux.HandleFunc("GET /api/user", bodyHandler)

	log.Printf("Starting web %s", port)
	log.Fatal(http.ListenAndServe(fmt.Sprintf("0.0.0.0:%s", port), mux))
}
