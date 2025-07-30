def equalStacks(h1, h2, h3):
    s1 = sum(h1)
    s2 = sum(h2)
    s3 = sum(h3)

    top1, top2, top3 = 0, 0, 0

    while not (s1 == s2 and s2 == s3):
        # If any stack is empty, the only possible answer is 0
        if s1 == 0 or s2 == 0 or s3 == 0:
            return 0

        # Find the tallest stack and remove its top cylinder
        if s1 >= s2 and s1 >= s3:
            s1 -= h1[top1]
            top1 += 1
        elif s2 >= s1 and s2 >= s3:
            s2 -= h2[top2]
            top2 += 1
        elif s3 >= s1 and s3 >= s2:
            s3 -= h3[top3]
            top3 += 1

    return s1


equalStacks([1, 2, 3], [2, 3, 4], [5, 6, 7])
