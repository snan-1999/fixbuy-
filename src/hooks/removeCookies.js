import Cookie from 'js-cookie';

const RemoveCookie = (cookiename) => {
    console.log(cookiename)
    Cookie.remove(cookiename);
};

export default RemoveCookie;