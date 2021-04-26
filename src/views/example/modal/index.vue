<template>
  <page-container>
    <div
      v-if="isDescriptionUse"
      class="mb-10"
    >
      <v-card>
        <v-card-title>
          Information
        </v-card-title>
        <v-card-subtitle>공통 팝업구성</v-card-subtitle>
        <v-card-text class="description-text">
          <p>Modal 컴포넌트는 공통으로 Modal을 어떻게 구성할 수 있는지 예시를 첨부 했습니다.</p>
          <p>해당 컴포넌트는 위 옵션들을 이용하여 Modal의 내용을 동적으로 변경 및 적용할 수 있습니다.</p>
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
            >아래 옵션을 입력 or 선택한 뒤 버튼을 클릭하세요.<br>옵션
              선택없이 버튼을 클릭하면 기본값이 세팅 됩니다.</v-card-subtitle>
            <v-divider />
            <v-card-text>
              <v-form>
                <v-row>
                  <v-col cols="12">
                    <v-checkbox
                      v-model="form.alert.isUse"
                      label="팝업 안내문 사용여부"
                      color="red"
                      hide-details
                    />
                  </v-col>
                  <v-col cols="12">
                    <v-text-field
                      v-model="form.alert.text"
                      label="안내 문구 (입력 가능)"
                      :disabled="!form.alert.isUse"
                    />
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="12">
                    <v-checkbox
                      v-model="form.search.isUse"
                      label="검색폼 사용여부"
                      color="indigo"
                      hide-details
                    />
                  </v-col>
                  <v-col cols="4">
                    <v-text-field
                      v-model="form.search.placeholder"
                      label="검색어 Placeholder"
                      :disabled="!form.search.isUse"
                    />
                  </v-col>
                  <v-col cols="4">
                    <v-text-field
                      v-model="form.search.searchBtnIcon"
                      label="검색버튼 아이콘"
                      :disabled="!form.search.isUse"
                    />
                  </v-col>
                  <v-col cols="4">
                    <v-text-field
                      v-model="form.search.searchBtnName"
                      label="검색버튼 이름"
                      :disabled="!form.search.isUse"
                    />
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="8">
                    <v-checkbox
                      v-model="form.selection.isCheckbox"
                      label="목록 체크박스 사용여부"
                      color="green"
                      hide-details
                    />
                  </v-col>
                  <v-col cols="4">
                    <v-checkbox
                      v-model="form.selection.isSingleChecked"
                      label="단일체크 사용여부"
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
  data: () => ({
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
        description: '팝업 표시여부'
      },
      {
        name: 'modalOptions',
        type: 'object',
        default: '@/util/modal 참고',
        description: '팝업 기본 옵션'
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
