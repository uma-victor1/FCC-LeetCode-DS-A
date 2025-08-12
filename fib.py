def fib(n: int) -> int:
    if n >= 2:
        return fib(n - 1) + fib(n - 2)
    elif n == 1:
        return 1
    elif n == 0:
        return 0


print(fib(5))
