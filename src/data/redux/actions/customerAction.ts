import { actionTypes } from '../actionTypes';
import * as data from '../../examples/dataSample.json';

export const loadCustomerRecords = () => ({
    type: actionTypes.customerLoadRecords,
    payload: {...data}
});
