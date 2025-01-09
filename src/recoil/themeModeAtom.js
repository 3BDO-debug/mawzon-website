const { atom } = require("recoil");
import { recoilPersist } from "recoil-persist";

// Define a fallback storage interface
const dummyStorage = {
  getItem: () => null,
  setItem: () => {},
  removeItem: () => {},
};

// Determine the appropriate storage to use
const storage = typeof window === "undefined" ? dummyStorage : localStorage;

const { persistAtom } = recoilPersist({
  key: "recoil-persist", // this key is used for localStorage
  storage: storage,
});

const themeModeAtom = atom({
  key: "themeMode",
  default: {
    direction: "rtl",
    mode: "light",
  },
});

export default themeModeAtom;
