const groupData = [
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

const periodData = [
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

module.exports = [
  {
    url: '/in-soft/group/userGroupList',
    type: 'get',
    response: config => {
      // const { token } = config.query
      // const token = config.headers['x-token'] || 'admin-token'
      // if (!token) {
      //   return {
      //     code: 50000,
      //     message: 'Token fail'
      //   }
      // }
      return {
        code: 20000,
        data: groupData
      }
    }
  },

  {
    url: '/in-soft/group/periodList',
    type: 'get',
    response: config => {
      // const token = config.headers['x-token'] || 'admin-token'
      // if (!token) {
      //   return {
      //     code: 50000,
      //     message: 'Token fail'
      //   }
      // }
      return {
        code: 20000,
        data: periodData
      }
    }
  }
]
