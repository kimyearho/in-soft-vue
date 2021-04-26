<template>
  <div>
    <search-filter :is-description-use="false" />
    <page-container>
      <ag-grid-table />
    </page-container>
  </div>
</template>

<script>
import { getList } from '@/api/table'

import SearchFilter from '@/views/example/searchFilter/index'
import AgGridTable from '@/views/table/AgGrid'

export default {
  name: 'Dashboard',
  components: {
    SearchFilter,
    AgGridTable
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
