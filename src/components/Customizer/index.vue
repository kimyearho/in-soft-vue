<template>
  <div>
    <v-navigation-drawer
      v-model="customizerIn"
      fixed
      :width="300"
      right
      app
      temporary
      class="clearfix"
    >
      <v-toolbar
        color="primary"
        dark
      >
        <v-toolbar-title>App Custormizer</v-toolbar-title>
      </v-toolbar>
      <v-list class="mb-5 theme-layouts">
        <v-list-item>
          <v-list-item-content class="py-0">
            <v-checkbox
              v-model="custom.dark_theme"
              label="Dark Theme"
              color="primary"
              @click="toggleTheme"
            />
          </v-list-item-content>
        </v-list-item>

        <v-list-item>
          <v-list-item-content class="py-0">
            <v-checkbox
              v-model="sideLogo"
              label="Sidebar Logo"
              color="success"
              @click="toggleSideLogo"
            />
          </v-list-item-content>
        </v-list-item>

        <v-list-item>
          <v-list-item-content class="py-0">
            <v-checkbox
              v-model="clipped"
              label="Vertical Clipped"
              color="success"
              @click="toggleClipped"
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
        dark_theme: false,
        clipped: false,
        horizon: false
      }
    }
  },
  computed: {
    clipped: {
      get() {
        return this.$store.getters.clipped
      },
      set(val) {
        this.$store.commit('app/TOGGLE_CLIPPED', val)
      }
    },
    sideLogo: {
      get() {
        return this.$store.getters.sideLogo
      },
      set(val) {
        this.$store.commit('settings/SIDE_LOGO', val)
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
    },
    toggleSideLogo() {
      this.$store.dispatch('settings/toggleSideLogo', this.sideLogo)
    },
    toggleClipped() {
      this.$store.dispatch('app/toggleClipped', this.clipped)
    },
    toggleHorizon() {
      this.$store.dispatch('app/toggleHorizonMenu', this.custom.horizon)
    },
    toggleCustomizer() {
      this.customizerIn = !this.customizerIn
    }
  }
}
</script>

<style lang="scss" scoped>
.app-customizer {
  right: 0;
  bottom: 0;
  position: fixed;
  transition: right 0.4s cubic-bezier(0.05, 0.74, 0.2, 0.99) 0s;
  top: 72px;
}
.customizer-toggle {
  border: medium none;
  cursor: pointer;
  height: 45px;
  left: -45px;
  line-height: 48px;
  position: absolute;
  text-align: center;
  top: 25%;
  width: 45px;
  text-decoration: none;
}
.v-align {
  padding-bottom: 5px;
}
.spin-icon {
  -webkit-animation: spin-icon 2s infinite linear;
  animation: spin-icon 2s infinite linear;
}
.input-group.input-group--selection-controls.switch {
  .input-group--selection-controls__toggle {
    left: 5px;
  }
  .input-group--selection-controls__ripple::after {
    left: 60%;
  }
}
@media (max-width: 1660px) {
  .app-customizer {
    z-index: 9999999999 !important;
  }
}
@media (max-width: 768px) {
  .app-customizer {
    display: none !important;
  }
}
</style>
