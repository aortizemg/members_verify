import CryptoJS from 'crypto-js';

const secretKey = 'thirsty_cat';

// Encryption function
export const encryptData = (data) => {
  console.log(data); // Log the data to be encrypted

  // Encrypt the data using AES
  const encryptedData = CryptoJS.AES.encrypt(JSON.stringify(data), secretKey).toString();
  return encryptedData;
};

// Decryption function
export const decryptData = (encryptedData) => {
  try {
    // Decrypt the data using AES
    const bytes = CryptoJS.AES.decrypt(encryptedData, secretKey);
    const decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));

    return decryptedData;
  } catch (error) {
    console.error('Failed to decrypt data:', error);
    return null; // Return null or handle error accordingly
  }
};
