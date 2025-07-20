from typing import List

"""
digits = [1,2,3]
bring out numbers 
add 
return as arr

"""


def plusOne(digits: List[int]) -> List[int]:
    digit = ""
    for i in digits:
        digit = digit + str(i)
    digit = int(digit) + 1

    newarr = []
    for i in list(str(digit)):
        newarr.append(int(i))

    print(newarr)


plusOne([1, 2, 3])
