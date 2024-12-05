import { atom } from "recoil";

const selectPackagePopUpAtom = atom({
  key: "selectPackagePopUp",
  default: {
    isTriggered: false,
  },
});

export default selectPackagePopUpAtom;
