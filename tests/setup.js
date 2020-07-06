import Vue from "vue";
import Vuetify from "vuetify";

Vue.use(Vuetify);

Vue.config.productionTip = false;

HTMLCanvasElement.prototype.getContext = () => {
  const App = document.createElement("div");
  App.setAttribute("data-app", true);
  document.body.appendChild(App);
};
