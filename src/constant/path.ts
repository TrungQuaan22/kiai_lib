const path = {
  home: '/',
  profile: '/user/profile',
  changePassword: '/user/password',
  login: '/login',
  register: '/register',
  logout: '/logout',
  bookDetail: ':nameId',
  cart: '/cart'
} as const

export default path
