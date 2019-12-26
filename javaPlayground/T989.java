public class T989 {
  public static void main(String[] args) {
    long size1 = 0xB;
    int size = 11;
    int[] ints = new int[size];

    ints[5] = 10;

    System.out.print(size1);
    System.out.print(ints[5] + 10);
  }
}
