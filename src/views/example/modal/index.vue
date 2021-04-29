<template>
  <page-container>
    <div
      v-if="isDescriptionUse"
      class="mb-10"
    >
      <v-card>
        <v-card-title>
          Preview Example
        </v-card-title>
        <v-card-subtitle>{{ $t('modal.guide.subTitle') }}</v-card-subtitle>
        <v-card-text class="description-text">
          <p>{{ $t('modal.guide.description1') }}</p>
          <p>{{ $t('modal.guide.description2') }}</p>
          <p>
            <strong>
              <span>Source</span> <br>
              <v-divider />
              <div :style="{marginTop: '10px'}">
                > src/components/Mdoal <br>
                > src/views/example/modal/index.vue
              </div>
            </strong>
          </p>
        </v-card-text>
      </v-card>
    </div>

    <v-card>
      <v-row>
        <v-col cols="6">
          <div style="margin-left: 10px">
            <v-card-title>Example</v-card-title>
            <v-card-subtitle
              :style="{paddingTop: '10px'}"
            >{{ $t('modal.example.subTitle1') }}<br>
              {{ $t('modal.example.subTitle2') }}</v-card-subtitle>
            <v-divider />
            <v-card-text>
              <v-form>
                <v-row>
                  <v-col cols="12">
                    <v-checkbox
                      v-model="form.alert.isUse"
                      :label="$t('modal.example.isPopupGuide')"
                      color="red"
                      hide-details
                    />
                  </v-col>
                  <v-col cols="12">
                    <v-text-field
                      v-model="form.alert.text"
                      :label="$t('modal.example.placeholder_guide')"
                      :disabled="!form.alert.isUse"
                    />
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="12">
                    <v-checkbox
                      v-model="form.search.isUse"
                      :label="$t('modal.example.isSearchForm')"
                      color="indigo"
                      hide-details
                    />
                  </v-col>
                  <v-col cols="4">
                    <v-text-field
                      v-model="form.search.placeholder"
                      :label="$t('modal.example.placeholder_searchKeyword')"
                      :disabled="!form.search.isUse"
                    />
                  </v-col>
                  <v-col cols="4">
                    <v-text-field
                      v-model="form.search.searchBtnIcon"
                      :label="$t('modal.example.placeholder_searchIcon')"
                      :disabled="!form.search.isUse"
                    />
                  </v-col>
                  <v-col cols="4">
                    <v-text-field
                      v-model="form.search.searchBtnName"
                      :label="$t('modal.example.placeholder_searchBtnName')"
                      :disabled="!form.search.isUse"
                    />
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="8">
                    <v-checkbox
                      v-model="form.selection.isCheckbox"
                      :label="$t('modal.example.isMultipleListCheckbox')"
                      color="green"
                      hide-details
                    />
                  </v-col>
                  <v-col cols="4">
                    <v-checkbox
                      v-model="form.selection.isSingleChecked"
                      :label="$t('modal.example.isSingleListCheckbox')"
                      color="blue"
                      hide-details
                      :disabled="!form.selection.isCheckbox"
                    />
                  </v-col>
                </v-row>
              </v-form>
            </v-card-text>
            <v-card-text>
              <v-btn
                color="primary"
                @click="showListModal"
              >TEST OPEN MODAL - CLICK</v-btn>
            </v-card-text>
          </div>
        </v-col>
      </v-row>
    </v-card>

    <v-card class="mt-10">
      <v-card-title class="subtitle-1 text-h4">
        Props
      </v-card-title>
      <v-card-text class="mt-2 mb-5">
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
    <common-list-modal
      v-if="visible.modal"
      :visible="visible.modal"
      :modal-init="modalOptions"
      @modalClose="visible.modal = false"
    />
  </page-container>
</template>

<script>
import Modal from '@/components/Modal'
import { listModalOptions_1 } from '@/utils/modal'

export default {
  name: 'ModalExample',
  components: {
    CommonListModal: Modal
  },
  props: {
    isDescriptionUse: {
      type: Boolean,
      default: true
    }
  },
  data: (vm) => ({
    visible: {
      modal: false
    },
    form: Object.assign({}, listModalOptions_1()),
    modalOptions: {},
    propsList: [
      {
        name: 'visible',
        type: 'boolean',
        default: 'false',
        description: vm.$t('modal.props.visible')
      },
      {
        name: 'modalOptions',
        type: 'object',
        default: '@/util/modal',
        description: vm.$t('modal.props.modalOptions')
      }
    ]
  }),
  methods: {
    showListModal() {
      this.$set(this, 'modalOptions', this.form)
      this.visible.modal = true
    }
  }
}
</script>
