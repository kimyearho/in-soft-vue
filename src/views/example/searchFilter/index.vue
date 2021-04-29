<template>
  <page-container>
    <div
      v-if="isDescriptionUse"
      class="description mb-8"
    >
      <v-card>
        <v-card-title>
          Preview Example
        </v-card-title>
        <v-card-subtitle>{{ $t('searchFilter.guide.subTitle') }}</v-card-subtitle>
        <v-card-text class="description-text">
          <p>{{ $t('searchFilter.guide.description1') }}</p>
          <p>{{ $t('searchFilter.guide.description2') }}</p>
          <p>{{ $t('searchFilter.guide.description3') }}</p>
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
  </page-container>
</template>

<script>
import DefaultAlert from '@/components/Dialog'
import SearchFilter from '@/components/SearchFilter'
import { getUserGroupList, getPeriodList } from '@/api/filter'
import { mapGetters } from 'vuex'

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
          description: this.$t('searchFilter.props.userGroupOption')
        },
        {
          name: 'periodOption',
          type: 'array',
          default: 'any:[]',
          description: this.$t('searchFilter.props.periodOption')
        },
        {
          name: 'datePickerFormat',
          type: 'string',
          default: 'YYYY-MM-DD',
          description: this.$t('searchFilter.props.datePickerFormat')
        },
        {
          name: 'datePickerOption',
          type: 'object',
          default: '{ editable: boolean, clearable: boolean }',
          description: this.$t('searchFilter.props.datePickerOption')
        }
      ],
      eventList: [
        {
          name: 'call_periodOption',
          type: 'function',
          description: this.$t('searchFilter.event.call_periodOption')
        },
        {
          name: 'search',
          type: 'function',
          description: this.$t('searchFilter.event.search')
        }
      ]
    }
  },
  computed: {
    ...mapGetters(['locale'])
  },
  watch: {
    locale(val) {
      if (val) {
        this.call_userGroupList()
        this.call_periodList()
      }
    }
  },
  created() {
    //* 사용자 그룹 옵션을 조회한다.
    this.call_userGroupList()
  },
  methods: {
    // ? 사용자 그룹 옵션 리스트를 조회
    call_userGroupList() {
      getUserGroupList({ locale: this.locale }).then(({ data }) => {
        this.filterModel.userGroupOption = data
      })
    },
    // ? 기간 옵션 리스트를 조회 (최초 Expand ON일때 한번만 실행 됨)
    call_periodList() {
      getPeriodList({ locale: this.locale }).then(({ data }) => {
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
