export const API_URL = "https://horadivina-back-en.onrender.com/api";

export function TOKEN_POST(body) {
  return {
    url: API_URL + "/auth/admin",
    options: {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    },
  };
}
