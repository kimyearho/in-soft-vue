<template>
  <v-container fluid>
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
                      label="안내 문구"
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
    <common-list-modal
      v-if="visible.modal"
      :visible="visible.modal"
      :modal-init="modalOptions"
      @modalClose="visible.modal = false"
    />
  </v-container>
</template>

<script>
import Modal from '@/components/Modal'
import { listModalOptions_1 } from '@/utils/modal'

export default {
  name: 'ModalExample',
  components: {
    CommonListModal: Modal
  },
  data: () => ({
    visible: {
      modal: false
    },
    form: Object.assign({}, listModalOptions_1()),
    modalOptions: {}
  }),
  methods: {
    showListModal() {
      this.$set(this, 'modalOptions', this.form)
      this.visible.modal = true
    }
  }
}
</script>

<style lang="scss" scoped></style>
