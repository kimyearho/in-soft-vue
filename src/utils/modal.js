export function listModalOptions_1() {
  return {
    width: '800',
    titleName: '목록형 팝업',
    titleColor: 'indigo darken-1',
    closeBtnName: '닫기',
    complateBtnName: '저장',
    alert: {
      isUse: true,
      text: '전체 사용자를 조회하거나, 특정 사용자를 검색할 수 있습니다.'
    },
    search: {
      isUse: true,
      options: [
        {
          label: '이름',
          value: 'name'
        },
        {
          label: '부서',
          value: 'desaert'
        }
      ],
      itemKey: 'name',
      placeholder: '검색어를 입력해주세요.',
      searchBtnIcon: 'mdi-selection-search',
      searchBtnName: '검색'
    },
    selection: {
      isCheckbox: true,
      isSingleChecked: false,
      itemKey: 'id'
    },
    request: {
      url: '/in-soft/table/list',
      method: 'get',
      params: {}
    },
    columns: [
      {
        text: 'ID',
        value: 'id'
      },
      {
        text: 'Title',
        value: 'title',
        width: 300
      },
      {
        text: 'Date',
        value: 'display_time',
        width: 200
      }
    ]
  }
}
