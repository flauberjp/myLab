public class Teste999 {
    static {
        System.out.println("Teste999.static block of the class");
    }

    public static void main(String[] args) {
        System.out.println("Teste999.main()");
        Teste999 teste999 = new Teste999();
        System.out.println("variavel de instancia: " + teste999.instanceVariable);
    }

    static String classVariable = classVariableInit();

    static String classVariableInit() {
        System.out.println("Teste999.classVariableInit()");
        return "any value";
    }

    String instanceVariable = instanceVariableIni();

    String instanceVariableIni() {
        System.out.println("Teste999.instanceVariableIni()");
        return "any value";
    }

    {
        System.out.println("Teste999. block of the instance");
    }
    
}