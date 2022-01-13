<template>
  <v-toolbar dark>
    <v-toolbar-items>
      <v-select
        v-model="selectOptions.company"
        :items="companyData"
        item-text="label"
        item-value="value"
        label="상태"
      />
    </v-toolbar-items>
    <v-toolbar-items>
      <v-select
        v-model="selectOptions.classification"
        :items="classData"
        item-text="label"
        item-value="value"
        label="상태"
      />
    </v-toolbar-items>
    <v-toolbar-items>
      <template v-for="item in disaplyMember">
        <v-btn
          :key="item.member_name_en"
          class="mx-2"
          fab
          dark
          outlined
          :value="item.index"
          large
          color="white"
          min-width="80px"
          @click="setMemberId(item.index)"
        >
          <v-avatar>
            <div class="white--text">{{ item.member_name_kor }}</div>
            <div class="red--text">33</div>
          </v-avatar>
        </v-btn>
      </template>
    </v-toolbar-items>
  </v-toolbar>
</template>
<script>
import {
// SET_LOCAL_ITEM,
// GET_LOCAL_ITEM,
// REMOVE_LOCAL_ITEM
} from '@/utils/local-storage'

//! Helper는 Global Mixin으로 만들지 고민필요
import StoreHelper from '@/utils/store-helper'
import { mapGetters } from 'vuex'
// import { getMember, getMemeberTags } from '@/api/member'
import { getMember } from '@/api/member'

export default {
  name: 'MemberToolBar',
  components: {
  },
  mixins: [StoreHelper],
  data() {
    return {
      memberData: [],
      companyData: [],
      classData: [],
      drawsData: [],
      selectOptions: {
        company: 'holo',
        classification: 'JP - 0기',
        member: 1
      }
    }
  },
  computed: {
    ...mapGetters(['locale']),
    disaplyMember: {
      get() {
        return this.memberData.filter((item) => { return item.classification === this.selectOptions.classification })
      }
    }
  },
  beforeMount() {
    this.$i18n.locale = this.locale
  },
  mounted() {
    const $that = this
    const params = { 'company_name': $that.selectOptions.company }
    getMember(params).then(({ data }) => {
      // this.memberData = data.member_list
      const classSet = new Set()
      const companySet = new Set()

      data.member_list.forEach((item) => {
        companySet.add(item.company_name_alias)
        const classification = item.member_classification + ' - ' + item.member_generation
        console.log(typeof (item))
        classSet.add(classification)
        item.classification = classification
        $that.memberData.push(item)
      })

      $that.companyData = Array.from(companySet)
      $that.classData = Array.from(classSet)
    })
  },
  methods: {
    setMemberId: function(value) {
      this.selectOptions.member = value
      this.$emit('selectedMemberId', value)
    }
  }
}
</script>
<style scoped>
  /* div {
    padding: 20px
  }

  div span {
    margin: 20px
  } */
</style>
