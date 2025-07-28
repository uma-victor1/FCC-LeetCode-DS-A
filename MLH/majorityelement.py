import collections
from typing import List


def majorityElement(nums: List[int]) -> int:
    ntimes = len(nums) / 2

    count = collections.Counter(nums)

    for item, count in count.items():
        if count > ntimes:
            return item
