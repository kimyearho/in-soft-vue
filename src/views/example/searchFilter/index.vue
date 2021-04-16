<template>
  <div class="filter-wrapper">

    <div
      v-if="isDescriptionUse"
      class="description mb-8"
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
          <p class="mt-2">
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
      class="result-wrapper mt-10"
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
        <v-card-title class="subtitle-1 text-h4">
          Props
        </v-card-title>
        <v-card-text class="mt-1">
          <v-simple-table class="mt-3">
            <template v-slot:default>
              <thead>
                <tr>
                  <th class="text-left subtitle-1">
                    Name
                  </th>
                  <th class="text-left subtitle-1">
                    Type
                  </th>
                  <th class="text-left subtitle-1">
                    Default
                  </th>
                  <th class="text-left subtitle-1">
                    Description
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr
                  v-for="item in propsList"
                  :key="item.name"
                >
                  <td class="indigo--text darken-4 subtitle-2 text-left">{{ item.name }}</td>
                  <td class="light-green--text darken-2 subtitle-2 text-left">{{ item.type }}</td>
                  <td class="purple--text darken-4 subtitle-2">{{ item.default }}</td>
                  <td class="subtitle-2 text-left">{{ item.description }}</td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
        </v-card-text>
      </v-card>

      <v-card class="mt-8 mb-5">
        <v-card-title class="subtitle-1 text-h4">
          Event
        </v-card-title>
        <v-card-text class="mt-2">
          <v-simple-table class="mt-3">
            <template v-slot:default>
              <thead>
                <tr>
                  <th class="text-left subtitle-1">
                    Name
                  </th>
                  <th class="text-left subtitle-1">
                    Type
                  </th>
                  <th class="text-left subtitle-1">
                    Description
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr
                  v-for="item in eventList"
                  :key="item.name"
                >
                  <td class="indigo--text darken-4 subtitle-2 text-left">{{ item.name }}</td>
                  <td class="light-green--text darken-2 subtitle-2 text-left">{{ item.type }}</td>
                  <td class="subtitle-2 text-left">{{ item.description }}</td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
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
      },
      propsList: [
        {
          name: 'userGroupOption',
          type: 'array',
          default: 'any:[]',
          description: '사용자 그룹 옵션'
        },
        {
          name: 'periodOption',
          type: 'array',
          default: 'any:[]',
          description: '기간 검색 옵션'
        },
        {
          name: 'datePickerFormat',
          type: 'string',
          default: 'YYYY-MM-DD',
          description: '날짜 포맷을 입력합니다.'
        },
        {
          name: 'datePickerOption',
          type: 'object',
          default: '{ editable: boolean, clearable: boolean }',
          description: '캘린더를 수정하거나, 초기화에 사용하는 옵션을 지정합니다.'
        }
      ],
      eventList: [
        {
          name: 'call_periodOption',
          type: 'function',
          description: '기간 검색을 조회 합니다.'
        },
        {
          name: 'search',
          type: 'function',
          description: '검색 기능을 실행 합니다.'
        }
      ]
    }
  },
  created() {
    //* 사용자 그룹 옵션을 조회한다.
    this.call_userGroupList()
  },
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
