#ifndef string
# define string 1

char *ass(char *c){
	char *b;
	b = c;
	return b;
}

int compare (char *str1, char *str2){
	int i=0;	
	while(*(str1+i)!='\0'){
		if(*(str1+i)!=*(str2+i)){
			return 0;
		}
		i++;
	}
	return 1;
}

char *concen(char *str, char *str1){
	char *strp;
	
	int n=0,m=0;
	
	while(*(str+n)!='\0'){
		n++;	
	}
	
	while(*(str1+m)!='\0'){
		m++;
	}

	strp = (char*)malloc((n+m)*sizeof(char));
	
	int i=0;
	while(i<n){
		*(strp + i) = *(str + i);
		i++;
	}
	int j=0;
	while(i<(n+m)){
		*(strp + i) = *(str1 + j);
		i++;
		j++;
	}
	
	
	return strp;
}


#endif
