from math import floor


class Solution:
    def search(self, nums: List[int], target: int) -> int:
        lo = 0
        hi = len(nums) - 1
        mid = None
        arrlen = len(nums) - 1
        if arrlen % 2 == 0:
            mid = floor((hi - lo) / 2) - 1

        mid = floor((hi - lo) / 2)
        print(mid, lo, hi)

        while lo <= hi:
            if nums[mid] > target:
                hi = mid - 1
            elif nums[mid] < target:
                lo = mid + 1
            elif nums[mid] == target:
                return mid

        return -1
