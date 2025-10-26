class Solution:
    def validWordAbbreviation(self, word: str, abbr: str) -> bool:
        i, j = 0, 0

        while i < len(word) and j < len(abbr):
            if word[i] == abbr[j]:
                i += 1
                j += 1
            elif abbr[j].isalpha() and word[i] != abbr[j]:
                return False
            else:
                if abbr[j] == "0":
                    return False

                num = ""
                while j < len(abbr) and abbr[j].isdigit():
                    num += abbr[j]
                    j += 1

                if num:
                    print(type(num))
                    i += int(num)

        if i == len(word) and j == len(abbr):
            return True
        else:
            return False
