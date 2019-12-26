public class T986 {
	public static void main(String[] args) {
		/*
		System.out.println(solution(1041));
		System.out.println(solution(15));
		System.out.println(solution(32));
		*/
		System.out.println(solution("101001000"));
	}
	
	private static int solution(String value) {
		return solution(Integer.valueOf(value, 2));
	}

	private static int solution(int value) {
        String binaryString = Integer.toBinaryString(value);
		int pointerA = binaryString.indexOf("1");;
		int pointerB = -1; 
		int lenghtOfTheGap = 0;
		do {
			pointerB = binaryString.indexOf("1", pointerA + 1);
			
			if(pointerB == pointerA + 1) {
				
			} else if(pointerA != -1 && pointerB != -1) {
			    if((pointerB - 1) - pointerA >= lenghtOfTheGap) {
			        lenghtOfTheGap = (pointerB - 1) - pointerA;
			    }
			} else  {
				break;
			}
			pointerA = pointerB + 1;
		} while(pointerA < binaryString.length() - 2);
		return lenghtOfTheGap;
	}
}
