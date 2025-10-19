from collections import Counter
from typing import List


class Solution:
    def relativeSortArray(self, arr1: List[int], arr2: List[int]) -> List[int]:
        arr1counter = Counter(arr1)
        newarr = []
        for i in arr2:
            curr = [i] * arr1counter[i]
            currn = arr1counter[i]
            while currn > 1:
                arr1.remove(i)
                currn -= 1
            arr1.remove(i)
            newarr = newarr + curr
        arr1.sort()
        return newarr + arr1
