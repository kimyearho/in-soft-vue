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

    <div
      v-if="isDescriptionUse"
      class="description"
    >
      <v-card>
        <v-card-title>
          Information
        </v-card-title>
        <v-card-subtitle>게시판 검색형</v-card-subtitle>
        <v-card-text class="description-text">
          <p>SearchFilter 컴포넌트는 일반적으로 게시판형 페이지에서 사용될 수 있는 검색필터입니다.</p>
          <p>해당 컴포넌트는 예제로 사용자 그룹 및 기간별 검색을 사용합니다.</p>
          <p>또한 해당 컴포넌트는 검색시 결과값을 표시하며, 상세 검색을 ON/OFF에 따라 결과값이 달라집니다.</p>
          <p>각 환경에 맞게 Custormize하여 사용하세요.</p>
          <p>
            <strong>
              <span>Source</span> <br>
              <v-divider />
              <div :style="{marginTop: '10px'}">
                > src/components/SearchFilter <br>
                > src/views/example/searchFilter/index.vue
              </div>
            </strong>
          </p>
        </v-card-text>
      </v-card>
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
  props: {
    isDescriptionUse: {
      type: Boolean,
      default: true
    }
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
      const callbackData = this.$lodash.cloneDeep(data)
      if (!callbackData.isExpand) {
        delete callbackData.selectedPeriod
        delete callbackData.periodRange
      }
      delete callbackData.isExpand
      this.source = objToString(callbackData)
      this.visible.alert = true
    }
  }
}
</script>
