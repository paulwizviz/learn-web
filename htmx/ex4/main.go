package main

import (
	"embed"
	"fmt"
	"log"
	"net/http"
	"time"
)

//go:embed index.html
var web embed.FS

func getTimeHandler(rw http.ResponseWriter, r *http.Request) {
	now := time.Now()
	timeNow := fmt.Sprintf("%02d:%02d:%02d", now.Hour(), now.Minute(), now.Second())
	rw.Header().Set("Content-Type", "text/html")
	rw.WriteHeader(http.StatusOK)
	rw.Write([]byte(fmt.Sprintf("<h1>%s</h1>", timeNow)))
}

func main() {
	port := "8080"
	mux := http.NewServeMux()
	mux.Handle("GET /", http.FileServer(http.FS(web)))
	mux.HandleFunc("GET /time", getTimeHandler)

	log.Printf("Starting web %s", port)
	log.Fatal(http.ListenAndServe(fmt.Sprintf("0.0.0.0:%s", port), mux))
}
