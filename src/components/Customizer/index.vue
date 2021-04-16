<template>
  <div>
    <v-navigation-drawer
      v-model="customizerIn"
      :width="450"
      fixed
      right
      app
      temporary
      class="clearfix"
    >
      <v-toolbar
        color="success"
        dark
      >
        <v-toolbar-title>App Custormizer</v-toolbar-title>
      </v-toolbar>
      <v-alert
        dense
        :style="{borderRadius: '0'}"
        type="info"
      >
        <span>아래 옵션을 조절해보세요.</span>
      </v-alert>
      <v-list class="mb-5 theme-layouts">

        <v-list-item-title>
          <h2 :style="{marginBottom: '20px'}">
            <span :style="{marginLeft: '10px'}">Theme</span>
          </h2>
        </v-list-item-title>
        <v-divider />
        <v-list-item>
          <v-list-item-content class="py-0">
            <v-checkbox
              v-model="custom.dark_theme"
              label="Dark Theme (일부 미적용)"
              color="primary"
              @click="toggleTheme"
            />
          </v-list-item-content>
        </v-list-item>

        <v-spacer style="margin-bottom: 50px" />

        <v-list-item-title>
          <h2 :style="{marginBottom: '20px'}">
            <span :style="{marginLeft: '10px'}">Layout</span>
          </h2>
        </v-list-item-title>
        <v-divider />

        <v-list-item>
          <v-list-item-content class="py-0">
            <v-checkbox
              v-model="sideLogo"
              label="Sidebar Logo"
              color="success"
            />
          </v-list-item-content>
        </v-list-item>

        <v-list-item>
          <v-list-item-content class="py-0">
            <v-checkbox
              v-model="clipped"
              label="Vertical Clipped"
              color="info"
            />
          </v-list-item-content>
        </v-list-item>

        <v-list-item>
          <v-list-item-content class="py-0">
            <v-checkbox
              v-model="fixedBreadCrumb"
              label="Fixed Breadcrumb"
              color="error"
            />
          </v-list-item-content>
        </v-list-item>

        <v-list-item>
          <v-list-item-content class="py-0">
            <v-checkbox
              v-model="custom.horizon"
              label="Horizontal Menu"
              color="error"
              @click="toggleHorizon"
            />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <div class="app-customizer">
      <a
        class="customizer-toggle primary v-step-4"
        href="javascript:;"
        @click="toggleCustomizer"
      >
        <v-icon
          dark
          class="v-align"
        >mdi-cog</v-icon>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      customizerIn: false,
      custom: {
        dark_theme: false
      }
    }
  },
  computed: {
    clipped: {
      get() {
        return this.$store.getters.clipped
      },
      set(val) {
        this.$store.commit('settings/CHANGE_SETTING',
          { key: 'sidebarClipped', value: val }
        )
      }
    },
    sideLogo: {
      get() {
        return this.$store.getters.sideLogo
      },
      set(val) {
        this.$store.commit('settings/CHANGE_SETTING',
          { key: 'sidebarLogo', value: val }
        )
      }
    },
    fixedBreadCrumb: {
      get() {
        return this.$store.getters.fixedBread
      },
      set(val) {
        this.$store.commit('settings/CHANGE_SETTING',
          { key: 'fixedBreadCrumb', value: val }
        )
      }
    },
    darkenTheme: {
      get() {
        return this.$store.getters.darkTheme
      },
      set(val) {
        this.$store.commit('settings/CHANGE_SETTING',
          { key: 'themeDark', value: val }
        )
      }
    }
  },
  methods: {
    toggleTheme() {
      const theme = this.custom.dark_theme
      if (theme) {
        this.$vuetify.theme.dark = true
      } else {
        this.$vuetify.theme.dark = false
      }
      this.$store.dispatch('settings/changeSetting',
        { key: 'themeDark', value: theme }
      )
    },
    toggleHorizon() {
      this.$store.dispatch('settings/changeSetting',
        { key: 'horizontal', value: this.custom.horizon }
      )
    },
    toggleCustomizer() {
      this.customizerIn = !this.customizerIn
    }
  }
}
</script>
