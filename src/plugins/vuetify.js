import Vue from "vue";
import Vuetify from "vuetify/lib";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        accent: "37d7b2",
        primary: "697685",
        secondary: "5ca8e0",
        light: "e2f2ff",
        disabled: "d8e0e6"
      }
    }
  }
});
