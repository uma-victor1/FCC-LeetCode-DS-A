from typing import List

"""
procedure selectionSort(array)
   n = length of array
   for i from 0 to n-2
      minIndex = i
      for j from i+1 to n-1
         if array[j] < array[minIndex]
            minIndex = j
      swap array[i] and array[minIndex]
end procedure
"""


def selectionSort(arr: List[int]) -> List[int]:
    n = len(arr)

    for i in range(n - 2):
        minIndex = i
        for j in range(i + 1, n):
            if arr[j] < arr[minIndex]:
                minIndex = j
        temp = arr[i]
        arr[i] = arr[minIndex]
        arr[minIndex] = temp
    return arr


res = selectionSort([64, 25, 12, 22, 11])

print(res)
