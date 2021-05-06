class Solution {
    public int secondHighest(String s) {
        int max1 = -1, max2 = -1;
        for(int i = 0; i < s.length(); i++){
            int asciiVal = (int) s.charAt(i);
            if(asciiVal < 58 && asciiVal > 47) {
                if(asciiVal > max1){
                    max2 = max1;
                    max1 = asciiVal;
                } else if(asciiVal > max2 && asciiVal != max1){
                    max2 = asciiVal;
                }
            }
        }
        return Character.getNumericValue(max2);
    }
}