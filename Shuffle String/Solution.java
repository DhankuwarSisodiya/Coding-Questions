class Solution {
    public String restoreString(String s, int[] indices) {
        StringBuilder result = new StringBuilder(s);
        for(int i =0; i< indices.length; i++){
            int index = indices[i];
            result.setCharAt(index,s.charAt(i));
        }
        return result.toString();
    }
}