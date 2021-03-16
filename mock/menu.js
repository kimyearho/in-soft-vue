const menuList = [
  {
    menu_name: '예제',
    menu_level: 1,
    role: 'admin'
  },
  {
    menu_name: 'DataGrid',
    menu_level: 2,
    role: 'admin'
  },
  {
    menu_name: 'Form',
    menu_level: 2,
    role: 'admin'
  },
  {
    menu_name: '중첩 메뉴',
    menu_level: 2,
    role: 'admin'
  },
  {
    menu_name: '중첩 메뉴1',
    menu_level: 3,
    role: 'admin'
  },
  {
    menu_name: '중첩 메뉴2',
    menu_level: 3,
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
