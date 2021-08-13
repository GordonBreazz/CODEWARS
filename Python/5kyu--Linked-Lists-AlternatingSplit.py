#######################################################################################################################################################################################################################################
# 
#     KATA: 5 kyu "Linked Lists - Alternating Split"
#
#   SOURCE: https://www.codewars.com/kata/55dd5386575839a74f0000a9
#   AUTHOR: https://www.codewars.com/users/GordonBreazz
# 
#     PLOT: Write an AlternatingSplit() function that takes one list and divides up its nodes to make two smaller lists. The sublists should be made from alternating elements in the original list. So if the original list is a -> b -> a -> b -> a -> null then one sublist should be a -> a -> a -> null and the other should be b -> b -> null.
#
#           ###JavaScript
# 
#           var list = 1 -> 2 -> 3 -> 4 -> 5 -> null
#           alternatingSplit(list).first === 1 -> 3 -> 5 -> null
#           alternatingSplit(list).second === 2 -> 4 -> null
#           
#           ###Python
#           
#           list = 1 -> 2 -> 3 -> 4 -> 5 -> None
#           alternating_split(list).first == 1 -> 3 -> 5 -> None
#           alternating_split(list).second == 2 -> 4 -> None
#           
#           ###Ruby
#           
#           list = 1 -> 2 -> 3 -> 4 -> 5 -> nil
#           alternating_split(list).first == 1 -> 3 -> 5 -> nil
#           alternating_split(list).second == 2 -> 4 -> nil
#           For simplicity, we use a Context object to store and return the state of the two linked lists. A Context object containing the two mutated lists should be returned by AlternatingSplit().
#           
#           If the passed in head node is null/None/nil or a single node, throw an error.
#
########################################################################################################################################################################################################################################

class Node(object):
    def __init__(self, data=None):
        self.data = data
        self.next = None
    
class Context(object):
    def __init__(self, first, second):
        self.first = first
        self.second = second
    
def alternating_split(head):    
    # Your code goes here.
    # Remember to return the context.
    if not head or not head.next: 
        raise Exception('Error')        
    first_head = Node(head.data)
    second_head = Node(head.next.data)
    result = Context(first_head, second_head)
    if not head.next.next: 
        return result
    first, second = first_head, second_head
    pointer = head.next.next
    is_first = True
    while pointer:
        tmp = Node(pointer.data)
        if is_first:
            first.next = tmp
            first = first.next
        else:
            second.next = tmp
            second = second.next
        pointer = pointer.next
        is_first = not is_first
    return result