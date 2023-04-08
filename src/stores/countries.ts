import {defineStore} from 'pinia';

export const useCountries = defineStore('countries', {
  state: () => ({
    list: [],
  }),
  getters: {
    getAllCountries: (state) => state.list,
  },
  actions: {
    setCountries(payload:any) {
      this.list = payload;
    },
  },
});
