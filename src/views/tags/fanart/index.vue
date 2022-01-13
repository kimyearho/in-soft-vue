<template>
  <v-app
    class="v-app"
  >
    <v-container
      fluid
      fill-height
    >
      <v-row
        no-gutters
        align="center"
        justify="center"
      >
        <v-card
          width="100%"
          height="100%"
        >
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
                <v-avatar
                  :key="item.member_name_en"
                  :value="item.index"
                >
                  <svg-icon
                    class="child-svg-icon"
                    icon-class="login2"
                  />
                  {{ item.member_name_kor }}
                </v-avatar>
              </template>
            </v-toolbar-items>
          </v-toolbar>
          <v-carousel
            width="100%"
            height="100%"
          >
            <v-carousel-item
              v-for="(item,i) in getDraw"
              :key="i"
              width="100%"
              height="100%"
              :src="item.url"
              reverse-transition="fade-transition"
              transition="fade-transition"
            />
          </v-carousel>
        </v-card>
      </v-row>
      <!-- //? Snackbar 컴포넌트 -->
      <common-snackbars
        :visible="snackbar"
        @close="snackbar = false"
      />
    </v-container>
  </v-app>
</template>

<script>
import {
// SET_LOCAL_ITEM,
// GET_LOCAL_ITEM,
// REMOVE_LOCAL_ITEM
} from '@/utils/local-storage'

//! Helper는 Global Mixin으로 만들지 고민필요
import StoreHelper from '@/utils/store-helper'
import CommonSnackbars from '@/components/Snackbars'
import { mapGetters } from 'vuex'
// import { getMember, getMemeberTags } from '@/api/member'
import { getMember } from '@/api/member'
import { getDraws } from '@/api/tweet'

export default {
  name: 'Channel',
  components: {
    CommonSnackbars
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
        member: '1'
      }
    }
  },
  computed: {
    ...mapGetters(['locale']),
    disaplyMember: {
      get() {
        return this.memberData.filter((item) => { return item.classification === this.selectOptions.classification })
      }
    },
    getDraw: {
      get() {
        return this.drawsData
      },
      set(value) {
        const drawParams = { 'type': 'fanart', 'member_id': value }
        const draws = this.drawsData
        getDraws(drawParams).then((draw_res) => {
          draws.splice(0, draws.length)
          draw_res.data.draw_list.forEach((item) => {
            draws.push(item)
          })
        })
      }
    }
  },
  beforeMount() {
    this.$i18n.locale = this.locale
  },
  mounted() {
    const $that = this
    const params = { 'company_name': 'holo' }
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
    }).then(() => {
      $that.getDraw = 1
    })
  },
  methods: {

  }
}
</script>
