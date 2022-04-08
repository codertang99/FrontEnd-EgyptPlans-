package main

import (
	"crypto/sha1"
	"encoding/xml"
	"fmt"
	"io"
	"io/ioutil"
	"log"
	"net/http"
	"sort"
	"strings"
	"time"
)

type RequestXML struct {
	ToUserName string
	FromUserName string
	CreateTime time.Duration
	MsgType string
	Content string
	MsgId int
	Event string
	EventKey string
}

type Response struct {
	XMLName xml.Name `xml:"xml"`
	ToUserName string `xml:"ToUserName"`
	FromUserName string `xml:"FromUserName"`
	CreateTime string `xml:"CreateTime"`
	MsgType string `xml:"MsgType"`
	Content string `xml:"Content"`
}

type ImgRepponse struct {
	XMLName xml.Name `xml:"xml"`
	ToUserName string `xml:"ToUserName"`
	FromUserName string `xml:"FromUserName"`
	CreateTime string `xml:"CreateTime"`
	MsgType string `xml:"MsgType"`
	ArticleCount string `xml:"ArticleCount"`
	Articles Item `xml:"Articles"`
}

type List struct {
	Title string `xml:"Title"`
	Description string `xml:"Description"`
	PicUrl string `xml:"PicUrl"`
	Url string `xml:"Url"`
}

type Item struct {
	Item List `xml:"item"`
}


func helloworld(w http.ResponseWriter, r *http.Request) {
	// fmt.Fprintf(w, "helloworld")
	// fmt.Printf("weixin is called")

	var signature, timestamp, nonce, echostr, token string
	token = "123"

	r.ParseForm()

	if v, ok := r.Form["signature"]; ok {
		signature = v[0]
	}

	if v, ok := r.Form["timestamp"]; ok {
		timestamp = v[0]
	}

	if v, ok := r.Form["nonce"]; ok {
		nonce = v[0]
	}

	if v, ok := r.Form["echostr"]; ok {
		echostr = v[0]
	}

	strs := []string{ token, timestamp, nonce }
	sort.Strings(strs)
	str := strings.Join(strs, "")

	t := sha1.New()
	io.WriteString(t, str)
	sha1 := fmt.Sprintf("%x", t.Sum(nil))

	if r.Method == "GET" {
		if sha1 == signature {
			fmt.Fprintf(w, echostr)
		} else {
			fmt.Fprintf(w, "false")
		}
	} else if r.Method == "POST" {
		if sha1 == signature {
			postMsg, err := ioutil.ReadAll(r.Body)
			if err != nil {
				log.Fatal("receiver err" + err.Error())
			}
			r.Body.Close()

			v := RequestXML{}
			xml.Unmarshal(postMsg, &v)

			if v.MsgType == "text" {
				fmt.Println(v.ToUserName, v.FromUserName)
				fmt.Println(v.CreateTime, v.Content)
				v2 := Response {
					ToUserName: v.FromUserName,
					FromUserName: v.ToUserName,
					CreateTime: fmt.Sprintf("%v", time.Now().Unix()),
					Content: "Codertang",
					MsgType: "text",
				}

				output, err := xml.MarshalIndent(v2, "", "    ")
				if err != nil {
					log.Fatal(err)
				}

				fmt.Fprintf(w, string(output))

			} else if v.MsgType == "event" {

				// str := ""
				// if v.EventKey == "v1001" {
				// 	str = "lucy"



				// } else if v.EventKey == "v1002" {
				// 	str = "kuli"
				// } else if v.EventKey == "v1003" {
				// 	str = "啦啦啦"
				// }

				// v2 := Response {
				// 	ToUserName: v.FromUserName,
				// 	FromUserName: v.ToUserName,
				// 	CreateTime: fmt.Sprintf("%v", time.Now().Unix()),
				// 	Content: "Codertang("+ str +") Hello",
				// 	MsgType: "text",
				// }

				if v.Event == "subscribe" {
					vs := Response {
						ToUserName: v.FromUserName,
						FromUserName: v.ToUserName,
						CreateTime: fmt.Sprintf("%v", time.Now().Unix()),
						Content: "感谢您的关注!!!! 我是Codertang",
						MsgType: "text",
					}

					output, err := xml.MarshalIndent(vs, "", "    ")
					if err != nil {
						log.Fatal(err)
					}

					fmt.Fprintf(w, string(output))
				}

				

				list := List {
					Title: "codertang的图文",
					Description: "世界毁灭啦\n世界毁灭啦\n世界毁灭啦\n",
					PicUrl: "https://st-gdx.dancf.com/gaodingx/0/uxms/design/20200817-160725-7e17.png?x-oss-process=image/resize,w_300/interlace,1,image/format,webp",
					Url: "https://mp.weixin.qq.com/s/fpBbZBaoWmc4vXfsAOW5ow",
				}
				item := Item {
					Item: list,
				}
				v2 := ImgRepponse {
					ToUserName: v.FromUserName,
					FromUserName: v.ToUserName,
					CreateTime: fmt.Sprintf("%v", time.Now().Unix()),
					MsgType: "news",
					ArticleCount: "1",
					Articles: item,
				}

				output, err := xml.MarshalIndent(v2, "", "    ")
				if err != nil {
					log.Fatal(err)
				}

				fmt.Fprintf(w, string(output))
			}

		}
	}

}

func main() {
	fmt.Println("hello")
	http.HandleFunc("/helloworld", helloworld)
	
	err := http.ListenAndServe(":9092", nil)
	if err != nil {
		log.Fatal("ListenAndServe")
	}
}