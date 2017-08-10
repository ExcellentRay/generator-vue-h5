export const encryption = (plaintText) => {
  let key = CryptoJS.enc.Utf8.parse("2z4kyy2mhtemrzm5");
  let iv = CryptoJS.enc.Utf8.parse("1269571569321021");

  var encryptedData = CryptoJS.AES.encrypt(plaintText, key, {
    iv: iv,
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7
  });
  let value = " " + encryptedData;

  return value.trim();
}
