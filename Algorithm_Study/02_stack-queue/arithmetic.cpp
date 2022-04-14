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


typedef struct Token {
  char type;
  int length;
  int value;
  char opt;
} Token;

Token *getToken(char *p) {
  if(p == NULL) return NULL;
  Token *t = NULL;
  if(*p == '\0') {
    t = new Token;
    t->type = 'e';
    t->length = 1;
  } else {
    t = new Token;
    switch (*p) {
      case '+':
        t->type = 'o';
        t->opt = '+';
        t->length = 1;
        break;
      case '-':
        t->type = 'o';
        t->opt = '-';
        t->length = 1;
        break;
      case '*':
        t->type = 'o';
        t->opt = '*';
        t->length = 1;
        break;
      case '/':
        t->type = 'o';
        t->opt = '/';
        t->length = 1;
        break;
      default:
        if(*p>='0' && *p <='9') {
          int value = 0;
          int length = 0;
          while (*p >= '0' && *p <= '9') {
            value = value * 10 + int(*p - '0');
            length++;
            p++;
          }
          t->type = 'n';
          t->length = length;
          t->value = value;
        }
        break;
    }
  }

  return t;

}

int operate(int value1, int valu2, char opt) {
  int result = 0;
  switch (opt) {
    case '+':
      result = value1 + valu2;
      break;
    case '-':
      result = value1 - valu2;
      break;
    case '*':
      result = value1 * valu2;
      break;
    case '/':
      result = value1 / valu2;
      break;
    default:
      break;
  }
  return result;
}

int checkpriority(char p1) {
  if(p1 == '+' || p1 == '-') {
    return 1;
  } 
  if(p1 == '/' || p1 == '*') {
    return 2;
  }
  return -1;
}

int compareTo(char p1, char p2) {
  return checkpriority(p1) - checkpriority(p2);
}

int main() {

  char *str = (char *)("200+10*8-40");
  char *p = str;

  Token *t = NULL;

  // while (true) {
  //   t = getToken(p);

  //   printf("%c, %d, %d, %c\n", t->type, t->value, t->length, t->opt);

  //   if(t->type == 'e') {
  //     delete t;
  //     break;
  //   }
  //   p = p + t->length;
  //   delete t;
  // }

  Stack<int> numbers;
  init(numbers);
  Stack<char> opts;
  init(opts);

  while (true) {
    t = getToken(p);

    if(t->type == 'e') {
      int value2 = pop(numbers);
      int value1 = pop(numbers);

      char opt = pop(opts);
      int result = operate(value1, value2, opt);
      push(numbers, result);

      delete t;
      break;
    }

    if(t->type == 'n') {
      printf("%d\n", t->value);
      push(numbers, t->value);
    }

    if(t->type == 'o') {
      while (true) {
        if(isEmpty(opts)) {
          push(opts, t->opt);
          break;
        } else {
          char o = getTop(opts);

          if(compareTo(o, t->opt) >=0) {
            int value2 = pop(numbers);
            int value1 = pop(numbers);
            o = pop(opts);
            int result = operate(value1, value2, o);
            push(numbers, result);
          } else {
            push(opts, t->opt);
            break;
          }

        }
      }
      
    }
    p = p + t->length;
    delete t;
  }

  printf("%d\n", pop(numbers));
  
  

  return 0;
}