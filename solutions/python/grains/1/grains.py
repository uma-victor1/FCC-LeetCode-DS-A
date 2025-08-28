def square(number):
    if number is 0 or number < 0 or number > 64:
        raise ValueError("square must be between 1 and 64")
    if number is 1:
        return 1
    if number is 2:
        return 2   
    return square(number - 1) * 2


def total():
    total = 0;
    for i in range(1,65):
        total = total + square(i) 
    return total
             
         
