const getters = {
  sidebar: state => state.app.sidebar,
  device: state => state.app.device,
  token: state => state.user.token,
  avatar: state => state.user.avatar,
  name: state => state.user.name,
  addRouters: state => state.settings.addRouters,
  clipped: state => state.app.sidebarClipped,
  horizon: state => state.app.horizontal,
  permissionRouters: (state) => state.settings.routers

}
export default getters
