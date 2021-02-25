<template>
  <div class="app-container">
    <v-container>
      <h1>Table</h1>
    </v-container>
  </div>
</template>

<script>
import { getList } from '@/api/table'

export default {
  filters: {
    statusFilter(status) {
      const statusMap = {
        published: 'success',
        draft: 'gray',
        deleted: 'danger'
      }
      return statusMap[status]
    }
  },
  data() {
    return {
      list: null,
      listLoading: true
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      this.listLoading = true
      getList().then(({ data }) => {
        this.list = data.items
        this.listLoading = false
      })
    }
  }
}
</script>
