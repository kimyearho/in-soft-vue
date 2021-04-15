<template>
  <div class="form-wrapper">
    <v-container fluid>
      <v-row>
        <!-- //* 상세 페이지 -->
        <v-col
          v-if="visible.previewForm"
          cols="4"
        >
          <app-preview-form @close="visible.previewForm = false" />
        </v-col>
        <!-- //* END -->
        <v-col :cols="visible.previewForm ? 8 : 12">
          <v-card>
            <v-card-title>Preview Form Example</v-card-title>
            <v-card-subtitle>CloudPc 상세 페이지 예제 입니다.</v-card-subtitle>
            <v-card-text>
              <p>CloudPc 가상 PC Pool 조회화면을 99% 동일하게 Vuetify로 재 구성했습니다. (팝업제외)</p>
            </v-card-text>
            <div class="">
              <v-btn
                color="primary"
                @click="showPreview"
              >
                TOGGLE
              </v-btn>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import PreviewForm from './components/PreviewForm'

export default {
  name: 'CloudPcForm',
  components: {
    appPreviewForm: PreviewForm
  },
  data: () => ({
    visible: {
      previewForm: false
    }
  }),
  methods: {
    showPreview() {
      this.visible.previewForm = !this.visible.previewForm
    }
  }
}
</script>

<style lang="scss" scoped>
.form-wrapper {
  .v-btn {
    margin: 15px;
  }
}
</style>
