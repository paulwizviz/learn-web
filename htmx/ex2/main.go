package main

import (
	"embed"
	"fmt"
	"log"
	"net/http"
)

//go:embed static/*
var fs embed.FS

//go:embed index.html
var web embed.FS

func staticHandler(rw http.ResponseWriter, r *http.Request) {
	filePath := "static" + r.URL.Path[len("/static"):]
	fileContent, err := fs.ReadFile(filePath)
	if err != nil {
		http.NotFound(rw, r)
		return
	}

	// Set appropriate content type
	rw.Header().Set("Content-Type", "application/javascript")
	rw.Write(fileContent)
}

func tab1HDL(w http.ResponseWriter, r *http.Request) {
	w.Write([]byte(`<p style="color:DodgerBlue;" >Hello Tab 1</p>`))
}

func tab2HDL(w http.ResponseWriter, r *http.Request) {
	w.Write([]byte(`<p style="color:MediumSeaGreen;">Hello Tab 2</p>`))
}

func tab3HDL(w http.ResponseWriter, r *http.Request) {
	w.Write([]byte(`<p style="color:Tomato;">Hello Tab 3</p>`))
}

func main() {
	port := "8080"
	mux := http.NewServeMux()
	mux.HandleFunc("GET /static/htmx.min.js", staticHandler)
	mux.Handle("GET /", http.FileServer(http.FS(web)))
	mux.HandleFunc("GET /tab1", tab1HDL)
	mux.HandleFunc("GET /tab2", tab2HDL)
	mux.HandleFunc("GET /tab3", tab3HDL)

	log.Printf("Starting web %s", port)
	log.Fatal(http.ListenAndServe(fmt.Sprintf("0.0.0.0:%s", port), mux))
}
