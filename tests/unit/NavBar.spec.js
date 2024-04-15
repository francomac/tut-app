import { mount } from "@vue/test-utils";
import NavBar from "@/components/NavBar.vue";

describe("NavBar", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(NavBar, {
      data() {
        return {
          isLoggedIn: true,
        };
      },
    });
  });

  it("should render a profile link", () => {
    const profileLink = wrapper.get("#profile");

    expect(profileLink.text()).toEqual("My Profile");
  });

  it("should NOT render a profile link", () => {
    wrapper = mount(NavBar, {
      data() {
        return {
          isLoggedIn: false,
        };
      },
    });

    const profileLink = wrapper.find("#profile").exists();

    expect(profileLink).toBeFalsy();
  });
});
