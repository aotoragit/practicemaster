class Test{
   public static void main(String[] args){

       int[] list = new int[]{1,2,3,4,5};
    try{
       int   fa   =  Integer.parseInt(args[0]) ;
       int   fi   =  Integer.parseInt(args[1]) ;
    
       System.out.println("sum:" + sum(list));
       System.out.println("ave:" + ave(list));
       System.out.println("fac:" + factory(fa));
       System.out.println("fib:" + fibonacci(fi));
    }catch(Exception e){
        System.out.println("Test n(fac) m(fib) ");
    }
   }

   private static int sum(int[] list){
        int sum = 0;
        for(int i = 0; i < list.length; i++){
            sum = sum + list[i];
        }
        return sum;
   }

   private static int ave(int[] list){
        return sum(list)/list.length;
   }

   private static int factory(int hoge){
        if(hoge > 0){
            return hoge * factory(hoge - 1);
        }else{
            return 1;
        }
    }

   private static int fibonacci(int fibo){
        if(fibo == 1){
            return 1;
        }else if(fibo <= 0){
            return 0;
        }else{
            return fibonacci(fibo -2) + fibonacci(fibo -1);
        }
    }
}