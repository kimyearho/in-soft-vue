<template>
  <div>
    <v-form>
      <!-- //* 기본 템플릿 -->
      <v-row>
        <v-col cols="4">
          <v-text-field
            :label="$t('templateCopy.guide.placeholder_enter')"
            value=""
          >
            <template v-slot:append-outer>
              <v-btn
                small
                color="success"
                @click="cloneAddField"
              >
                <v-icon right>
                  mdi-plus
                </v-icon>
                {{ $t('templateCopy.guide.btnAddText') }}
              </v-btn>
            </template>
          </v-text-field>
        </v-col>
      </v-row>

      <!-- //! 복제한 템플릿 -->
      <v-row
        v-for="(item, index) in form.fields"
        :key="'field-' + index"
      >
        <v-col cols="4">
          <v-text-field
            v-model="item.field"
            label="Template"
          >
            <template v-slot:append-outer>
              <v-btn
                small
                color="info"
                @click="cloneRemoveField(item)"
              >
                <v-icon right>
                  mdi-minus
                </v-icon>
                삭제
              </v-btn>
            </template>
          </v-text-field>
        </v-col>
      </v-row>
    </v-form>
  </div>
</template>

<script>
import { uuid } from '@/utils/validate'

export default {
  name: 'CloneTemplate',
  props: {
    maxTemplateCount: {
      type: Number,
      default: 2
    }
  },
  data: () => ({
    form: {
      fields: []
    }
  }),
  methods: {
    cloneAddField() {
      const fields = this.form.fields.length
      if (fields >= this.maxTemplateCount || fields >= 10) {
        alert('더이상 추가 안됨')
        return
      }
      this.form.fields.push({
        id: uuid(),
        field: ''
      })
    },
    cloneRemoveField(item) {
      const rejectFields = this.$lodash.reject(this.form.fields, { id: item.id })
      this.form.fields = this.$lodash.cloneDeep(rejectFields)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
