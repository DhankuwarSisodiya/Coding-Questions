class Solution {
    public int searchInsert(int[] nums, int target) {
        for(int a = 0; a < nums.length; a++){
            if(target == nums[a] || target < nums[a]){
                System.out.println(a);
                return a;
            } 
        }
        return nums.length;
    }
}