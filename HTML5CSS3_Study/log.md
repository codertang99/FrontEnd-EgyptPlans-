<pre>
  # HTML/CSS( 笔记 )
    a) 浏览器的内核：渲染引擎(layout Engine, rendering Engine) + JS引擎
      1. Trident(IE的内核)
      2. EdgeHTML(Edge的内核) 
      3. Webkit(Safari)
      4. Chromium/Blink(Chrome)
      5. Gecko(FireFox)
      6. Presto(Opera, 已经废弃)
    b) HTML(hyper text markup language), 超文本标记语言
      1. 网页的整体框架
      2. strong 和 b 标签, 适用于html不同标准, strong带有语义化, b没有语义, 除之外还有3个
    c) CSS(cascading style sheets)
      1. 样式权重问题, 不进位, !important, id, class, markup, *,inherit
      2. margin, padding. 外边距合并问题, 外边距塌陷问题
      3. 布局
        a) 标准流
        b) 浮动, float
        c) 定位
      4. 清除浮动
        a) 添加标签法, clear: both
        b) after伪元素, clear: both
        c) after, before伪元素, display: table
        d) 父元素overflow:hidden
      5. 定位.(absolute、relative、fiexd、sticky)
      6. css压缩
        a) YUI Compressor(命令行, 安装jdk)
        b) Clean-CSS(在线网站压缩)
</pre>