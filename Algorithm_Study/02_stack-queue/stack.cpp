// 底层使用链表来实现栈数据结构
#include <stdio.h>
#define DETAUL_SIZE 1024
#define Error -99999999

typedef struct listNode {
  int *data;
  int pCursor;  // 指向栈顶第一个无效的位置
  struct listNode *pNext;
} ListNode;

typedef struct stack {
  ListNode *sHead;
  int length;
} Stack;

void init(ListNode &node) {
  node.data = new int[DETAUL_SIZE];
  node.pCursor = 0;
  node.pNext = NULL;
}

void init(Stack &stack) {
  stack.length = 0;
  stack.sHead = new listNode;
  init(*stack.sHead);
}

void destroy(Stack &stack) {

  ListNode *p = stack.sHead, *pNext = NULL;
  if(NULL != p) {
    pNext = p->pNext;
    delete[] p->data; // 删除链表中data内存
    delete p; // 删除链表节点
    stack.sHead = pNext;
    p = p->pNext;
  }
}

void destroy(ListNode *node) {
  delete[] node->data;
  delete[] node;
}

int isEmpty(Stack &stack) {
  ListNode *p = stack.sHead;

  if(p == NULL) {
    return 1;
  }

  if(p->pNext == NULL && p->pCursor <= 0) {
    return 1;
  }

  return 0;

}

void push(Stack &stack, int value) {
  ListNode *p = stack.sHead;

  if(p == NULL) return;
  
  if(p->pCursor>=0 && p->pCursor<DETAUL_SIZE) {
    *(p->data + p->pCursor) = value;
    p->pCursor++;
    stack.length++;
  } else {
    ListNode *node = new ListNode;
    init(*node);
    node->pNext = p;
    stack.sHead = node;
    *(node->data + node->pCursor) = value;
    node->pCursor++;
    stack.length++;
  }

}

int pop(Stack &stack) {
  ListNode *p = stack.sHead, *pNext = NULL;
  int value = Error;
  if(!isEmpty(stack)) {
    if(p->pCursor==0 && p->pNext != NULL) {
      pNext = p->pNext;
      destroy(p);
      stack.sHead = pNext;
      p = pNext;
      p->pCursor--;
      stack.length--;
      value = *(p->data + p->pCursor);
      return value;
    } else {
      p->pCursor--;
      stack.length--;
      value = *(p->data + p->pCursor);
      return value;
    }
  }
  
  return value;
}

int main() {
  Stack stack;
  init(stack);
  push(stack, 1);
  push(stack, 2);
  push(stack, 3);
  push(stack, 4);
  printf("%d\n", stack.length);
  printf("%d\n", pop(stack));
  printf("%d\n", pop(stack));
  printf("%d\n", pop(stack));
  printf("%d\n", pop(stack));
  printf("%d\n", pop(stack));
  printf("%d\n", stack.length);

  return 0;
}
