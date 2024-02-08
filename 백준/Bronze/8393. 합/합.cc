#define _CRT_SECURE_NO_WARNINGS
#include <stdio.h>
int main() {
	int n, answer = 0;
	scanf("%d", &n);
	for (int i = 1; i <= n; i++) {
		answer += i;
	}
	printf("%d", answer);
	return 0;
}