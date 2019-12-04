export const getList = ({ data = {} }={}) => REQUEST({
  url: '/table/list',
  method: 'post',
  data
})