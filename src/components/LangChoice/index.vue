<template>
  <div class="text-center">
    <v-menu
      min-width="150px"
      bottom
      offset-y
    >
      <template v-slot:activator="{on, attrs}">
        <v-btn
          text
          color="primary"
          class="white--text ma-5"
          v-bind="attrs"
          v-on="on"
        >
          <span class="lang-icon">
            <v-img
              width="30"
              :src="require(`@/assets/images/${langIcon}.png`)"
            />
          </span>
          {{ buttonText }}
        </v-btn>
      </template>
      <v-list>
        <v-list-item
          link
          @click="toggleItem('ko')"
        >
          <v-list-item-title>Korean</v-list-item-title>
        </v-list-item>
        <v-list-item
          link
          @click="toggleItem('en')"
        >
          <v-list-item-title>English</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </div>
</template>

<script>
export default {
  name: 'LangChoice',
  data: () => ({
    menu: false,
    buttonText: 'Korean',
    langIcon: 'ko'
  }),
  methods: {
    toggleItem(locale) {
      this.langIcon = locale
      this.buttonText = locale === 'ko' ? 'Korean' : 'English'
      this.$i18n.locale = locale
    }
  }
}
</script>

<style lang="scss" scoped>
.text-center {
  .lang-icon {
    padding-right: 10px;
    >.v-image {
      border: 1px solid #00000033;
    }
  }
}
.v-menu {
  &__content {
    left: 1619px !important;
  }
}
</style>
