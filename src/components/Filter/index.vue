<template>
  <div class="filter-container">
    <v-form>
      <v-row :style="{margin: '10px'}">
        <v-col
          cols="12"
          md="3"
        >
          <v-text-field
            v-model="form.username"
            :counter="10"
            outlined
            dense
            label="First name"
          />
        </v-col>
        <v-col
          cols="12"
          md="3"
        >
          <v-text-field
            v-model="form.lastname"
            :counter="10"
            outlined
            dense
            label="Last name"
          />
        </v-col>
        <v-col
          cols="12"
          md="3"
        >
          <v-btn
            depressed
            color="primary"
          >
            SEARCH
          </v-btn>
        </v-col>
        <v-col
          cols="3"
          :style="styles.expand"
        >
          <v-switch
            v-model="isExpand"
            :label="isExpand ? 'Expand ON' : 'Expand OFF'"
            @change="expandFilter"
          />
        </v-col>
      </v-row>
      <v-row
        v-if="visible"
        :style="{margin: '10px'}"
      >
        <v-col
          cols="12"
          md="3"
        >
          <v-text-field
            v-model="form.id"
            :counter="10"
            outlined
            dense
            label="Form 1"
          />
        </v-col>
        <v-col
          cols="12"
          md="3"
        >
          <v-text-field
            v-model="form.desc"
            :counter="10"
            outlined
            dense
            label="From 2"
          />
        </v-col>
      </v-row>
    </v-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      visible: false,
      isExpand: false,
      form: {
        username: '',
        lastname: '',
        id: '',
        desc: ''
      },
      styles: {
        expand: {
          position: 'relative',
          top: '-10px'
        }
      }
    }
  },
  methods: {
    expandFilter() {
      this.isExpand = !!this.isExpand
      this.visible = !!this.isExpand
      this.$emit('dy-height', this.visible)
    }
  }
}
</script>

<style lang="scss" scoped></style>
