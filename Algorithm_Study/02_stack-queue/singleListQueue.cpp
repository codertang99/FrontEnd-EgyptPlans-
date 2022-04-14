#include <stdio.h>

template<class T>
struct ListNode {
  T data;
  struct ListNode *pNext;
};

template<class T>
struct Queue {
  ListNode<T> *pHead;
  ListNode<T> *pTail;
  int length;
};

template<class T>
void init(Queue<T> &queue) {
  queue.pHead = NULL;
  queue.pTail = NULL;
  queue.length = 0;
}

template<class T>
void destroy(Queue<T> &queue) {
  ListNode<T> *p = queue.pHead, *pNext = NULL;
  while (p != NULL) {
    pNext = p->pNext;
    delete p;
    p = pNext;
  }
  queue.pHead = NULL;
  queue.pTail = NULL;
  queue.length = 0;
  
}

template<class T>
int getLength(Queue<T> &queue) {
  return queue.length;
}

template<class T>
void enqueue(Queue<T> &queue, T value) {

  ListNode<T> *node = new ListNode<T>;
  node->data = value;
  node->pNext = NULL;

  if(queue.pHead == NULL) {
    queue.pHead = node;
    queue.pTail = node;
    queue.length++;
  } else {
    queue.pTail->pNext = node;
    queue.pTail = node;
    queue.length++;
  }
  
}

template<class T>
T dequeue(Queue<T> &queue) {
  T t;
  ListNode<T> *p = queue.pHead, *pNext = NULL;
  if(p != NULL) {
    pNext = p->pNext;
    queue.pHead = pNext;
    t = p->data;
    delete p;
    queue.length--;
    if(queue.pHead == NULL) {
      queue.pTail = NULL;
    }
  }
  return t;
  
}

int main() {

  Queue<int> queue;
  init(queue);
  enqueue(queue, 1);
  enqueue(queue, 2);
  enqueue(queue, 3);
  enqueue(queue, 4);
  printf("%d\n", dequeue(queue));
  enqueue(queue, 5);
  enqueue(queue, 2);
  enqueue(queue, 3);
  printf("%d\n", dequeue(queue));
  printf("%d\n", dequeue(queue));
  printf("%d\n", dequeue(queue));
  enqueue(queue, 4);
  enqueue(queue, 2);
  enqueue(queue, 3);
  enqueue(queue, 4);
  printf("%d\n", dequeue(queue));
  printf("%d\n", dequeue(queue));
  printf("%d\n", dequeue(queue));
  printf("%d\n", dequeue(queue));


  return 0;
}