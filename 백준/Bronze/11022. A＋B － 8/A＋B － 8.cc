#define _CRT_SECURE_NO_WARNINGS
#include <stdio.h>
int main() {
	int number;
	scanf("%d", &number);
	for (int i = 1; i <= number; i++) {
		int a, b;
		scanf("%d %d", &a, &b);
		printf("Case #%d: %d + %d = %d\n", i, a, b, a + b);
	}
	return 0;
}