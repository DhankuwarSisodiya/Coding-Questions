class Solution {
    public List<Integer> spiralOrder(int[][] matrix) {
        List<Integer> output = new ArrayList<Integer>();
        int rows = matrix.length;
        int columns = matrix[0].length;
        int left = 0;
        int up = 0;
        int right = columns-1;
        int down = rows - 1;
        
        while(output.size() < rows * columns) {
            for(int col = left; col <= right; col++){
                output.add(matrix[up][col]);
            }
            for(int row = up+1; row <= down; row++){
                output.add(matrix[row][right]);
            }
            if(up != down){
                for(int col = right-1; col >= left; col--){
                    output.add(matrix[down][col]);
                }
            }
            if(left != right) {
                for(int row = down-1; row > up; row--){
                    output.add(matrix[row][left]);
                }
            }
            left++;
            right--;
            up++;
            down--;
        }
        return output;
    }
}