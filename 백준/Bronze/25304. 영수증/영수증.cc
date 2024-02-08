#define _CRT_SECURE_NO_WARNINGS
#include <stdio.h>
int main() {
	int x, n, a, b = 0;
	int total = 0;
	scanf("%d\n", &x);
	scanf("%d\n", &n);
	for (int i = 0; i < n; i++) {
		scanf("%d %d\n", &a, &b);
		total += (a * b);
	}
	if (x == total) {
		printf("Yes");
	}
	else {
		printf("No");
	}
	return 0;
}