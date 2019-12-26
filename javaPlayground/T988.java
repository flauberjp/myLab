import java.util.Arrays;

public class T988 {
	public static void main(String[] args) {
		int[] ints = {3, 6, 1, 4, 0};

		Arrays.sort(ints, 0, 4);

		for(int i: ints) {
			System.out.print(i);
		}
	}
}
