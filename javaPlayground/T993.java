class T993{
    public static void main(String[] args) {
        MyThread mt = new MyThread();
        mt.start();
        try {
            mt.join();
        } catch (InterruptedException e) {

        }
        System.out.println("pi = " + mt.pi);
    }
}

class MyThread extends Thread {
    boolean negative = true;
    double pi; // Initializes to 0.0, by default

    public void run() {
        for(int i = 3; i < 10000; i += 2) {
            try {
                Thread.sleep(1);
            } catch(InterruptedException e) {

            }
            if(negative)
                pi -= (1.0 / i);
            else
                pi += (1.0 / i);
            negative = !negative;
        }
        pi += 1.0;
        pi *= 4.0;
        System.out.println("Finished calculating PI");
    }
}