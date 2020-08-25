############################################################################################################################################################################################################################################
#
#      KATA: 6 kyu "New Cashier Does Not Know About Space or Shift"
#
#    SOURCE: https://www.codewars.com/kata/5d23d89906f92a00267bb83d
#    AUTHOR: https://www.codewars.com/users/GordonBreazz
#
#      PLOT: Some new cashiers started to work at your restaurant. 
#            They are good at taking orders, but they don't know how to capitalize words, or use a space bar!

#            All the orders they create look something like this:
#            
#            "milkshakepizzachickenfriescokeburgerpizzasandwichmilkshakepizza"
#            
#            The kitchen staff are threatening to quit, because of how difficult it is to read the orders.#            
#            Their preference is to get the orders as a nice clean string with spaces and capitals like so:
#            
#            "Burger Fries Chicken Pizza Pizza Pizza Sandwich Milkshake Milkshake Coke"
#            
#            The kitchen staff expect the items to be in the same order as they appear in the menu.          
#            The menu items are fairly simple, there is no overlap in the names of the items:
#            
#            1. Burger
#            2. Fries
#            3. Chicken
#            4. Pizza
#            5. Sandwich
#            6. Onionrings
#            7. Milkshake
#            8. Coke
#
############################################################################################################################################################################################################################################

def get_order(order):
    dic = ["burger", "fries", "chicken", "pizza", "sandwich", "onionrings", "milkshake", "coke"]
    result = ''
    for i, item in enumerate(dic):    	
        a = len(order)
        order = order.replace(item, '')
        b = a - len(order)        
        result += (dic[i].capitalize() + ' ') * (b // len(item))
    return result.rstrip()
    
print(get_order("milkshakepizzachickenfriescokeburgerpizzasandwichmilkshakepizza"))