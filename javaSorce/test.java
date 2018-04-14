class Test{
   private static void main(String hoge[]){
       //変数を定義
       int[] list = new int[]{1,2,3,4,5};
       int   fa   = 6 ;
       int   fi   = 8 ;
　　　　
       //各関数を実行
       System.out.println("sum:" + sum(list));
       System.out.println("ave:" + ave(list));
       System.out.println("fac:" + factory(fa));
       System.out.println("fib:" + fibonacci(fi));
   }
   
   //リスト内の合計値を出す
   private static int sum(int[] list){
        int sum = 0;
        for(int i = 0; i < list.length; i++){
            sum = sum + list[i];
        }
        return sum;
   }

   //リスト内の数値の平均値
   private static int ave(int[] list){
        return sum(list)/list.length;
   }

   //与えられた値ｎの階乗
   private static int factory(int hoge){
        if(hoge > 0){
            return hoge * factory(hoge - 1);
        }else{
            return 1;
        }
    }

    //ｎ番目のフィボナッチ
   private static int fibonacci(int fibo){
        if(fibo == 1){
            return 1;
        }else if(fibo =< 0){
            return 0;
        }else{
            return fibonacci(fibo -2) + fibonacci(fibo -1);
        }
    }
}