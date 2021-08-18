class Solution {
    public int[] findDiagonalOrder(int[][] mat) {
        HashMap<Integer, ArrayList> map = new HashMap<Integer, ArrayList>();
        int m = mat.length;
        int n = mat[0].length;
        for(int i = 0; i < m; i++) {
            for(int j = 0; j < n; j++) {
                int sum = i+j;
                if(map.containsKey(sum)){
                    ArrayList<Integer> mylist = map.get(sum);
                    mylist.add(mat[i][j]);
                    map.put(sum, mylist);
                } else {
                    ArrayList<Integer> mylist = new ArrayList<Integer>();
                    mylist.add(mat[i][j]);
                    map.put(sum, mylist);
                }
            }
        }
        
        int[] answer = new int[m*n];
        int k = 0;
        for (int i : map.keySet()) {
            ArrayList<Integer> myList = map.get(i);
            if(i%2 == 0){
                Collections.reverse(myList);
                for(int ele : myList) {
                    answer[k] = ele;
                    k++;
                }
            } else {
                for(int ele : myList) {
                    answer[k] = ele;
                    k++;
                }
            }  
        }
        return answer;
    }
}