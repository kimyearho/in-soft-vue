<template>
  <page-container>
    <v-card>
      <v-data-table
        :headers="headers"
        :items="rowItems"
        :items-per-page="15"
        class="elevation-1"
      />
    </v-card>
  </page-container>
</template>

<script>
import { getList } from '@/api/table'

export default {
  name: 'Dashboard',
  data() {
    return {
      colHeight: '110px',
      headers: [
        {
          text: 'ID',
          value: 'id'
        },
        {
          text: 'Title',
          value: 'title'
        },
        {
          text: 'Name',
          value: 'author'
        },
        {
          text: 'Date',
          value: 'display_time'
        },
        {
          text: 'Nums',
          value: 'pageviews'
        }
      ],
      rowItems: []
    }
  },
  mounted() {
    getList().then(({ data }) => {
      if (data.total > 0) {
        this.rowItems = data.items
      }
    })
  },
  methods: {
    dynamicHeight(is) {
      if (is) {
        this.colHeight = '220px'
      } else {
        this.colHeight = '110px'
      }
    }
  }
}
</script>

<style scoped>
.dashboard-container {
  width: 100%;
}
</style>
