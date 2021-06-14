class Solution {
    public int[] createTargetArray(int[] nums, int[] index) {
        List<Integer> targetLst = new ArrayList<>();
        for(int i=0; i<index.length; i++) {
            targetLst.add(index[i], nums[i]);
        }
        int[] retarr = new int[targetLst.size()];
        for(int i=0; i<targetLst.size(); i++) {
            retarr[i] = targetLst.get(i);
        }
         return retarr;
    }
}