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

export const iniDateRangeDateBox = atom({
  key: 'iniDateRangeDateBox',
  // default: { row: [false,1,2,3,4,5] }
  // default: ['1111111'],
  default: [
    new Date(new Date().getTime() - 1000 * 60 * 60 * 24 * 30).setHours(0,0,0,0),//30days before
    new Date(new Date().getTime()).setHours(23, 59, 59, 999),
],
  effects_UNSTABLE: [persistAtom]
})
