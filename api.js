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

export function RELIGIONS_GET() {
  return {
    url: `${API_URL}/religion`,
    options: {
      method: "GET",
      cache: "no-store",
    },
  };
}

export function NEWS_GET({ id, page }) {
  return {
    url: `${API_URL}/news/${id}?page=${page}`,
    options: {
      method: "GET",
      cache: "no-store",
    },
  };
}

export function EVENTS_GET({ id, page }) {
  return {
    url: `${API_URL}/events/${id}?page=${page}`,
    options: {
      method: "GET",
      cache: "no-store",
    },
  };
}
