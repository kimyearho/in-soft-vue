const menuList = [
  {
    menu_name: 'Example',
    menu_level: 1,
    role: 'admin'
  },
  {
    menu_name: 'Table',
    menu_level: 2,
    role: 'admin'
  },
  {
    menu_name: 'Form',
    menu_level: 2,
    role: 'admin'
  },
  {
    menu_name: 'Nest',
    menu_level: 2,
    role: 'admin'
  },
  {
    menu_name: 'NestMenu1',
    menu_level: 3,
    role: 'admin'
  },
  {
    menu_name: 'NestMenu2',
    menu_level: 3,
    role: 'admin'
  },
  {
    menu_name: 'Ui-Components',
    menu_level: 1,
    role: 'admin'
  },
  {
    menu_name: 'Alert',
    menu_level: 2,
    role: 'admin'
  },
  {
    menu_name: 'Button',
    menu_level: 2,
    role: 'admin'
  },
  {
    menu_name: 'Grid',
    menu_level: 2,
    role: 'admin'
  },
  {
    menu_name: 'Modal',
    menu_level: 2,
    role: 'admin'
  },
  {
    menu_name: 'Selectbox',
    menu_level: 2,
    role: 'admin'
  },
  {
    menu_name: 'Textfield',
    menu_level: 2,
    role: 'admin'
  }
]

module.exports = [
  {
    url: '/in-soft/menu/list',
    type: 'get',
    response: config => {
      return {
        code: 20000,
        data: menuList
      }
    }
  }
]
