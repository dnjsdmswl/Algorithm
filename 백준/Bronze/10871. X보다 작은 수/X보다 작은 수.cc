#define _CRT_SECURE_NO_WARNINGS
#include <stdio.h>
int main() {
	int a, b;
	int arr[10000];
	scanf("%d %d", &a, &b);
	for (int i = 0; i < a; i++) {
		scanf("%d", &arr[i]);
		if (arr[i] < b) {
			printf("%d ", arr[i]);
		}
	}
	return 0;
}