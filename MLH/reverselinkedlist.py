import math
import os
import random
import re
import sys


class SinglyLinkedListNode:
    def __init__(self, node_data):
        self.data = node_data
        self.next = None


class SinglyLinkedList:
    def __init__(self):
        self.head = None
        self.tail = None

    def insert_node(self, node_data):
        node = SinglyLinkedListNode(node_data)

        if not self.head:
            self.head = node
        else:
            self.tail.next = node

        self.tail = node


def print_singly_linked_list(node):
    nodes = []
    current = node.head
    while current:
        nodes.append(str(current.data))
        current = current.next
    return " -> ".join(nodes)


list = SinglyLinkedList()
list.insert_node(3)
list.insert_node(4)
list.insert_node(5)
# print(print_singly_linked_list(list))


def reverse(llist: SinglyLinkedList):
    # create new linkedlist
    # create list from linked list
    # traverse list and add from last element to list
    list = [llist.data]
    while llist.next:
        list.append(llist.next.data)
        llist.next = llist.next.next
    list.reverse()
    revlist = SinglyLinkedList()
    for data in list:
        revlist.insert_node(data)
    print(print_singly_linked_list(revlist), "reversedlinkedlist")
    print(list)


print(reverse(list.head))
