class Solution {
    public int romanToInt(String s) {
        HashMap<String, Integer> map = new HashMap<String, Integer>();
        map.put("M",1000);
        map.put("D",500);
        map.put("C",100);
        map.put("L",50);
        map.put("X",10);
        map.put("V",5);
        map.put("I",1);
        map.put("CM",900);
        map.put("CD",400);
        map.put("XC",90);
        map.put("XL",40);
        map.put("IX",9);
        map.put("IV",4);
        
        int total = 0;
        int i = 0;
        while(i < s.length()){
            if(i < s.length()-1 && map.containsKey(s.substring(i,i+2))){
                total = total + map.get(s.substring(i,i+2));
                i = i+2;
            } else {
                total = total + map.get(s.substring(i,i+1));
                i = i+1;
            }
        }
        return total;
    }
}