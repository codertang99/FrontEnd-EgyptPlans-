#include <stdio.h>
#include <ostream>

#define Error -99999999

typedef struct listNode {
  int val;
  struct listNode *pNext;
} ListNode;

void traverse(ListNode *pHead) {
  ListNode *p = pHead;
  while (NULL != p) {
    printf("%d\t", p->val);
    p = p->pNext;
  }
  printf("\n");
  
}

// 翻转单链表, 利用三个指针进行来回遍历
ListNode *convert(ListNode *p) {

  ListNode *pPrev = NULL;
  ListNode *pPos = p;
  ListNode *pNext = p->pNext;
  while (pPos != NULL) {
    pPos->pNext = pPrev;
    pPrev = pPos;
    pPos = pNext;
    if(pNext != NULL)
      pNext = pNext->pNext;
  }

  return pPrev;
}

int main() {

  ListNode *p1 = new ListNode;
  ListNode *p2 = new ListNode;
  ListNode *p3 = new ListNode;
  ListNode *p4 = new ListNode;
  ListNode *p5 = new ListNode;
  ListNode *p6 = new ListNode;
  ListNode *p7 = new ListNode;
  p1->val = 1;
  p2->val = 2;
  p3->val = 3;
  p4->val = 4;
  p5->val = 5;
  p6->val = 6;
  p7->val = 7;

  p1->pNext = p2;
  p2->pNext = p3;
  p3->pNext = p4;
  p4->pNext = p5;
  p5->pNext = p6;
  p6->pNext = p7;
  p7->pNext = NULL;
  traverse(p1);
  traverse(convert(p1));
  traverse(NULL);
  system("pause");
  return 0;
}