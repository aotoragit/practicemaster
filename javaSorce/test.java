class Test{
   public static void main(String hoge[]){
       int[] list = new int[]{1,2,3,4,5};
       int   fa   = 6 ;
       int   fi   = 8 ;

       System.out.println("sum:" + sum(list));
       System.out.println("ave:" + ave(list));
       System.out.println("fac:" + factory(fa));
       System.out.println("fib:" + fibonacci(fi));
   }

   public static int sum(int[] list){
        int sum = 0;
        for(int i = 0; i < list.length; i++){
            sum = sum + list[i];
        }
        return sum;
   }

   public static int ave(int[] list){
        return sum(list)/list.length;
   }

   public static int factory(int hoge){
        if(hoge > 0){
            return hoge * factory(hoge - 1);
        }else{
            return 1;
        }
    }

   public static int fibonacci(int fibo){
        if(fibo == 1){
            return 1;
        }else if(fibo == 0){
            return 0;
        }else{
            return fibonacci(fibo -2) + fibonacci(fibo -1);
        }
    }
}