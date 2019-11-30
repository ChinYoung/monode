import request from '../lib/request';

export const login = data => request({ url: "/user/login",method: "post", data })
export const logout = _ => request({ url: "/user/logout",method: "post" })