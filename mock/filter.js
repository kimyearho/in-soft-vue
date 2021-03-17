const groupData = [
  {
    label: '사용자 그룹 1',
    value: 'user1'
  },
  {
    label: '사용자 그룹 2',
    value: 'user2'
  },
  {
    label: '사용자 그룹 3',
    value: 'user3'
  },
  {
    label: '사용자 그룹 4',
    value: 'user4'
  }
]

const periodData = [
  {
    label: '최근 1주일',
    value: 'user1'
  },
  {
    label: '최근 1개월',
    value: 'user2'
  },
  {
    label: '최근 3개월',
    value: 'user3'
  },
  {
    label: '최근 6개월',
    value: 'user4'
  }
]

module.exports = [
  {
    url: '/in-soft/group/userGroupList',
    type: 'get',
    response: config => {
      const token = config.headers['x-token']
      if (!token) {
        return {
          code: 50000,
          message: 'Token fail'
        }
      }
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
      const token = config.headers['x-token']
      if (!token) {
        return {
          code: 50000,
          message: 'Token fail'
        }
      }
      return {
        code: 20000,
        data: periodData
      }
    }
  }
]
