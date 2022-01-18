// import { atom } from 'recoil'

// // 存user token
// const localStorageEffect =
//   (key) =>
//   ({ setSelf, onSet }) => {
//     if (typeof window !== 'undefined') {
//       const savedValue = localStorage.getItem(key)
//       if (savedValue != null) {
//         setSelf(savedValue)
//       }

//       onSet((newValue) => {
//         if (newValue) {
//           localStorage.setItem(key, newValue)
//         } else {
//           localStorage.removeItem(key)
//         }
//       })
//     }
//   }

// export const tokenState = atom({
//   key: 'tokenState',
//   default: null,
//   effects_UNSTABLE: [localStorageEffect('token')],
// })
