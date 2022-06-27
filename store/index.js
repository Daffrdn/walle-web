import Vue from 'vue'
import Vuex from 'vuex'
import pulsa from './pulsa'

Vue.use(Vuex)

export default () =>
  new Vuex.Store({
    modules: {
      pulsa: {
        namespaced: true,
        ...pulsa,
      },
    },
  })

// export const state = () => ({
//   items: [
//     { id: 0, price: '11.000', get: '10.000', name: 'indosat 10.000', stok: 0 },
//     { id: 1, price: '16.000', get: '15.000', name: 'indosat 15.000', stok: 1 },
//     { id: 2, price: '22.000', get: '20.000', name: 'indosat 20.000', stok: 2 },
//     { id: 3, price: '31.000', get: '30.000', name: 'indosat 30.000', stok: 4 },
//     { id: 4, price: '41.000', get: '40.000', name: 'indosat 40.000', stok: 5 },
//     { id: 5, price: '51.000', get: '50.000', name: 'indosat 50.000', stok: 4 },
//     { id: 6, price: '61.000', get: '60.000', name: 'indosat 60.000', stok: 0 },
//     { id: 7, price: '71.000', get: '70.000', name: 'indosat 70.000', stok: 3 },
//     { id: 8, price: '81.000', get: '80.000', name: 'indosat 80.000', stok: 2 },
//     { id: 9, price: '91.000', get: '90.000', name: 'indosat 90.000', stok: 0 },
//     {
//       id: 10,
//       price: '150.000',
//       get: '150.000',
//       name: 'indosat 150.000',
//       stok: 3,
//     },
//     {
//       id: 11,
//       price: '201.000',
//       get: '200.000',
//       name: 'indosat 200.000',
//       stok: 0,
//     },
//     { id: 12, price: '61.000', get: '60.000', name: 'indosat 60.000', stok: 0 },
//     { id: 13, price: '71.000', get: '70.000', name: 'indosat 70.000', stok: 3 },
//     { id: 14, price: '81.000', get: '80.000', name: 'indosat 80.000', stok: 2 },
//     { id: 15, price: '91.000', get: '90.000', name: 'indosat 90.000', stok: 0 },
//     {
//       id: 16,
//       price: '150.000',
//       get: '150.000',
//       name: 'indosat 150.000',
//       stok: 3,
//     },
//     {
//       id: 17,
//       price: '201.000',
//       get: '200.000',
//       name: 'indosat 200.000',
//       stok: 0,
//     },
//   ],
//   mls: [
//     { id: 18, price: '11.000', get: '10.000', name: 'xl 10.000', stok: 0 },
//     { id: 19, price: '16.000', get: '15.000', name: 'xl 15.000', stok: 0 },
//     { id: 20, price: '22.000', get: '20.000', name: 'xl 20.000', stok: 1 },
//     { id: 21, price: '31.000', get: '30.000', name: 'xl 30.000', stok: 0 },
//     { id: 22, price: '41.000', get: '40.000', name: 'xl 40.000', stok: 0 },
//     { id: 23, price: '51.000', get: '50.000', name: 'xl 50.000', stok: 1 },
//     { id: 24, price: '61.000', get: '60.000', name: 'xl 60.000', stok: 0 },
//     { id: 25, price: '71.000', get: '70.000', name: 'xl 70.000', stok: 1 },
//     { id: 26, price: '81.000', get: '80.000', name: 'xl 80.000', stok: 0 },
//     { id: 27, price: '91.000', get: '90.000', name: 'xl 90.000', stok: 1 },
//     { id: 28, price: '150.000', get: '150.000', name: 'xl 150.000', stok: 0 },
//     { id: 29, price: '201.000', get: '200.000', name: 'xl 200.000', stok: 0 },
//   ],
//   gplayz: [
//     {
//       id: 30,
//       price: '11.000',
//       get: '10.000',
//       name: 'telkomsel 10.000',
//       stok: 1,
//     },
//     {
//       id: 31,
//       price: '16.000',
//       get: '15.000',
//       name: 'telkomsel 15.000',
//       stok: 0,
//     },
//     {
//       id: 32,
//       price: '22.000',
//       get: '20.000',
//       name: 'telkomsel 20.000',
//       stok: 1,
//     },
//     {
//       id: 33,
//       price: '31.000',
//       get: '30.000',
//       name: 'telkomsel 30.000',
//       stok: 1,
//     },
//   ],
// })
