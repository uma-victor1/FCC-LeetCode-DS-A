class Node:
    def __init__(self, data) -> None:
        self.data = data
        self.next = None


class LinkedList:
    def __init__(self) -> None:
        self.head = None

    def add(self, data):
        # check if current in the trasversal has next as null
        # then add .next = new Node
        if self.head is None:
            self.head = Node(data)
            return

        last_node = self.head
        while last_node.next:
            last_node = last_node.next
        last_node.next = Node(data)

    def __repr__(self) -> str:
        nodes = []
        current = self.head
        while current:
            nodes.append(str(current.data))
            current = current.next
        return " -> ".join(nodes)


my_list = LinkedList()
my_list.add(10)
my_list.add(20)
my_list.add(30)

print(my_list)
