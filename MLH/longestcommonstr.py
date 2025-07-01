from typing import List


def longestCommonPrefix(strs: List[str]) -> str:
    lp = ""
    strs.sort()
    for i in range(len(strs[0])):
        if strs[0][i] == strs[-1][i]:
            lp = lp + strs[0][i]
            print(lp, "prrr")
        else:
            return ""
    print(lp)
    return lp


res = longestCommonPrefix(["flower", "flow", "flight"])

print(res)
