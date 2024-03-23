import * as Yup from 'yup';
import { errorMessages } from '../errorMessages';

const stockFormSchema = Yup.object().shape({
    itemStockUnsetCount: Yup.number()
        .min(0, errorMessages.W_BETWEEN_01('未使用在庫', 0, 999999))
        .max(999999, errorMessages.W_BETWEEN_01('未使用在庫', 0, 999999))
        .typeError(errorMessages.W_INTEGER_01('未使用在庫')),
});

export const STOCK_FORM_INITIAL_VALUE = {
    itemStockUnsetCount: 0,
    itemStockGachaCount: 0,
    itemStockCollectionCount: 0,
    itemStockShippingRequestCount: 0,
    itemStockShippedCount: 0,
    itemStockMemo: ''
};

export default stockFormSchema;