const Koa = require("koa2")
const staticAssets = require("koa-static")

const app = new Koa()

app.use(staticAssets("./html"))

app.use((ctx, next) => {
  if(ctx.request.url == "/get") {
    ctx.status = 200
    ctx.body = ["中国", "俄罗斯", "巴基斯坦", "瑞士"]
  }
})

app.listen(3000, () => {
  console.log("服务器启动成功");
})