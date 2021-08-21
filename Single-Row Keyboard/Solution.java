class Solution {
    public int calculateTime(String keyboard, String word) {
        HashMap<Character, Integer> map = new HashMap<Character, Integer>();
        int time = 0;
        int currentPos = 0;
        for(int i = 0; i < keyboard.length(); i++){
            map.put(keyboard.charAt(i), i);
        }
        for(int i = 0; i < word.length(); i++){
            int pos = map.get(word.charAt(i));
            if(pos > currentPos){           
                time +=(pos-currentPos);
            } else if(pos < currentPos){
                time +=(currentPos-pos);
            }
            currentPos = pos;
        }
        return time;
    }
}