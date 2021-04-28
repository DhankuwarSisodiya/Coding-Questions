class Solution {
    public boolean isValid(String s) {
        HashMap<Character, Character> map = new HashMap<Character, Character>();
        map.put('(',')');
        map.put('[',']');
        map.put('{','}');
        
        if(!map.containsKey(s.charAt(0)))
            return false;
        Stack<Character> stack = new Stack<Character>();
        for(int i= 0 ; i< s.length(); i++){
            char in = s.charAt(i);
            if(map.containsKey(in)){
                stack.push(in);
            } else if(stack.size() > 0){
                char out = stack.pop();
                if(map.get(out) != in){
                    return false;
                }
            } else{
                return false;
            }  
        }
        if(stack.size() == 0)
            return true;
        return false;
    }
}