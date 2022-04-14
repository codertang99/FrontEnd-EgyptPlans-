package main

import (
	"fmt"
	"html/template"
	"io"
	"log"
	"net/http"
	"os"
	"strconv"
	"strings"
)

func helloWorld(w http.ResponseWriter, r *http.Request) {
	r.ParseForm()

	fmt.Fprintf(w, "helloWorld")
}

func index(w http.ResponseWriter, r *http.Request) {
	r.ParseForm()
	t, _ := template.ParseFiles("index.html")
	t.Execute(w, nil)
	// fmt.Fprintf(w, "111111111")
}

func login(w http.ResponseWriter, r *http.Request) {
	r.ParseForm()

	for k, v := range r.Form {
		fmt.Println("    key: ", k)
		fmt.Println("  value:", strings.Join(v, ""))
	}

	if r.Form["username"][0] == "tang" && r.Form["password"][0] == "123" {
		fmt.Fprintf(w, "登录成功")
	} else {
		fmt.Fprintf(w, "登录失败")
	}

}

func cross(w http.ResponseWriter, r *http.Request) {
	r.ParseForm()

	p1, _ := strconv.ParseInt(r.Form["p1"][0], 10, 32)
	p2, _ := strconv.ParseInt(r.Form["p2"][0], 10, 32)
	crossFn := r.Form["fn"][0]

	sum := p1 + p2;
	w.Header().Set("Content-type", "application/json")

	fmt.Fprintf(w, crossFn + "('{\"SUM\":%d}')", sum)

}

func upload(w http.ResponseWriter, r *http.Request) {
	r.ParseForm()

	// 上传的本地文件的地址
	destLocalPath := "./html/file/"
	// 申请内存
	r.ParseMultipartForm(32 << 20)

	clientfd, handle, err := r.FormFile("fileupload")

	if err != nil {
		fmt.Println("fileupload fail", err.Error())
		fmt.Fprintf(w, "upload fail")
		return
	}
	defer clientfd.Close()

	localPath := fmt.Sprintf("%s%s", destLocalPath, handle.Filename)
	localfd, err := os.OpenFile(localPath, os.O_WRONLY|os.O_CREATE, 0666)

	if err != nil {
		fmt.Println("openfile fail", err.Error())
		fmt.Fprintf(w, "openfile fail")
		return
	}
	defer localfd.Close()

	io.Copy(localfd, clientfd)
	fmt.Fprintf(w, "upload successful")

}

func main() {
	fmt.Println("hello go")

	http.HandleFunc("/helloWorld", helloWorld)
	http.HandleFunc("/index", index)
	http.HandleFunc("/login", login)
	http.HandleFunc("/cross", cross)
	http.HandleFunc("/upload", upload)

	http.Handle("/html/", http.StripPrefix("/html/", http.FileServer(http.Dir("html"))))

	err := http.ListenAndServe(":9092", nil)
	if err != nil {
		log.Fatal("listenAndServe", err)
	}

}