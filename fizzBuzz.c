int fizzBuzz(n){
    int i;
    for (i=0;i<n ; i++)
    {
    if (i %(3*5) == 0){
        printf("FizzBuzz\n");
        }
        else if ((i%3) == 0){
        printf("Fizz\n");
        }
        else if ((i%5) == 0){
        printf("Buzz\n");
        }
        else 
            printf("%d\n",i);
    }
}