#define _CRT_SECURE_NO_WARNINGS
#include <stdio.h>
int main() {
	int a[9];
	int max = 0;
	int index = 0;
	for (int i = 0; i < 9; i++) {
		scanf("%d", &a[i]);
		if (a[i] > max) {
			max = a[i];
			index = i;
		}
	}
	printf("%d\n%d", max, index+1);
	return 0;
}