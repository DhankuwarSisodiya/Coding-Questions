class Solution {
    public boolean isPalindrome(int x) {
        if(x == reverse(x) && x == Math.abs(x)){
            return true;
        }       
        return false;
    }
    public int reverse(int x) {
        int rev = 0;
        while(x!=0){
            int pop = x%10;
            x = x/10;
            rev = rev * 10 + pop;
        }      
        return rev;
    }
}