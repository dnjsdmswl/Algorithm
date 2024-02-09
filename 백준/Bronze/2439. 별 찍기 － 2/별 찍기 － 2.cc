#define _CRT_SECURE_NO_WARNINGS
#include <stdio.h>
int main()
{
	int a, i, j, k = 0;
	scanf("%d", &a);
	for (i = 0; i < a; i++)
	{
		for (k = 1; k < a - i; k++)
		{
			printf(" ");
		}
		for (j = 0; j < i + 1; j++)
			printf("*");
		printf("\n");
	}
	return 0;
}