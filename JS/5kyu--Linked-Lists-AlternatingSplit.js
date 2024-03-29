/***************************************************************************************************************************************************************************************************************************************
* 
*     KATA: 5 kyu "Linked Lists - Alternating Split"
*
*   SOURCE: https://www.codewars.com/kata/55dd5386575839a74f0000a9
*   AUTHOR: https://www.codewars.com/users/GordonBreazz
* 
*     PLOT: Write an AlternatingSplit() function that takes one list and divides up its nodes to make two smaller lists. The sublists should be made from alternating elements in the original list. So if the original list is a -> b -> a -> b -> a -> null then one sublist should be a -> a -> a -> null and the other should be b -> b -> null.
*
*           ###JavaScript
* 
*           var list = 1 -> 2 -> 3 -> 4 -> 5 -> null
*           alternatingSplit(list).first === 1 -> 3 -> 5 -> null
*           alternatingSplit(list).second === 2 -> 4 -> null
*           
*           ###Python
*           
*           list = 1 -> 2 -> 3 -> 4 -> 5 -> None
*           alternating_split(list).first == 1 -> 3 -> 5 -> None
*           alternating_split(list).second == 2 -> 4 -> None
*           
*           ###Ruby
*           
*           list = 1 -> 2 -> 3 -> 4 -> 5 -> nil
*           alternating_split(list).first == 1 -> 3 -> 5 -> nil
*           alternating_split(list).second == 2 -> 4 -> nil
*           For simplicity, we use a Context object to store and return the state of the two linked lists. A Context object containing the two mutated lists should be returned by AlternatingSplit().
*           
*           If the passed in head node is null/None/nil or a single node, throw an error.
*
****************************************************************************************************************************************************************************************************************************************/

function Node(data) {
    this.data = data;
    this.next = null;
  }
  
  function Context(first, second) {
    this.first = first;
    this.second = second;
  }
  
  function alternatingSplit(head) {
    if (!head || !head.next) throw "Error"
    let first =  new Node(head.data),
        second = new Node(head.next.data),
        result = new Context(first, second)
    if (head.next.next === null) return result        
    let f = first,
        s = second,
        pointer = head.next.next,
        counter = 0  
    while (pointer) {    
      let tmp = new Node(pointer.data)
      if (counter++ % 2 == 0) {
        f.next = tmp
        f = f.next
      } else {
        s.next = tmp
        s = s.next      
      }
      pointer = pointer.next
    }
    // Your code goes here.
    // Remember to return the context.
    return result
  }

  module.exports = {alternatingSplit}