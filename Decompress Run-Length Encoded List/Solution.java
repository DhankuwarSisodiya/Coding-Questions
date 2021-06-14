class Solution {
    public int[] decompressRLElist(int[] nums) {
        int j = 0;
        int sum = 0;
        for(int i = 0; i < nums.length; i = i+2){
           sum += nums[i];
        }
        int[] result = new int[sum];
        for(int i = 0; i < nums.length; i = i+2){
           int n = nums[i];
            while( n > 0) {
                result[j] = nums[i+1];
                j++;
                n--;
            }
        }
        return result;
    }
}