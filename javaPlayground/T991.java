class T991 {
    public static void main(String[] args) {
        System.out.println(" PID: " + getPID());
        if(args.length == 0)
            new MyThread().start();
        else 
        {
            MyThread mt = new MyThread();
            mt.setDaemon(true);
            mt.start();
        }

        try {
            Thread.sleep(100);
        }
        catch (InterruptedException e)
        {

        }
    }

    public static long getPID() {
        String processName = java.lang.management.ManagementFactory.getRuntimeMXBean().getName();
        if (processName != null && processName.length() > 0) {
            try {
                return Long.parseLong(processName.split("@")[0]);
            }
            catch (Exception e) {
                return 0;
            }
        }
    
        return 0;
    }
}

class MyThread extends Thread {
    public void run() {
        System.out.println("Daemon is " + isDaemon() + "; PID: " + getPID());
        while(true) {
            
            try {
                Thread.sleep(1000);
            } catch(InterruptedException e) {
                
            }
        }
    }

    

public static long getPID() {
    String processName = java.lang.management.ManagementFactory.getRuntimeMXBean().getName();
    if (processName != null && processName.length() > 0) {
        try {
            return Long.parseLong(processName.split("@")[0]);
        }
        catch (Exception e) {
            return 0;
        }
    }

    return 0;
}


}