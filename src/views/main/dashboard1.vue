<template>
  <div class="dashboard-container">
    <v-container fluid>
      <search-filter />
      <v-card :style="{marginTop: '50px'}">
        <v-data-table
          :headers="headers"
          :items="rowItems"
          :items-per-page="15"
          class="elevation-1"
        />
      </v-card>
    </v-container>
  </div>
</template>

<script>
import { getList } from '@/api/table'

import SearchFilter from '@/views/example/searchFilter/index'

export default {
  name: 'Dashboard',
  components: {
    SearchFilter
  },
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
