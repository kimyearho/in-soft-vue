<template>
  <div class="form-wrapper">
    <v-container fluid>
      <v-row>
        <v-col cols="4">
          <v-card>
            <v-card-title>Preview Form Example</v-card-title>
            <v-card-subtitle>CloudPc 상세 페이지 예제 입니다.</v-card-subtitle>
            <v-card-text>
              <p>CloudPc 가상 PC Pool 조회화면을 99% 동일하게 Vuetify로 재 구성했습니다. (팝업제외)</p>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
      <v-row>
        <!-- //* 상세 페이지 -->
        <v-col
          cols="4"
        >
          <app-preview-form @close="visible.previewForm = false" />
        </v-col>
        <v-col
          cols="4"
        >
          <app-preview-form @close="visible.previewForm = false" />
        </v-col>
        <!-- //* END -->
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
