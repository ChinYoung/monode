import request from '../lib/request';

export const login = data => request({ url: "/login",method: "post", data })
export const logout = _ => request({ url: "/logout",method: "post" })