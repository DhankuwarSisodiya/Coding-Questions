//Solution1 
class Solution {
    public int[] productExceptSelf(int[] nums) {
        int[] leftProd = new int[nums.length];
        int[] rightProd = new int[nums.length];
        int[] answer = new int[nums.length];
        leftProd[0] = 1;
        for(int i = 1; i< nums.length; i++) {
            leftProd[i] = leftProd[i-1] * nums[i-1];
        }
        rightProd[nums.length-1] = 1;
        for(int i = nums.length-2; i>= 0; i--) {
            rightProd[i] = rightProd[i+1] * nums[i+1];
        }
        for(int i = 0; i< nums.length; i++) {
            answer[i] = leftProd[i] * rightProd[i];
        }
        return answer;
    }
}

//Solution2 
class Solution {
    public int[] productExceptSelf(int[] nums) {
        int length = nums.length;
        int[] answer = new int[length];
        //[1,2,3,4]
        answer[0] = 1;
        for (int i = 1; i < length; i++) {
            answer[i] = nums[i - 1] * answer[i - 1];
            System.out.println(answer[i]);
        }
        //[1,1,2,6]
        
        int R = 1;
        for (int i = length - 1; i >= 0; i--) {
            answer[i] = answer[i] * R;
            System.out.println(answer[i]);
            R *= nums[i];
            System.out.println(R);
        }
        //[,6,1]
        return answer;
    }
}