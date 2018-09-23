export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";
export const ADD = "ADD";
export const SUBTRACT = "SUBTRACT";
export const STORE_RESULT = "STORE_RESULT";
export const DELETE_RESULT = "DELETE_RESULT";

export const increment = () => {
  return {
      type: INCREMENT
  }
};

export const decrement = () => {
    return {
        type: DECREMENT
    }
};

export const add = () => {
    return {
        type: ADD,
        val: 10
    }
};

export const subtract = () => {
    return {
        type: SUBTRACT,
        val: 2
    }
};

export const store_result = (counter) => {
    return {
        type: STORE_RESULT,
        result: counter
    }
};

export const delete_result = (id) => {
    return {
        type: DELETE_RESULT,
        delId: id
    }
};