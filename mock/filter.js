const koGroupData = [
  {
    label: '사용자 그룹 1',
    value: 'group1'
  },
  {
    label: '사용자 그룹 2',
    value: 'group2'
  },
  {
    label: '사용자 그룹 3',
    value: 'group3'
  },
  {
    label: '사용자 그룹 4',
    value: 'group4'
  }
]

const enGroupData = [
  {
    label: 'User Group 1',
    value: 'group1'
  },
  {
    label: 'User Group 2',
    value: 'group2'
  },
  {
    label: 'User Group 3',
    value: 'group3'
  },
  {
    label: 'User Group 4',
    value: 'group4'
  }
]

const koPeriodData = [
  {
    label: '최근 1주일',
    value: '1w'
  },
  {
    label: '최근 1개월',
    value: '1m'
  },
  {
    label: '최근 3개월',
    value: '3m'
  },
  {
    label: '최근 6개월',
    value: '6m'
  }
]

const enPeriodData = [
  {
    label: 'Last week',
    value: '1w'
  },
  {
    label: 'Last 1 month',
    value: '1m'
  },
  {
    label: 'Last 3 month',
    value: '3m'
  },
  {
    label: 'Last 6 month',
    value: '6m'
  }
]

module.exports = [
  {
    url: '/in-soft/group/userGroupList',
    type: 'get',
    response: config => {
      const locale = config.query.locale || 'ko'
      return {
        code: 20000,
        data: locale === 'ko' ? koGroupData : enGroupData
      }
    }
  },

  {
    url: '/in-soft/group/periodList',
    type: 'get',
    response: config => {
      const locale = config.query.locale || 'ko'
      return {
        code: 20000,
        data: locale === 'ko' ? koPeriodData : enPeriodData
      }
    }
  }
]
