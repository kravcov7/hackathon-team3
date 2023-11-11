export const getCookie = (name: string) => {
	const matches = document.cookie.match(
		new RegExp('(?:^|; )' + name.replace(/([\$?*|{}\\\[\]\\\/\+^])/g, '\\$1') + '=([^;]*)')
	);
	return matches ? decodeURIComponent(matches[1]) : undefined;
}

type TSetCookieProps = {
  expires?: number | string;
  path?: string;
} & { [extraParams: string]: string | number | boolean; }

export const setCookie = (name: string, value: string | number | boolean, props?: TSetCookieProps) => {
  props = {
    path: '/',
    ...props,
  };
  let exp = props.expires;
  const d = new Date();
  if (typeof exp == 'number' && exp) {
    d.setTime(d.getTime() + exp * 1000);
    exp = props.expires = Number(d);
  }
  if (exp && d.toUTCString) {
    props.expires = d.toUTCString();
  }
  value = encodeURIComponent(value);
  let updatedCookie = name + '=' + value;
  for (const propName in props) {
    updatedCookie += '; ' + propName;
    const propValue = props[propName];
    if (propValue !== true) {
      updatedCookie += '=' + propValue;
    }
  }
  document.cookie = updatedCookie;
};

export const deleteCookie = (name: string) => {
	setCookie(name, false, { expires: -1 });
}