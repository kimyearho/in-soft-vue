<template>
  <div class="text-center">
    <v-dialog
      v-model="visible"
      :width="modalOptions.width"
      scrollable
      persistent
      no-click-animation
    >
      <v-card>
        <v-card-title :class="modalOptions.titleColor">
          <span class="alert-headline">{{ modalOptions.titleName }}</span>
        </v-card-title>

        <v-card-subtitle
          v-if="modalOptions.alert.isUse"
          :style="{marginTop: '20px'}"
        >
          <v-alert
            icon="mdi-shield-lock-outline"
            text
            type="info"
          >
            {{ modalOptions.alert.text }}
          </v-alert>
        </v-card-subtitle>

        <v-card
          v-if="modalOptions.search.isUse"
          :style="{margin: '0px 24px 24px 24px'}"
        >
          <v-card-title>
            <v-row>
              <v-col
                cols="4"
                sm="2"
              >
                <v-subheader v-text="'검색 옵션'" />
              </v-col>
              <v-col
                cols="4"
                md="2"
              >
                <v-select
                  v-model="modalOptions.search.itemKey"
                  :items="modalOptions.search.options"
                  item-text="label"
                  item-value="value"
                  outlined
                  dense
                />
              </v-col>
              <v-col
                cols="6"
                md="4"
              >
                <v-text-field
                  outlined
                  dense
                  :label="modalOptions.search.placeholder"
                />
              </v-col>
              <v-col cols="2">
                <v-btn color="primary">
                  <v-icon>{{ modalOptions.search.searchBtnIcon }}</v-icon>
                  {{ modalOptions.search.searchBtnName }}
                </v-btn>
              </v-col>
            </v-row>
          </v-card-title>
        </v-card>

        <v-card-text class="alert-contents">
          <v-data-table
            :style="{fontWeight: '400'}"
            :headers="modalOptions.columns"
            :items="rowItems"
            :items-per-page="10"
            :show-select="modalOptions.selection.isCheckbox"
            :single-select="modalOptions.selection.isSingleChecked"
            :item-key="modalOptions.selection.itemKey"
          />
        </v-card-text>

        <v-divider />

        <v-card-actions>
          <v-spacer />
          <v-btn
            color="success"
            text
          >
            {{ modalOptions.complateBtnName }}
          </v-btn>
          <v-btn
            color="primary"
            text
            @click="$emit('modalClose', false)"
          >
            {{ modalOptions.closeBtnName }}
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    modalInit: {
      type: Object,
      default: () => ({
        width: '',
        titleName: '',
        titleColor: '',
        closeBtnName: '',
        complateBtnName: '',
        alert: {
          isUse: true,
          text: ''
        },
        search: {
          isUse: true,
          options: [],
          itemKey: '',
          placeholder: '',
          searchBtnIcon: '',
          searchBtnName: ''
        },
        selection: {
          isCheckbox: false,
          isSingleChecked: false,
          itemKey: ''
        },
        request: {
          url: '',
          method: '',
          params: {}
        },
        columns: []
      })
    }
  },
  data() {
    return {
      dialog: false,
      rowItems: [],
      modalOptions: {}
    }
  },
  beforeMount() {
    this.modalOptions = this.$lodash.cloneDeep(this.modalInit)
  },
  mounted() {
    this.$nextTick(() => {
      this.call_list()
    })
  },
  methods: {
    call_list() {
      this.$axios.get(this.modalOptions.request.url).then(({ data }) => {
        this.rowItems = data.items
      })
    },
    outsideClose() {
      return
    }
  }
}
</script>
