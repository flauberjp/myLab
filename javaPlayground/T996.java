class T996 {
    public static void main(String[] args) {
        MyThread mt;
        if(args.length == 0) 
            mt = new MyThread();
        else
            mt = new MyThread(args[0]);
        mt.start();
    }


}

class MyThread extends Thread {
    MyThread () {

    }

    MyThread (String name) {
        setName(name);
    }

    public void run()
    {
        System.out.println("My name is: " + getName());
    }
}