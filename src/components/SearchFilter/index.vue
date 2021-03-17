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
            v-model="select"
            :items="items"
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
            v-model="select2"
            :items="items2"
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
      select: 'user1',
      select2: 'user1',
      dateRange: [],
      items: [
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
      ],
      items2: [
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
      ],
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
