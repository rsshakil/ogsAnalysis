import { atom, selectorFamily } from "recoil";
import { recoilPersist } from 'recoil-persist'
import { encode, decode } from 'js-base64';

// const { persistAtom } = recoilPersist({
//   key: 'recoil-persist', // this key is using to store data in local storage
//   storage: sessionStorage, // configurate which stroage will be used to store the data
// })

// 20230110 add'js-base64
const localStorageBase64 = () => {
  return {
    setItem: (key, value) => {
      sessionStorage.setItem(encode(key), encode(value))
    },
    getItem: (key) => {
      const getItem = sessionStorage.getItem(encode(key))
      return getItem && decode(getItem) || {}
    },
    clear: () => {
      sessionStorage.clear()
    },
  }
}
const { persistAtom } = recoilPersist({ key: 'recoil-persist', storage: localStorageBase64() })

export const modalState = atom({
    key: 'modalState',
    default: {
        DevExPopup: false,
        BaseModalOpen: false,
        modalType: '',
        // ExpensesModal: false,
        // WorksModal: false,
        // PaymentRequestModal: false,
        // InvoiceModal: false,
        mode: "edit",
        data: {
            id: 0,
            name: "商品名",
            description: "商品説明",
            topImage: "",
            contentImage: "",
            totalPoints: 0,
            salesPoints: 0,
            totalNumberOfItems: 0,
            remainingNumberOfItems: 0,
            startDateTime: new Date('2023/1/01 0:00'),
            endDateTime: new Date('2023/1/01 0:00'),
            revolutionsPerHour: 0,
            pointsPerHour: 0,
            duration: 0,
        }
    },
    effects_UNSTABLE: [persistAtom]
})


