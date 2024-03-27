package main

import (
	"embed"
	"fmt"
	"io"
	"log"
	"net/http"
)

//go:embed htmx.min.js
//go:embed index.html
var web embed.FS

func router() {
	port := "8080"
	mux := http.NewServeMux()
	mux.Handle("GET /", http.FileServerFS(web))
	mux.HandleFunc("GET /test", func(w http.ResponseWriter, r *http.Request) {
		w.WriteHeader(http.StatusOK)
		fmt.Fprintf(w, "Greetings")
	})
	mux.HandleFunc("POST /data", func(w http.ResponseWriter, r *http.Request) {

		b, err := io.ReadAll(r.Body)
		if err != nil {
			w.WriteHeader(http.StatusForbidden)
			return
		}
		defer r.Body.Close()

		log.Println(string(b))

		w.WriteHeader(http.StatusOK)
		fmt.Fprintf(w, string(b))
	})
	log.Printf("Starting web %s", port)
	log.Fatal(http.ListenAndServe(fmt.Sprintf("0.0.0.0:%s", port), mux))
}

func main() {
	router()
}
