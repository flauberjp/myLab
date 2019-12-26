class T997 {
    public static void main (String[] args) {
        MyThread mt = new MyThread();
        mt.start();
        for(int i = 0; i < 50; i++) 
            System.out.println("i = " + i + ", i * i = " + i * i);
    }
}

class MyThread extends Thread {
    public void run() {
        for(int count = 1, row = 1; row < 20; row++, count++) {
            for(int i = 0; i < count; i++)
                System.out.println('*');
            System.out.println("\n");
        }
    }
}