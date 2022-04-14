#include <stdio.h>
#include <strings.h>

#define DEFAULT_SIZE 4

template<class T>
struct Queue {
  T *pBuf;
  int pHead;
  int pTail;
};

template <class T>
void init(Queue<T> &queue) {
  queue.pBuf = new T[DEFAULT_SIZE];
  queue.pHead = 0;
  queue.pTail = 0;
}

template <class T>
void destroy(Queue<T> &queue) {
  delete[] queue.pBuf;
  queue.pHead = 0;
  queue.pTail = 0;
}

template <class T>
int getLength(Queue<T> &queue) {
  return queue.pTail - queue.pHead;
}

template <class T>
void enqueue(Queue<T> &queue, T value) {

  int len = getLength(queue);
  if(len<DEFAULT_SIZE && queue.pTail >= DEFAULT_SIZE) {
    memcpy(queue.pBuf, queue.pBuf + queue.pHead, sizeof(T) * len);
    queue.pHead = 0;
    queue.pTail = len;
  }

  if(queue.pTail < DEFAULT_SIZE) {
    queue.pBuf[queue.pTail] = value;
    queue.pTail++;
  }
}

template <class T>
T dequeue(Queue<T> &queue) {
  T value;
  if(queue.pHead != queue.pTail) {
    value = queue.pBuf[queue.pHead];
    queue.pHead++;
  }
  return value;
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