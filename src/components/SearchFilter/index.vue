<template>
  <v-card>
    <v-subheader>
      <span class="filter-title">검색 필터</span>
      <div :style="{marginLeft: '98px'}">
        <v-switch
          v-model="isExpand"
          :label="isExpand ? 'Expand ON' : 'Expand OFF'"
          @change="expandFilter"
        />
      </div>
    </v-subheader>
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
            v-model="userGroupSelect"
            :items="userGroupOption"
            item-text="label"
            item-value="value"
            outlined
            dense
          />
        </v-col>
        <v-col
          cols="12"
          md="3"
        >
          <v-text-field
            v-model="form.lastname"
            outlined
            dense
            label="그룹명을 입력하세요."
          />
        </v-col>
        <v-col
          cols="12"
          md="3"
        >
          <v-btn
            color="primary"
          >
            <v-icon>mdi-selection-search</v-icon>
            SEARCH
          </v-btn>
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
            v-model="periodSelect"
            :items="periodOption"
            item-text="label"
            item-value="value"
            outlined
            dense
          />
        </v-col>
        <v-col
          cols="12"
          md="3"
        >
          <date-picker
            v-model="dateRange"
            type="date"
            range
            placeholder="Select date range"
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
    }
  },
  data() {
    return {
      visible: false,
      isExpand: false,
      form: {
        username: '',
        lastname: '',
        id: '',
        desc: ''
      },
      dateRange: [],
      userGroupSelect: 'user1',
      periodSelect: 'user1',
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
          // this.$vuetify.theme.dark = true
          if (this.periodOption.length <= 0) {
            this.$emit('call_periodOption')
          }
        } else {
          // this.$vuetify.theme.dark = false
        }
      }
    }
  },
  methods: {
    expandFilter() {
      this.isExpand = !!this.isExpand
      this.visible = !!this.isExpand
      this.$emit('dy-height', this.visible)
    }
  }
}
</script>

<style lang="scss" scoped></style>
