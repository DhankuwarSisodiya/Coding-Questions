class Solution {
    public int lengthOfLastWord(String s) {
        int l =0;
        for(int i = s.length()-1; i>=0; i--){
            if(s.charAt(i) == ' '){
                if(!(l==0 && s.length() > 1))
                    return l;
            } else {
                l++;
            }
        }
        return l;
    }
}