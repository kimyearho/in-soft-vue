<template>
  <div class="filter-wrapper">
    <!-- //? 검색 필터 컴포넌트 -->
    <search-filter
      ref="searchFilter"
      :user-group-option="filterModel.userGroupOption"
      :period-option="filterModel.periodOption"
      :date-picker-format="filterModel.datePickerFormat"
      :date-picker-option="filterModel.datePickerOption"
      @call_periodOption="call_periodList"
      @search="call_search"
    />
    <div
      class="result-wrapper"
      :style="{marginTop: '50px'}"
    >
      <default-alert
        v-if="visible.alert"
        :visible="visible.alert"
        :contents="source"
        @dialogClose="visible.alert = false"
      />
    </div>
  </div>
</template>

<script>
import DefaultAlert from '@/components/Dialog'
import SearchFilter from '@/components/SearchFilter'
import { getUserGroupList, getPeriodList } from '@/api/filter'

function objToString(obj) {
  var str = ''
  for (var p in obj) {
    // eslint-disable-next-line no-prototype-builtins
    if (obj.hasOwnProperty(p)) {
      str += p + ': ' + obj[p] + '<br>'
    }
  }
  return str
}

export default {
  name: 'ViewSearchFilter',
  components: {
    DefaultAlert,
    SearchFilter
  },
  data() {
    return {
      source: '',
      filterModel: {
        userGroupOption: [],
        periodOption: [],
        datePickerFormat: 'YYYY-MM-DD',
        datePickerOption: {
          editable: false,
          clearable: false
        }
      },
      visible: {
        alert: false
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
      getUserGroupList().then(({ data }) => {
        this.filterModel.userGroupOption = data
      })
    },
    // ? 기간 옵션 리스트를 조회 (최초 Expand ON일때 한번만 실행 됨)
    call_periodList() {
      getPeriodList().then(({ data }) => {
        this.$set(this.filterModel, 'periodOption', data)
        this.$refs['searchFilter'].datePickerSetting('1w')
      })
    },
    call_search(data) {
      this.source = objToString(data)
      this.visible.alert = true
    }
  }
}
</script>
