import re

"""
if no name.extension return 0
the longest file will always be at the ending
web can split string and organize in a dictionary
{
    "aaa": {
        bbb: "ccc"
    }
}

stack??
[s]
"dir\n\tsubdir1\n\t\tfile1.ext\n\t\tsubsubdir1\n\tsubdir2\n\t\tsubsubdir2\n\t\t\tfile2.ext"



anytime you see \n\t start a new directory
keep on stacking from there till you see another \n\t

files []

"""


def lengthLongestPath(input: str) -> int:
    path_lengths = {0: 0}
    max_absolute_path_length = 0  #
    lines = input.split("\n")
    print(lines)

    for line in lines:
        level = line.count("\t")

        name = line.lstrip("\t")

        is_file = "." in name

        current_full_item_path_length = path_lengths[level] + len(name)

        if is_file:
            max_absolute_path_length = max(
                max_absolute_path_length, current_full_item_path_length
            )
        else:
            path_lengths[level + 1] = current_full_item_path_length + 1

    return max_absolute_path_length


lengthLongestPath("file1.txt\nfile2.txt\nlongfile.txt")
