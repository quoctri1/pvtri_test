#include <stdio.h>
#include <stdlib.h>

#include "stringcxx.h"
#include "stringcxx.h"



int main(){
	char str[100];
	char str1[100];
	char *strp;
	
	printf("Nhap chuoi 1: ");
	gets(str);
	printf("Nhap chuoi 2: ");
	gets(str1);
	
	//printf("%s",str);
	
	//char *ch;
	
	//ch=ass(str);
	
	//printf("%s",ch);
	
	//if(compare(str,str1)){
		//printf("2 chuoi giong nhau");
	//}else {
		//printf("2 chuoi khac nhau");
	//}
	
	strp=concen(str,str1);
	
	printf("%s",strp);
	
	return 0;
	

}
