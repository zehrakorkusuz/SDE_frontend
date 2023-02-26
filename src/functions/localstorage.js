export function getToken() {
  return localStorage.getItem("token");
}

export function getUserEmail() {
  return localStorage.getItem("email");
}

export function storeUser({ token, email }) {
  localStorage.setItem("token", token);
  localStorage.setItem("email", email);
}
