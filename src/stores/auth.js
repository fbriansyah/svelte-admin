import {writable} from 'svelte/store';

export const isLogin = writable(false);
export const error = writable('');

export function login(username, password) {
  if (username === 'admin') {
    if (password === 'admin') {
      isLogin.set(true);
      error.set('');
    } else {
      error.set('Password Salah');
    }
  } else {
    error.set('Username Salah');
  }
}

export function logout() {
  isLogin.set(false);
}
