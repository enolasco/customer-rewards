import { actionTypes } from "../actionTypes";

const initialState = {
    customers: [] as Customer[],
    activeCustomer: {}
}

export const customerReducer = (state=initialState, action: any) => {
    switch (action.type) {
        case actionTypes.customerLoadRecords:
            return {
                ...state,
                customers: [...action.payload.default]
            };
        case actionTypes.customerGetRewardPoints:
            return {
                ...state,
                activeCustomer: {}
            };
        default:
            return state;
    }
};

interface Customer {
    name: string,
    lastName: string,
    emailAddress: string,
    purchases: Purchase[],
}

interface Purchase {
    date: Date,
    product: string,
    unitPrice: number,
}

// interface Product {
//     name: string,
//     unitPrice: number,
//     quantity: number,
//     totalPrice: number,
// }