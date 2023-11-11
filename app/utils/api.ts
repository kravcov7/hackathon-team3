import url from "./config";
import { setCookie, getCookie, deleteCookie } from "./cookie";

type TPropsRegister = { name: string; password: string; email: string };

type TPropsLogin = Omit<TPropsRegister, "email">;

export const signUp = ({ email, password, name }: TPropsRegister) => {
  // return fetch(`api/auth/signup`, {
  return fetch(`http://127.0.0.1:8000/api/auth/signup`, {
    method: "POST",
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password, name }),
    redirect: "follow",
    referrerPolicy: "no-referrer",
  })
    .then((res) => {
      if (!res.ok) {
        throw new Error(`ошибка: ` + res.status);
      } else {
        return res.json();
      }
    })

    .then((res) => requestHandler(res));
};

export const signIn = ({ name, password }: TPropsLogin) => {
  return fetch(`${url}/auth/signin`, {
    method: "POST",
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email: name, password }),
  })
    .then((res) => {
      if (!res.ok) {
        throw new Error(`ошибка: ` + res.status);
      } else {
        return res.json();
      }
    })
    .then((res) => requestHandler(res));
};

const requestHandler = (res: Response) => {
  return res.ok ? res.json() : Promise.reject(res);
};

export const refreshTokenR = () => {
  return fetch(`${url}/auth/token`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ token: localStorage.getItem("refreshToken") }),
  }).then(requestHandler);
};

type TFetchWithRefresh = { success: boolean; message: string };

export const fetchWithRefresh = async (url: string, options: RequestInit) => {
  try {
    const res = await fetch(url, options);
    return await requestHandler(res);
  } catch (err: any) {
    return err.json().then((err: TFetchWithRefresh) => {
      console.log(err);
      if (err?.message === "jwt expired") {
        return refreshTokenR().then((res) => {
          localStorage.setItem("refreshToken", res.refreshToken);
          const authToken = res.accessToken.split("Bearer ")[1];
          setCookie("token", authToken);
          (options.headers as { [key: string]: string }).Authorization =
            res.accessToken;
          return fetch(url, options).then((res) => requestHandler(res));
        });
      } else {
        deleteCookie("token");
        localStorage.removeItem("refreshToken");
        // eslint-disable-next-line
        location.reload();
        return Promise.reject(err);
      }
    });
  }
};

export const getUser = () => {
  return fetchWithRefresh(`${url}/auth/user`, {
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + getCookie("token"),
    },
    redirect: "follow",
    referrerPolicy: "no-referrer",
  });
};

export const signOutCookie = () => {
  return fetch(`${url}/auth/logout`, {
    method: "POST",
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ token: localStorage.getItem("refreshToken") }),
    redirect: "follow",
    referrerPolicy: "no-referrer",
  }).then((res) => requestHandler(res));
};
