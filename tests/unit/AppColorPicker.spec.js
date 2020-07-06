import { mount, createLocalVue } from "@vue/test-utils";
import AppColorPicker from "@/components/AppColorPicker";
import Vuetify from "vuetify";

const localVue = createLocalVue();

describe("AppColorPicker", () => {
  let vuetify;

  beforeEach(() => {
    vuetify = new Vuetify();
  });

  it("Renders selected color and emits the value of the newly selected color", () => {
    const initialColor = "#ffffffff";
    const wrapper = mount(AppColorPicker, {
      localVue,
      vuetify,
      propsData: { color: initialColor },
      data: () => ({ menu: true })
    });

    const emittedColor = i => wrapper.emitted("color-pick")[i][0];

    expect(emittedColor(0)).toEqual(initialColor.toUpperCase());
    // initial color emission

    const pickedColor = "#505666FF";
    const colorPicker = wrapper.findComponent({ name: "VColorPicker" });
    colorPicker.vm.$emit("input", pickedColor);
    //emulating color picking
    expect(emittedColor(1)).toEqual(pickedColor);
  });
});
