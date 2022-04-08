package main

import (
	"encoding/json"
	"fmt"
	"log"
	"net/http"
	"strings"
	"time"
)

var timeout int64 = 0
var access_token string = ""

func getToken() string {

	if time.Now().Unix() > timeout {
		req, err := http.NewRequest("get", "https://api.weixin.qq.com/cgi-bin/token", nil)
		if err != nil {
			log.Fatal(err)
		}

		// grant_type=client_credential&appid=wx50587d7d3ee2e2fa&secret=c7b3cf701af8d8a264b736cc8ed3de6c
		q := req.URL.Query()
		q.Set("grant_type", "client_credential")
		q.Set("appid", "wx50587d7d3ee2e2fa")
		q.Set("secret", "c7b3cf701af8d8a264b736cc8ed3de6c")

		req.URL.RawQuery = q.Encode()
		fmt.Println(req.URL.RawQuery)

		var resp *http.Response
		resp, err = http.DefaultClient.Do(req)
		if err != nil {
			log.Fatal(err)
		}

		jMap := make(map[string]interface{})
		err = json.NewDecoder(resp.Body).Decode(&jMap)

		if err != nil {
			log.Fatal(err)
		}
		resp.Body.Close()

		// 通过appid和secret调用微信接口, 获取accesstoken, 获取到token后即上一个token失效
		// token之间有5的重叠
		// var access_token string = ""

		if jMap["errcode"] == nil || jMap["errcode"] == "0" {
			access_token, _ = jMap["access_token"].(string)
			timeout, _ = jMap["expires_in"].(int64)
			timeout += time.Now().Unix()
			// fmt.Println(access_token)
		} else {
			fmt.Println("error none")
		}
	}

	return access_token
}

func setMenu() bool {
	postedString := `
	{
		"button":[
			{	
					"type":"click",
					"name":"Codertang",
					"key":"v1001"
			},
			{
			"name":"菜单",
			"sub_button":[
				{	
					"type":"view",
					"name":"搜索",
					"url":"http://www.soso.com/"
				},
				{
					"type":"click",
					"name":"hello",
					"key": "v1002"
				},
				{
					"type":"click",
					"name":"赞一下我们",
					"key":"v1003"
				}]
			}]
		}
	`

	req, err := http.NewRequest("post", "https://api.weixin.qq.com/cgi-bin/menu/create", strings.NewReader(postedString))
	if err != nil {
		log.Fatal(err)
	}

	q := req.URL.Query()
	q.Set("access_token", getToken())

	req.URL.RawQuery = q.Encode()
	var resp *http.Response
	resp, err = http.DefaultClient.Do(req)
	if err != nil {
		log.Fatal(err)
		return false
	}
	// value, err :=ioutil.ReadAll(resp.Body)
	// fmt.Println(string(value))

	jMap := make(map[string]interface{})
	err = json.NewDecoder(resp.Body).Decode(&jMap)
	if err != nil {
		log.Fatal(err)
		return false
	}

	resp.Body.Close()

	if jMap["errmsg"] == "ok" {
		// 正常返回
	} else {
		return false
	}
	for k, v := range jMap {
		fmt.Println(k, v)
	}


	return true
}

func main() {
	fmt.Println(setMenu())
}