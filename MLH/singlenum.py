import collections
from typing import List

class Solution:
    def singleNumber(self, nums: List[int]) -> int:
        counter = collections.Counter(nums)
        for item, count in counter.items():
            if count == 1:
                return item
