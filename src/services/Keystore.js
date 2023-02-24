import { ethers } from "ethers";

import {
  setLocalStorage,
  getLocalStorage,
  getSessionStorage,
  setSessionStorage,
} from "../lib/Keystore";

export default class KeyStore {
  static instance;
  _privateKey = null;

  constructor() {}

  static getInstance() {
    if (!KeyStore.instance) {
      KeyStore.instance = new KeyStore();
    }
    return KeyStore.instance;
  }

  keyStoreKey() {
    return "wallet-keystore-key";
  }

  async getAddress() {
    const val = await getLocalStorage(this.keyStoreKey);
    if (val && val.address) {
      return ethers.utils.getAddress(val.address);
    }
    return "";
  }

  async createNewAddress(password, saveKey) {
    try {
      const account = ethers.Wallet.createRandom();
      const KeystoreV3 = await account.encrypt(password);
      if (saveKey) {
        await setLocalStorage(this.keyStoreKey, JSON.parse(KeystoreV3));
        await setSessionStorage("password", password);
      }
      return account.address;
    } catch (error) {
      return "";
    }
  }

  async delete() {
    this._privateKey = null;
    await removeLocalStorage(this.keyStoreKey);
    await removeLocalStorage("password");
  }

  async getPassword() {
    return await getSessionStorage("password");
  }

  async getSigner(provider) {
    if (!this._privateKey) {
      return;
    }
    const signer = new ethers.Wallet(this._privateKey);
    return signer.connect(provider);
  }

  async sign(message) {
    if (!this._privateKey) {
      return null;
    }
    const signer = new ethers.Wallet(this._privateKey);
    return await signer.signMessage(ethers.utils.arrayify(message));
  }
}
