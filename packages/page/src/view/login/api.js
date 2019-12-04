
export const login = data => REQUEST({ 
  url: "/user/login",
  method: "post", 
  data 
})

export const logout = _ => REQUEST({ 
  url: "/user/logout",
  method: "post" 
})