/**
 * Reducer:
 * An arrow function that always receives state and action
 * should return a new state
 */

const todoReducer = (state = [], action) => {
    switch(action.type) {
        case "ADD_TODO":
            var copy = [...state];
            copy.push(action.payload);
            return copy; //return a new state
        
        case "REMOVE_TODO":
            var copy = [...state];
            copy = copy.filter(t => t !== action.payload);
            return copy;

        case "CLEAR_TODOS":
            return[];

        default:
            return state;
    };
};

export default todoReducer;