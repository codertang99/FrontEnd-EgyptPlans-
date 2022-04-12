#include <stdio.h>
#include <string.h>
#include <ostream>

#define ARRAY_SIZE 1024

typedef struct
{
  int *pData;
  int size;
  int length;
} Array;

void init(Array &arr) {
  arr.length = 0;
  arr.size = ARRAY_SIZE;
  arr.pData = new int[ARRAY_SIZE];
}

void destroy(Array &arr) {
  arr.length = 0;
  arr.size = 0;
  delete[] arr.pData;
}

void depend(Array &arr) {
  int oldSize = arr.size;
  int *oldPdata = arr.pData;

  arr.size *= 2;
  arr.pData = new int[arr.size];
  // 使用strings的memcpy方法
  memcpy(arr.pData, oldPdata, oldSize * sizeof(int));
  /**
   * 下面是手动拷贝
   * **/
  // for(int i=0; i<arr.length; i++) {
  //   *(arr.pData + i) = *(oldPdata + i);
  // }

  delete[] oldPdata;
}

int get(Array &arr, int index) {
  if(index >= 0 && index < arr.length) {
    return *(arr.pData + index);
  }
  return -1;
}

void set(Array &arr, int index, int value) {
  if(index >= 0 && index < arr.length) {
    *(arr.pData + index) = value;
  }
}

int getLength(Array &arr) {
  return arr.length;
}

int find(Array &arr, int value) {
  int pos = -1;
  for(int i=0; i<arr.length; i++) {
    if(*(arr.pData + i) == value) {
      pos = i;
      break;
    }
  }
  return pos;
}

// 利用哨兵思想查找
int guardFind(Array &arr, int value) {
  int index=0;
  int temp = *(arr.pData + arr.length-1);
  while (true) {
    
    if(*(arr.pData + index) == value) {
      return index;
    }

    if(value == temp) {
      return arr.length - 1;
    }

    if(*(arr.pData + index) == temp) {
      return -1;
    }
    index++;
  }
  
}

int prev(Array &arr, int index) {
  return get(arr, index - 1);
}

int next(Array &arr, int index) {
  return get(arr, index + 1);
}

void insert(Array &arr, int index, int value) {

  if(arr.length == arr.size) {
    depend(arr);
  }

  if(index == -1 || index == arr.length || (index>=0 && index<arr.length)) {
    if(index == -1 || index == arr.length) {
      if(index == -1) {
        index = arr.length;
      }
    } else {
      memcpy(arr.pData + index + 1, arr.pData + index, sizeof(int) * (arr.length - index));

      // 手动操作
      // for(int i=arr.length; i>index; i--) {
      //   *(arr.pData + i) = *(arr.pData + i-1);
      // }
    }
    *(arr.pData + index) = value;
    arr.length++;
  }

}

int remove(Array &arr, int index) {
  int pos = -999;
  if(index>=0 && index<arr.length) {
    memcpy(arr.pData + index, arr.pData + index + 1, sizeof(int) * (arr.length - index));
    // 下面是手动操作
    // for(int i=index+1; i<arr.length; i++) {
    //   *(arr.pData + i-1) = *(arr.pData + i);
    // }
    arr.length--;
  }

  return pos;
}

void traverse(Array &arr) {
  for(int i=0; i<arr.length; i++) {
    printf("%d\t", *(arr.pData + i));
  }
  printf("\n");
}



int main() {

  Array arr;

  init(arr);
  printf("%d, %d\n", arr.length, arr.size);
  // depend(arr);
  // printf("%d, %d\n", arr.length, arr.size);
  // destroy(arr);
  // printf("%d, %d\n", arr.length, arr.size);

  insert(arr, -1, 1);
  insert(arr, 0, 2);
  insert(arr, arr.length, 3);
  traverse(arr);
  printf("%d -----------\n", guardFind(arr, 3));

  set(arr, 0, 999);
  printf("%d\n", get(arr, 2));

  remove(arr, 0);

  traverse(arr);
  printf("%d, %d\n", arr.length, arr.size);

  system("pause");
  return 0;
}