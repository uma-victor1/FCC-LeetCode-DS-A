"""Functions to manage a users shopping cart items."""


def add_item(current_cart, items_to_add):
    """Add items to shopping cart.

    :param current_cart: dict - the current shopping cart.
    :param items_to_add: iterable - items to add to the cart.
    :return: dict - the updated user cart dictionary.
    """

    for item in items_to_add:
        if item in current_cart:
            current_cart[item] += 1
        else:
            current_cart[item] = 1
    return current_cart


def read_notes(notes):
    """Create user cart from an iterable notes entry.

    :param notes: iterable of items to add to cart.
    :return: dict - a user shopping cart dictionary.
    """
    current_cart = {}
    add_item(current_cart, notes)
    return current_cart
    


def update_recipes(ideas, recipe_updates):
    """Update the recipe ideas dictionary.

    :param ideas: dict - The "recipe ideas" dict.
    :param recipe_updates: iterable -  with updates for the ideas section.
    :return: dict - updated "recipe ideas" dict.
    """

    for update in recipe_updates:
        ideas[update[0]] = update[1]
    return ideas


def sort_entries(cart):
    """Sort a users shopping cart in alphabetically order.

    :param cart: dict - a users shopping cart dictionary.
    :return: dict - users shopping cart sorted in alphabetical order.
    """

    return dict(sorted(cart.items()))


def send_to_store(cart, aisle_mapping):
    """Combine users order to aisle and refrigeration information.

    :param cart: dict - users shopping cart dictionary.
    :param aisle_mapping: dict - aisle and refrigeration information dictionary.
    :return: dict - fulfillment dictionary ready to send to store.
    """
    fulfilment_cart = {}
    for item in cart:     
        aisle_mapping[item].insert(0, cart[item])
        fulfilment_cart[item] = aisle_mapping[item]
    
    return dict(sorted(fulfilment_cart.items(), reverse=True))


def update_store_inventory(fulfillment_cart, store_inventory):
    """Update store inventory levels with user order.

    :param fulfillment cart: dict - fulfillment cart to send to store.
    :param store_inventory: dict - store available inventory
    :return: dict - store_inventory updated.
    """

    for item, cart_details in fulfillment_cart.items():
        quantity_ordered = cart_details[0]

        # Check if the ordered item exists in the store's inventory
        if item in store_inventory:
            # First, subtract the ordered quantity from the stock
            store_inventory[item][0] -= quantity_ordered

            # Then, check if the new stock count is 0
            if store_inventory[item][0] == 0:
                # If it is, replace the count with 'Out of Stock'
                store_inventory[item][0] = 'Out of Stock'
                
    return store_inventory
            
