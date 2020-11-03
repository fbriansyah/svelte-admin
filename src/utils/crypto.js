// import * as crypto from 'crypto';
import {createCipheriv, createDecipheriv} from 'crypto';

const key = '4ng0nd4t44j1s4k4';
const iv = key.split('').reverse().join('');

export function encrypt(text) {
  const cipher = createCipheriv('aes-256-cbc', key, iv);
  const encryptText = cipher.update(text, 'utf8', 'base64');
  console.log(encryptText + cipher.final('base64'));
  return encryptText;
}

export function decrypt(text) {
  const dechiper = createDecipheriv('aes-256-cbc', key, iv);
  const decryptedText = dechiper.update(text, 'base64', 'utf8');
  return decryptedText;
}

const testEncrypt = encrypt('Hello World');
console.log('enc:', testEncrypt);
console.log('dec:', decrypt(testEncrypt));

