import {writable} from 'svelte/store';

export const isLogin = writable(true);
export const error = writable('');

export function login(username, password) {
  if (username === 'admin') {
    if (password === 'admin') {
      isLogin.set(true);
      error.set('');
    } else {
      error.set('Password atau Username salah');
    }
  } else {
    error.set('Username atau Password salah');
  }
}

export function logout() {
  isLogin.set(false);
}
