<template>
  <div class="filter-wrapper">
    <!-- //? 검색 필터 컴포넌트 -->
    <search-filter
      :user-group-option="filterModel.userGroupOption"
      :period-option="filterModel.periodOption"
      @call_periodOption="call_periodList"
    />
  </div>
</template>

<script>
import SearchFilter from '@/components/SearchFilter'
import { getUserGroupList, getPeriodList } from '@/api/filter'

export default {
  name: 'ViewSearchFilter',
  components: {
    SearchFilter
  },
  data() {
    return {
      filterModel: {
        userGroupOption: [],
        periodOption: []
      }
    }
  },
  created() {
    //* 사용자 그룹 옵션을 조회한다.
    this.call_userGroupList()
  },
  mounted() {},
  methods: {
    // ? 사용자 그룹 옵션 리스트를 조회
    call_userGroupList() {
      getUserGroupList()
        .then(({ data }) => {
          this.filterModel.userGroupOption = data
        })
    },
    // ? 기간 옵션 리스트를 조회 (최초 Expand ON일때 한번만 실행 됨)
    call_periodList() {
      getPeriodList()
        .then(({ data }) => {
          this.$set(this.filterModel, 'periodOption', data)
        })
    }
  }
}
</script>
