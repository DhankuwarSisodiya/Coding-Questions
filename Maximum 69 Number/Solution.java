class Solution {
    public int maximum69Number (int num) {
        if(num == 6)
            return 9;
        if(num == 9)
            return 9;
        StringBuilder str = new StringBuilder(""+num+"");
            for(int i = 0; i < str.length(); i++){
                if(str.charAt(i) == '6'){
                    str.setCharAt(i,'9');
                    break;
                }
            }
        return Integer.parseInt(str.toString());
    }
    
}