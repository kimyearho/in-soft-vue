const menuList = [
  {
    menu_name: 'Example',
    menu_id: 'M1101',
    role: 'admin'
  },
  {
    menu_name: 'DataGrid',
    menu_id: 'M1102',
    role: 'admin'
  },
  {
    menu_name: 'Form',
    menu_id: 'M1103',
    role: 'admin'
  },
  {
    menu_name: '중첩 메뉴',
    menu_id: 'M1104',
    role: 'admin'
  },
  {
    menu_name: 'Menu 1',
    menu_id: 'M1105',
    role: 'admin'
  },
  {
    menu_name: 'Menu 2',
    menu_id: 'M1106',
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
