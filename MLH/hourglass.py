""" This program counts adds the total in every hourglass in
    a 6x6 2-dimensional array and prints the highest
"""

arr = [
    [-9, -9, -9,  1,  1,  1],
    [ 0, -9,  0,  4,  3,  2],
    [-9, -9, -9,  1,  2,  3],
    [ 0,  0,  8,  6,  6,  0],
    [ 0,  0,  0, -2,  0,  0],
    [ 0,  0,  1,  2,  4,  0]
]

def hourglassSum(arr):
    max_sum = None
    for i in range(4):
        for j in range(4):
            current_sum = (arr[i][j] + arr[i][j+1] + arr[i][j+2] +
                           arr[i+1][j+1] +
                           arr[i+2][j] + arr[i+2][j+1] + arr[i+2][j+2])
            if max_sum is None or current_sum > max_sum:
                max_sum = current_sum
    return max_sum


result = hourglassSum(arr)
print(result)
