#define _CRT_SECURE_NO_WARNINGS
#include <stdio.h>
int main() {
	int N = 0;
	int number = 0;
	scanf("%d", &N);
	number = N / 4;
	for (int i = 0; i < number; i++) {
		printf("long ");
	}
	printf("int");
	return 0;
}