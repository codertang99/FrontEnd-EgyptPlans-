
# Alogrithm

## data structure

> 数据结构
  + 时间复杂度
    * 讨论一个算法运行后时间和什么变量成正比
    * 加法原则: 总复杂度是总数量级最大的那段代码的复杂度
    * 乘法原则: 嵌套代码的复杂度等于嵌套内外代码复杂度的乘积
    * 常见的时间复杂度: O(1), O(logn), O(n), O(nlogn), O(n^2), O(n^2logn), O(n^3), O(e^n), O(n!)
    * 复杂度分析: 最好, 最坏, 平均, 均摊
  + 空间复杂度
    * 讨论算法运行时消耗的内存数量和什么变量成正比
  + 基础数据结构
    * 三要素: 逻辑结构、物理结构、操作
    * 数组: 
      - 逻辑结构 -> 线性
      - 物理结构 -> 连续的内存空间且类型相同
      - 别名 -> 线性表的顺序表示
      - 操作 -> init, destroy, get, set, getLength, find, prev, next, insert, remove, traverse, expend
      - 疑难问题: insert, delete的操作低效, 数组访问是否越界, 数组是否支持动态扩展
    * 链表:
      - 逻辑结构 -> 线性
      - 物理结构 -> 零散的内存块, 大小相同, 但是不连续, 链状链接
      - 别名 -> 线性表的链式表示
      - 操作 -> init, destroy, get, set, getLength, find, prev, next, insert, remove, traverse, expend
      - 疑难问题: 
        + 如何判断一个链表是否有环? 计算一个可能有环的单链表的长度
        + 翻转单链表(默认无环)
        + 哨兵概念 -> 练习: 用哨兵思路完成数组的find
        + 用单链表实现一个LRU算法
        + 练习: 找到单链表的倒数第n个节点
        + 练习: 求单链表的中间节点(floor(n/2))的节点
        + 练习: 有两个链表已经排好序(从小到大), 要求合并两个链表合并后的同样排好序
    * 栈(stack):
      - 特点: 后入先出(功能受限)
      - 分类: 线性表栈, 链表栈
      - 操作: init, destroy, push, pop, getTop, isEmpty
      - 应用: 函数调用, 四则运算的表达式规约
    * 队列(queue): 
      - 特点: 先进先出
      - 分类: 线性表队列, 链表队列
      - 操作: init, destroy, enqueue, dequeue, getLength
      - 疑难问题: 循环线性表队列, 线程安全(阻塞队列->锁, 互斥和信号量, 非阻塞队列 -> CAS)
  + 树
  + 图
  + 哈希表




> 算法
  + 排序算法
  + 查找算法
  + 图搜索算法
  + 递归
  + 字符串相关算法
  + 其它