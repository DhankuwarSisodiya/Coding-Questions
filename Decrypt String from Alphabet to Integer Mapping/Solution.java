class Solution {
    public String freqAlphabets(String s) {
        String result = "";
        HashMap<String, String> lookup = new HashMap<String, String>();
        for(int i = 1; i <=26 ; i++){
            String asciiValue = Character.toString((char) (96+i));
            if(i < 10)
                lookup.put(Integer.toString(i),asciiValue);
            else
                lookup.put(Integer.toString(i)+"#",asciiValue);
        }
        int j = 3;
        for(int i = 0; i < s.length() ; i++){
            if((j-1 < s.length()) && s.charAt(j-1) == '#'){
                String sub = s.substring(i,j);
                result += lookup.get(sub);
                i += 2;
                j += 3;
            }else{
                result += lookup.get(Character.toString(s.charAt(i)));
                j++;
            }  
        }
        return result;
    }
}