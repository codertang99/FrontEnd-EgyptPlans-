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

// 根据下标获取值
int get(List &list, int index) {
  int n = Error;
  ListNode *p =  getNode(list, index);
  if(NULL != p) {
    n = p->val;
  }
  return n;
}

// 根据下标设置某个值
void set(List &list, int index, int value) {
  ListNode *p =  getNode(list, index);
  if(NULL != p) {
    p->val = value;
  }
}

// 返回长度
int getLength(List &list) {
  return list.length;
}

ListNode *findNode(List &list, int value) {

  ListNode *p = list.pHead;
  while (NULL != p) {
    if(p->val == value) {
      break;
    }
    p = p->pNext;
  }
  return p;

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

// 获取前一个的值
int prev(List &list, int index) {
  return get(list, index-1);
}

// 获取后一个的值
int next(List &list, int index) {
  return get(list, index+1);
}

ListNode *prevNode(List &list, ListNode *crNode) {
  ListNode *pPre = list.pHead;
  ListNode *cCur = NULL;
  while(NULL != pPre) {
    cCur = pPre->pNext;
    if(cCur->val == crNode->val) {
      break;
    }
    pPre = cCur->pNext;
  }
  return pPre;
}

ListNode *nextNode(List &list, ListNode *crNode) {
  return findNode(list, crNode->pNext->val);
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
  printf("%d, %d, %d, %d\n", get(l, 0), getNode(l, 0)->val, find(l, -2), findNode(l, -2)->val);
  printf("%d, %d, %d, %d\n", prev(l, 1), next(l, 1), prevNode(l, getNode(l, 1))->val, nextNode(l, getNode(l, 1))->val);
  remove(l, 0);
  remove(l, 3);
  traverse(l);

  system("pause");
  return 0;
}