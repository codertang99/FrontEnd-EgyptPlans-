#include <stdio.h>
#define DETAUL_SIZE 4

template<class T>
struct Queue {
  T *pBuf;
  int pHead;
  int pTail;
  int isRolled; // 表示是否经过环, ptail > phead 没经过为0, 反之为1
};

template<class T>
void init(Queue<T> &queue) {
  queue.pBuf = new T[DETAUL_SIZE];
  queue.pHead = 0;
  queue.pTail = 0;
  queue.isRolled = 0;
}

template<class T>
void destroy(Queue<T> &queue) {
  delete[] queue.pBuf;
  queue.pHead = 0;
  queue.pTail = 0;
  queue.isRolled = 0;
}

template<class T>
int getLength(Queue<T> &queue) {
  int len = 0;
  if(queue.isRolled == 0) {
    len = queue.pTail - queue.pHead;
  }

  if(queue.isRolled == 1) {
    len = queue.pTail + DETAUL_SIZE - queue.pHead;
  }

  return len;
}

template<class T>
void enqueue(Queue<T> &queue, T value) {

  // 判断tail是否到头
  if(queue.pTail >= DETAUL_SIZE) {
    queue.isRolled = 1;
    queue.pTail = 0;
  }

  if(queue.isRolled == 0 || queue.isRolled == 1 && queue.pTail < queue.pHead) {
    queue.pBuf[queue.pTail] = value;
    queue.pTail++;
  }

}

template<class T>
T dequeue(Queue<T> &queue) {
  T t;
  if(queue.isRolled == 0 && queue.pHead < queue.pTail || queue.isRolled == 1) {
    t = queue.pBuf[queue.pHead];
    queue.pHead++;
  }

  if(queue.pHead >= DETAUL_SIZE) {
    queue.pHead = 0;
    queue.isRolled = 0;
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