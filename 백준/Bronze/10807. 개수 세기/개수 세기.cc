#define _CRT_SECURE_NO_WARNINGS
#include <stdio.h>
int main() {
	int a, b, c;
	int hap = 0;
	int arr[100];
	scanf("%d", &a);
	for (int i = 0; i < a; i++) {
		scanf("%d", &b);
		arr[i] = b;
	}
	scanf("%d", &c);
	for (int i = 0; i < a; i++) {
		if (arr[i] == c) {
			hap += 1;
		}
	}
	printf("%d", hap);
	return 0;
}