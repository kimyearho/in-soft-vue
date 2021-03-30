<template>
  <v-card :style="{paddingTop: '20px'}">
    <v-form :style="{margin: '10px'}">
      <v-row>
        <v-col
          cols="4"
          sm="2"
        >
          <v-subheader v-text="'그룹 선택'" />
        </v-col>
        <v-col
          cols="4"
          md="2"
        >
          <v-select
            v-model="form.selectedGroup"
            :items="userGroupOption"
            item-text="label"
            item-value="value"
            outlined
            dense
          />
        </v-col>
        <v-col
          cols="4"
          md="3"
        >
          <v-text-field
            v-model="form.groupName"
            outlined
            dense
            label="그룹명을 입력하세요."
          />
        </v-col>
        <v-col
          cols="2"
        >
          <v-btn
            color="primary"
            @click="filterSubmit"
          >
            <v-icon>mdi-selection-search</v-icon>
            SEARCH
          </v-btn>
        </v-col>
        <v-col cols="3">
          <v-subheader>
            <v-switch
              v-model="isExpand"
              color="green"
              :label="isExpand ? '상세 검색 ON' : '상세 검색 OFF'"
              @change="expandFilter"
            />
          </v-subheader>
        </v-col>
      </v-row>
      <v-row v-if="visible">
        <v-col
          cols="4"
          sm="2"
        >
          <v-subheader v-text="'기간'" />
        </v-col>
        <v-col
          cols="4"
          md="2"
        >
          <v-select
            v-model="form.selectedPeriod"
            :items="periodOption"
            item-text="label"
            item-value="value"
            outlined
            dense
            @change="changePeriod"
          />
        </v-col>
        <v-col
          cols="12"
          md="3"
        >
          <date-picker
            v-model="form.periodRange"
            type="date"
            range
            :format="datePickerFormat"
            :editable="datePickerOption.editable"
            :clearable="datePickerOption.clearable"
            value-type="format"
            placeholder="날짜를 입력 해주세요."
          />
        </v-col>
      </v-row>
    </v-form>
  </v-card>
</template>

<script>
import DatePicker from 'vue2-datepicker'
import 'vue2-datepicker/index.css'

export default {
  components: {
    DatePicker
  },
  props: {
    userGroupOption: {
      required: true,
      type: Array,
      default: () => {
        return []
      }
    },
    periodOption: {
      type: Array,
      default: () => {
        return []
      }
    },
    datePickerFormat: {
      type: String,
      default: 'YYYY-MM-DD'
    },
    datePickerOption: {
      type: Object,
      default() {
        return {
          editable: '',
          clearable: ''
        }
      }
    }
  },
  data() {
    return {
      visible: false,
      isExpand: false,
      form: {
        selectedGroup: 'group1',
        selectedPeriod: '1w',
        groupName: '',
        periodRange: [],
        isExpand: null
      },
      styles: {
        expand: {
          position: 'relative',
          top: '-10px'
        }
      }
    }
  },
  watch: {
    isExpand: {
      handler(val) {
        if (val) {
          if (this.periodOption.length <= 0) {
            this.$emit('call_periodOption')
          }
        }
      }
    }
  },
  methods: {
    expandFilter() {
      this.isExpand = !!this.isExpand
      this.visible = !!this.isExpand
      this.$emit('dy-height', this.visible)
    },
    changePeriod(val) {
      this.form.periodRange = []
      this.datePickerSetting(val)
    },
    datePickerSetting(opt) {
      let to
      let from = ''
      if (opt === '1w') {
        to = this.$moment().format('YYYY-MM-DD')
        from = this.$moment()
          .subtract(7, 'd')
          .format('YYYY-MM-DD')
      } else {
        to = this.$moment().format('YYYY-MM-DD')
        from = this.$moment()
          .subtract(opt.replace('m', ''), 'M')
          .format('YYYY-MM-DD')
      }
      this.form.periodRange.push(from)
      this.form.periodRange.push(to)
    },
    filterSubmit() {
      this.form.isExpand = this.isExpand
      this.$emit('search', this.form)
    }
  }
}
</script>

<style lang="scss" scoped></style>
