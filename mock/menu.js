const menuList = [
  {
    menu_name: 'Components',
    menu_id: 'M1101',
    role: 'admin'
  },
  {
    menu_name: 'Search Filter',
    menu_id: 'M1108',
    role: 'admin'
  },
  {
    menu_name: 'Modal',
    menu_id: 'M1107',
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
  },
  {
    menu_name: 'Table',
    menu_id: 'M1109',
    role: 'admin'
  },
  {
    menu_name: 'Simple DataTable',
    menu_id: 'M1110',
    role: 'admin'
  },
  {
    menu_name: 'Ag-Grid',
    menu_id: 'M1111',
    role: 'admin'
  },
  {
    menu_name: 'Form',
    menu_id: 'M1112',
    role: 'admin'
  },
  {
    menu_name: 'CloudPc Form',
    menu_id: 'M1113',
    role: 'admin'
  },
  {
    menu_name: 'Clone Template',
    menu_id: 'M1114',
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
