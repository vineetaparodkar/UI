export async function getLocalStorage(key) {
    return new Promise((resolve, _) => {
      chrome.storage.local.get(key, function (result) {
        resolve(result[key]);
      });
    });
  }
  
  export async function setLocalStorage(key, value) {
    return new Promise((resolve, _) => {
      chrome.storage.local.set({ [key]: value }, function () {
        resolve(true);
      });
    });
  }
  
  export async function removeLocalStorage(key) {
    return new Promise((resolve, _) => {
      chrome.storage.local.remove(key, function () {
        resolve(true);
      });
    });
  }
  
  export async function clearLocalStorage() {
    return new Promise((resolve, _) => {
      chrome.storage.local.clear(function () {
        resolve(true);
      });
    });
  }
  
  export async function getSessionStorage(key) {
    return (await chrome.storage.session.get(key))[key];
  }
  
  export async function setSessionStorage(key, value) {
    return await chrome.storage.session.set({ [key]: value });
  }
  
  export async function removeSessionStorage(key) {
    return await chrome.storage.session.remove(key);
  }
  