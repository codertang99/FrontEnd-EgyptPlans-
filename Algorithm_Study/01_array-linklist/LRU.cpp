#include <stdio.h>
#include <ostream>

#define Error -999999999

typedef struct listNode {

  int val;
  struct listNode *pNext;

} ListNode;

typedef struct list {
  int length;
  ListNode *pHead;
} List;

// 根据下标获取ListNode
ListNode *getNode(List &list, int index) {

  ListNode *p = NULL;

  if(index >= 0 && index < list.length) {
    int i=0;
    p = list.pHead;
    while (i != index) {
      p = p->pNext;
      i++;
    }
  }

  return p;
}

void traverse(List &list) {
  ListNode *p = list.pHead;
  while (NULL != p) {
    printf("%d\t", p->val);
    p = p->pNext;
  }
  printf("\n");
  
}


// 根据下标删除值
void remove(List &list, int index) {

  if(index >= 0 && index < list.length) {

    ListNode *p = NULL;

    if(index == 0) {
      p = list.pHead;
      list.pHead = p->pNext;
    } else {
      ListNode *pPrev = getNode(list, index-1);
      p = pPrev->pNext;
      pPrev->pNext = p->pNext;
    }

    delete p;
    list.length--;

  }
}

// 根据值获取下标
int find(List &list, int value) {
  int i=0;
  ListNode *p = list.pHead;
  while (NULL != p) {
    if(p->val == value) {
      break;
    }
    i++;
    p = p->pNext;
  }

  if(i == list.length) {
    i = Error;
  }

  return i;
}

// LRU内存缓存算法
void access(List &list, int value) {

  ListNode *p = list.pHead, *pPrev = NULL;
  while (p != NULL) {
    if(p->val == value) {
      break;
    }
    pPrev = p;
    p = p->pNext;
  }

  if(p == NULL) {
    // 说明没找到, 往头部插入, 并删除最后一个
    remove(list, find(list, pPrev->val));
    ListNode *newP = new ListNode;
    newP->val = value;
    newP->pNext = list.pHead;
    list.pHead = newP;
  } else {
    // 找到了, 把当前p头部插入
    pPrev->pNext = p->pNext;
    p->pNext = list.pHead;
    list.pHead = p;
  }
  
}

// 根据下标插入
void insert(List &list, int index, int value) {

  // 插入的位置
  if(index == -1 || index == list.length || index>=0 && index<list.length) {

    if(index == -1 || index == list.length) {
      
      if(list.length != 0) {
        ListNode *p = getNode(list, list.length-1);
        ListNode *curNode = new ListNode;
        curNode->val = value;
        curNode->pNext = NULL;
        p->pNext = curNode;
      } else {
        ListNode *curNode = new ListNode;
        curNode->val = value;
        curNode->pNext = NULL;
        list.pHead = curNode;
      }

    } else {
      if(index == 0) {
        ListNode *p = list.pHead;
        ListNode *curNode = new ListNode;
        curNode->val = value;
        curNode->pNext = p;
        list.pHead = curNode; 

      } else {
        ListNode *p = getNode(list, index-1);
        ListNode *curNode = new ListNode;
        curNode->val = value;
        curNode->pNext = p->pNext;
        p->pNext = curNode;
      }
    }

    list.length++;
  }

}

// 初始化
void init(List &list) {
  list.pHead = NULL;
  list.length = 0;
}

// 销毁
void destroy(List &list) {

  ListNode *p = list.pHead, *pNext = NULL;

  while (NULL != p) {
    pNext = p->pNext;
    delete p;
    p = pNext;
  }

  list.length = 0;
  list.pHead = NULL;
}


int main() {
  List l;
  init(l);
  insert(l, 0, 1);
  insert(l, 0, 2);
  insert(l, 0, 3);
  insert(l, 0, 4);
  traverse(l);
  access(l, 3);
  traverse(l);
  access(l, 9);
  traverse(l);
  system("pause");
  return 0;
}