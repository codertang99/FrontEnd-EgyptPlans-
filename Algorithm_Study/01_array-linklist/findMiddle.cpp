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


// 找到中间节点
ListNode *findMiddle(List &list) {

  ListNode *pSlow = list.pHead, *pFast = list.pHead;
  if(pSlow == NULL) return NULL;

  int pos = -1;
  while (pFast->pNext != NULL) {

    if(pFast->pNext != NULL) {
      pFast = pFast->pNext;
    }

    if(pFast->pNext == NULL) {
      pos = 1;
    }

    if(pFast->pNext != NULL) {
      pFast = pFast->pNext;
    }

    if(pos == -1)
      pSlow = pSlow->pNext;
  }

  return pSlow;
  
}


void traverse(List &list) {
  ListNode *p = list.pHead;
  while (NULL != p) {
    printf("%d\t", p->val);
    p = p->pNext;
  }
  printf("\n");
}


int main() {

  List l;
  init(l);
  insert(l, 0, 1);
  insert(l, 0, 2);
  insert(l, 0, 3);
  insert(l, 1, -2);
  insert(l, -1, -5);
  insert(l, 5, -7);
  traverse(l);
  printf("%d\n", findMiddle(l)->val);

  system("pause");
  return 0;
}