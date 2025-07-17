class Solution:
    def strStr(self, haystack: str, needle: str) -> int:
        if len(haystack) < len(needle):
            return -1
        mv = len(needle)
        for i in range(len(haystack) - len(needle) + 1):
            if needle == haystack[i:mv]:
                return i
            mv = mv + 1
        return -1
