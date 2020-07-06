import { mount } from "@vue/test-utils";
import AppBtnClose from "@/components/AppBtnClose";

describe("A special button that closes the containing dialog", () => {
  it("emits 'close' event when triggered", async () => {
    const wrapper = mount(AppBtnClose);
    const btn = wrapper.findComponent({ name: "VBtn" });

    btn.trigger("click");

    expect(wrapper.emitted("close")).toBeTruthy();
  });
});
