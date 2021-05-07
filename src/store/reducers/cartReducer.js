const cartReducer = (state= [], action) => {
    switch(action.type) {
        case "ADD_CART":
            let copy= [...state];

            /**
             * if the product exist instide the cart,
             * just sum the quantity
             * else
             * push it
             */

            let found = false;
            for(let i=0; i < copy.length; i++) {
                let item = copy[i];
                if(item.id === action.payload.id){
                    found = true;
                    item.quantity = item.quantity + action.payload.quantity;
                }
            }

            if(!found) {
                copy.push(action.payload);
            }

            return copy;

        default:
            return state;
    }
};

export default cartReducer;