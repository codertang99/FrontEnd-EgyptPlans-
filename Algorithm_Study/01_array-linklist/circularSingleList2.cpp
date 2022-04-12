#include <stdio.h>
#include <ostream>

#define Error -99999999

typedef struct listNode {
  int val;
  struct listNode *pNext;
} ListNode;

// 判断链表是否有环, 计算长度
int getLength(ListNode *p) {

  if(NULL == p) {
    return Error;
  }

  int fastFlag = 0;
  int mutualFlag = 0;

  ListNode *fastNode = p;
  ListNode *slowNode = p;

  int fastStep = 0;
  int slowStep = 0;

  do {

    slowNode = slowNode->pNext;
    slowStep++;

    fastNode = fastNode->pNext;
    fastStep++;
    if(fastNode == NULL) {
      fastFlag = -1;
      break;
    }
    fastNode = fastNode->pNext;
    fastStep++;
    if(fastNode == NULL) {
      fastFlag = -1;
      break;
    }

    if(fastNode == slowNode) {
      mutualFlag = -1;
      break;
    }
  } while (true);
  
  if(fastFlag == -1) {
    return fastStep;
  }

  ListNode *p3 = p;

  while (p3 != slowNode) {
    slowNode = slowNode->pNext;
    p3 = p3->pNext;
  }

  int yStep = 0;
  while(p3 != fastNode) {
    fastNode = fastNode->pNext;
    yStep++;
  }
  

  // int xStep = 0;
  // while (p3 != slowNode) {
  //   slowNode = slowNode->pNext;
  //   p3 = p3->pNext;
  //   xStep++;
  // }

  // int rStep = 0;
  // do
  // {
  //   p3 = p3->pNext;
  //   rStep++;
  // } while (p3 != slowNode);
  
  
  return yStep + fastStep/2;

}

void traverse(ListNode *p) {
  while (NULL != p) {
    printf("%d\t", p->val);
    p = p->pNext;
  }
  printf("\n");
  
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
  p7->pNext = p4;

  printf("%d\n", getLength(p1));
  // traverse(p1);

  system("pause");
  return 0;
}