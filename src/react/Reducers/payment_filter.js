export const defaultState = {
    type: "default"
};

export default function reducer(state = defaultState, action) {
    switch (action.type) {
        // set a specific filter type
        case "PAYMENT_FILTER_SET_TYPE":
            return {
                ...state,
                type: action.payload.type
            };

        case "PAYMENT_FILTER_CLEAR":
        case "GENERAL_FILTER_RESET":
            return {
                ...defaultState
            };
    }
    return state;
}
