// 底层使用链表来实现栈数据结构
#include <stdio.h>
#define DETAUL_SIZE 1024
#define Error -99999999

template <class T>
struct ListNode {
  T *data;
  int pCursor;  // 指向栈顶第一个无效的位置
  struct ListNode *pNext;
};

template <class T>
struct Stack {
  ListNode<T> *sHead;
  int length;
};

template <class T>
void init(ListNode<T> &node) {
  node.data = new T[DETAUL_SIZE];
  node.pCursor = 0;
  node.pNext = NULL;
}

template <class T>
void init(Stack<T> &stack) {
  stack.length = 0;
  stack.sHead = new ListNode<T>;
  init<T>(*stack.sHead);
}

template <class T>
void destroy(ListNode<T> *node) {
  delete[] node->data;// 删除链表中data内存
  delete[] node;  // 删除链表节点
}

template <class T>
void destroy(Stack<T> &stack) {

  ListNode<T> *p = stack.sHead, *pNext = NULL;
  if(NULL != p) {
    pNext = p->pNext;
    destroy<T>(p); 
    stack.sHead = pNext;
    p = p->pNext;
  }
}


template <class T>
int isEmpty(Stack<T> &stack) {
  ListNode<T> *p = stack.sHead;

  if(p == NULL) {
    return 1;
  }

  if(p->pNext == NULL && p->pCursor <= 0) {
    return 1;
  }

  return 0;

}

template <class T>
void push(Stack<T> &stack, T value) {
  ListNode<T> *p = stack.sHead;

  if(p == NULL) return;
  
  if(p->pCursor>=0 && p->pCursor<DETAUL_SIZE) {
    *(p->data + p->pCursor) = value;
    p->pCursor++;
    stack.length++;
  } else {
    ListNode<T> *node = new ListNode<T>;
    init<T>(*node);
    node->pNext = p;
    stack.sHead = node;
    *(node->data + node->pCursor) = value;
    node->pCursor++;
    stack.length++;
  }

}

template <class T>
T pop(Stack<T> &stack) {
  ListNode<T> *p = stack.sHead, *pNext = NULL;
  T value = Error;
  if(!isEmpty(stack)) {
    if(p->pCursor==0 && p->pNext != NULL) {
      pNext = p->pNext;
      destroy<T>(p);
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

template <class T>
T getTop(Stack<T> &stack) {
  ListNode<T> *p = stack.sHead, *pNext = NULL;
  T value = Error;
  if(!isEmpty(stack)) {
    if(p->pCursor==0 && p->pNext != NULL) {
      pNext = p->pNext;
      value = *(p->data + p->pCursor - 1);
      return value;
    } else {
      value = *(p->data + p->pCursor - 1);
      return value;
    }
  }
  
  return value;
}

int main() {
  Stack<char> stack;
  init(stack);
  push(stack, 'a');
  push(stack, 'b');
  push(stack, 'c');
  push(stack, 'd');
  printf("%d\n", stack.length);
  printf("%c\n", pop(stack));
  printf("%c\n", pop(stack));
  printf("%c\n", pop(stack));
  printf("%c\n", pop(stack));
  printf("%c\n", pop(stack));
  printf("%d\n", stack.length);

  return 0;
}
