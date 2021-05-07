/**
 * Action:
 * An arrow fn that returns an object
 * object should contain a type and payload (optional)
 */

export const addTodo = (todoText) => {
    return {
        type: "ADD_TODO",
        payload: todoText
    };
};

export const removeTodo = (todoText) => {
    return {
        type: "REMOVE_TODO",
        payload: todoText,
    };
};


export const clearTodos = () => {
    return {
        type: "CLEAR_TODOS",
    };
};


export const addToCart = (item) => {
    return {
        type: "ADD_CART",
        payload: item,
    };
};