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

export function NEWS_POST(body, token) {
  return {
    url: API_URL + "/news",
    options: {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
      body: JSON.stringify(body),
    },
  };
}

export function EVENTS_POST(body, token) {
  return {
    url: API_URL + "/events",
    options: {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
      body: JSON.stringify(body),
    },
  };
}

export function INSTITUTION_GET({ id, page }) {
  return {
    url: `${API_URL}/institutions/admin/${id}?page=${page}`,
    options: {
      method: "GET",
      cache: "no-store",
    },
  };
}

export function NOTIFY_USERS(body, token) {
  return {
    url: API_URL + "/notify",
    options: {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
      body: JSON.stringify(body),
    },
  };
}

export function NEWS_REMOVE({ id, token }) {
  return {
    url: `${API_URL}/news/${id}`,
    options: {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    },
  };
}

export function EVENTS_REMOVE({ id, token }) {
  return {
    url: `${API_URL}/events/${id}`,
    options: {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    },
  };
}

export function INSTITUTION_REMOVE({ id, token }) {
  return {
    url: `${API_URL}/institutions/${id}`,
    options: {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    },
  };
}

export function INSTITUTION_POST(body, token) {
  return {
    url: API_URL + "/institutions",
    options: {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
      body: JSON.stringify(body),
    },
  };
}
