#include <stdio.h>
int main(void) {
    int y;              // 1. 연도를 저장할 변수 선언
    scanf("%d", &y);    // 2. 연도를 입력받아 변수 y에 저장

    if (((y % 4 == 0) && (y % 100 != 0)) || (y % 400 == 0)) {    // 윤년이면
        printf("1");                                             // 1 출력
    }
    else {                                                       // 윤년이 아니면
        printf("0");                                             // 2 출력
    }

    return 0;
}