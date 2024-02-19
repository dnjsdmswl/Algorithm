#define _CRT_SECURE_NO_WARNINGS
#include <stdio.h>
int main() {
	int a;
	char b[100];
	int hap = 0;
	scanf("%d", &a);
	scanf("%s", &b);
	for (int i = 0; i < a; i++) {

		hap = hap + b[i] - '0';

	}
	printf("%d", hap);
	return 0;
}