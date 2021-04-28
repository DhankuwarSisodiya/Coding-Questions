class Solution {
    public int strStr(String haystack, String needle) {
        if(needle == "")
            return 0;
        return (haystack.indexOf(needle) >= 0 ? haystack.indexOf(needle) : -1);
    }
}