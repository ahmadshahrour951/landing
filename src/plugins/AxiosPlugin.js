import Vue from 'vue';
import axios from 'axios';
import config from '../config';

function axiosPlugin() {
  return new Vue({
    data() {
      return {
        axiosInstance: null,
        axiosOptions: {
          baseURL: config.API_URL,
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
        },
      };
    },
    created() {
      this.createAxios();
    },
    methods: {
      createAxios() {
        this.axiosInstance = axios.create(this.axiosOptions);
      },
      async get(url, config = {}) {
        return this.axiosInstance.get(url, config);
      },
      post(url, data, config = {}) {
        return this.axiosInstance.post(url, data, config);
      },
    },
  });
}

export default {
  install(vue) {
    vue.prototype.$api = axiosPlugin();
  },
};
