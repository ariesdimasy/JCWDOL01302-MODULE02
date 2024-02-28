enum CountActionKind {
    INCREMENT = "increment",
    DECREMENT = "decrement",
}

interface CountAction {
    type: CountActionKind;
    payload: number;
}

interface CountState {
    count: number;
}

export default function reducer(state: CountState, action: CountAction) {
    switch (action.type) {
        case CountActionKind.INCREMENT:
            return { count: state.count + action.payload };
        case CountActionKind.DECREMENT:
            return { count: state.count - action.payload };
        default:
            return state;
    }
}