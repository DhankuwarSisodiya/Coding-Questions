class Solution {
    public int[] smallerNumbersThanCurrent(int[] nums) {
        int[] temp = new int[101];
        for(int i=0; i< nums.length; i++){
            temp[nums[i]]++;
        }
        int sum = 0;
        for(int i =0; i< temp.length; i++){
            int tempx = temp[i];
            temp[i] = sum;
            sum += tempx;
        }
        for(int i=0; i< nums.length; i++){
            nums[i] = temp[nums[i]];
        }
        
        return nums;
    }
}