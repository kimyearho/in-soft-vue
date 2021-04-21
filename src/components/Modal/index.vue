<template>
  <div class="text-center">
    <v-dialog
      v-model="visible"
      :width="modalOptions.width"
      scrollable
      persistent
      no-click-animation
    >
      <v-card class="modal-card">
        <v-card-title :class="modalOptions.titleColor">
          <span class="alert-headline">{{ modalOptions.titleName }}</span>
        </v-card-title>

        <v-card-subtitle
          v-if="modalOptions.alert.isUse"
          :style="{marginTop: '20px', paddingBottom: '10px'}"
        >
          <v-alert
            icon="mdi-shield-lock-outline"
            text
            outlined
            type="info"
          >
            {{ modalOptions.alert.text }}
          </v-alert>
        </v-card-subtitle>

        <v-card-text class="search-form">
          <v-row
            v-if="modalOptions.search.isUse"
            align="center"
            justify="center"
            no-gutters
          >
            <v-col cols="3">
              <v-select
                v-model="modalOptions.search.itemKey"
                :items="modalOptions.search.options"
                item-text="label"
                item-value="value"
                outlined
                dense
              />
            </v-col>
            <v-col cols="8">
              <v-text-field
                class="dialog-input"
                outlined
                dense
                :label="modalOptions.search.placeholder"
              >
                <template v-slot:append-outer>
                  <v-btn
                    block
                    color="primary"
                  >
                    <v-icon>{{ modalOptions.search.searchBtnIcon }}</v-icon>
                    {{ modalOptions.search.searchBtnName }}
                  </v-btn>
                </template>
              </v-text-field>
            </v-col>
          </v-row>
        </v-card-text>

        <v-card-text class="alert-contents">
          <v-data-table
            fixed-header
            height="400"
            dense
            :style="{fontWeight: '400'}"
            :headers="modalOptions.columns"
            :items="rowItems"
            :items-per-page="15"
            :show-select="modalOptions.selection.isCheckbox"
            :single-select="modalOptions.selection.isSingleChecked"
            :item-key="modalOptions.selection.itemKey"
          />
        </v-card-text>

        <v-divider />

        <v-card-actions>
          <v-spacer />
          <v-btn
            text
            color="success"
          >
            {{ modalOptions.complateBtnName }}
          </v-btn>
          <v-btn
            text
            color="primary"
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
