import { atom } from "recoil";
import { recoilPersist } from 'recoil-persist'
import { encode, decode } from 'js-base64';
//20221023 add
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
      const getItem =  sessionStorage.getItem(encode(key))
      return getItem && decode(getItem) || {}
    },
    clear: () => {
      sessionStorage.clear()
    },
  }
}
const { persistAtom } = recoilPersist({ key: 'recoil-persist', storage: localStorageBase64() })

export const iniYearMonthDateBox = atom({
  key: 'iniYearMonthDateBox',
  default: {
    yearMonth:new Date(new Date().getTime()).getTime(),
    userId:""
  },
  effects_UNSTABLE: [persistAtom]
})
