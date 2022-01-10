const enMenuList = [
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
  // {
  //   menu_name: '중첩 메뉴',
  //   menu_id: 'M1104',
  //   role: 'admin'
  // },
  // {
  //   menu_name: 'Menu 1',
  //   menu_id: 'M1105',
  //   role: 'admin'
  // },
  // {
  //   menu_name: 'Menu 2',
  //   menu_id: 'M1106',
  //   role: 'admin'
  // },
  {
    menu_name: 'Table',
    menu_id: 'M1109',
    role: 'admin'
  },
  {
    menu_name: 'Data-Table',
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
    menu_name: 'CloudPc',
    menu_id: 'M1113',
    role: 'admin'
  },
  {
    menu_name: 'Template Copy',
    menu_id: 'M1114',
    role: 'admin'
  },
  {
    menu_name: 'Chart',
    menu_id: 'M1115',
    role: 'admin'
  }
]

const koMenuList = [
  {
    menu_name: '컴포넌트',
    menu_id: 'M1101',
    role: 'admin'
  },
  {
    menu_name: '검색 필터',
    menu_id: 'M1108',
    role: 'admin'
  },
  {
    menu_name: '모달',
    menu_id: 'M1107',
    role: 'admin'
  },
  // {
  //   menu_name: '중첩 메뉴',
  //   menu_id: 'M1104',
  //   role: 'admin'
  // },
  // {
  //   menu_name: 'Menu 1',
  //   menu_id: 'M1105',
  //   role: 'admin'
  // },
  // {
  //   menu_name: 'Menu 2',
  //   menu_id: 'M1106',
  //   role: 'admin'
  // },
  {
    menu_name: '테이블',
    menu_id: 'M1109',
    role: 'admin'
  },
  {
    menu_name: 'Data-Table',
    menu_id: 'M1110',
    role: 'admin'
  },
  {
    menu_name: 'Ag-Grid',
    menu_id: 'M1111',
    role: 'admin'
  },
  {
    menu_name: '폼',
    menu_id: 'M1112',
    role: 'admin'
  },
  {
    menu_name: 'CloudPc',
    menu_id: 'M1113',
    role: 'admin'
  },
  {
    menu_name: '템플릿 추가',
    menu_id: 'M1114',
    role: 'admin'
  },
  {
    menu_name: '차트',
    menu_id: 'M1115',
    role: 'admin'
  }
]

module.exports = [
  {
    url: '/c1/menu/list',
    type: 'get',
    response: config => {
      const locale = config.query.locale || 'ko'
      return {
        code: 20000,
        data: locale === 'ko' ? koMenuList : enMenuList
      }
    }
  }
]
