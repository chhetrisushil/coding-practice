import java.util.Arrays;
import java.util.ArrayList;
import java.util.List;

class FindMissingItemFrom2List {
    public static int filter(List<Integer> list1, List<Integer> list2) {
	ArrayList<Integer> l1 = new ArrayList<Integer>(list1);
	ArrayList<Integer> l2 = new ArrayList<Integer>(list2);
	l1.removeAll(l2);

	return l1.get(0);
    }

    public static int findByXOR(List<Integer> list1, List<Integer> list2) {
	int xorSum = 0;

	for(Integer i : list1) {
	    xorSum ^= i;
	}

	for(Integer i : list2) {
	    xorSum ^= i;
	}

	return xorSum;
    }
    
    public static void main(String[] args) {
	System.out.println(FindMissingItemFrom2List.filter(Arrays.asList(4, 12, 9, 5, 6),Arrays.asList(4, 9, 12, 6)));
	System.out.println(FindMissingItemFrom2List.findByXOR(Arrays.asList(4, 12, 9, 5, 6),Arrays.asList(4, 9, 12, 6)));
    }
}
