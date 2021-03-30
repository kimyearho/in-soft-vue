<template>
  <div>
    <ag-grid-vue
      style="width: 100%; height: 700px;"
      class="ag-theme-alpine"
      :grid-options="gridOptions"
      :default-col-def="defaultColDef"
      :column-defs="columnDefs"
      :pagination="true"
      :pagination-page-size="15"
      :row-data="rowData"
    />
  </div>
</template>

<script>
import { AgGridVue } from 'ag-grid-vue'
import { getList } from '@/api/table'

export default {
  name: 'AgGrid',
  components: {
    AgGridVue
  },
  data() {
    return {
      defaultColDef: {
        resizable: true
      },
      gridColumnApi: null,
      gridOptions: null,
      gridApi: null,
      columnDefs: null,
      rowData: null
    }
  },
  beforeMount() {
    this.gridOptions = {}
    this.columnDefs = [
      { field: 'id', width: 100, sortable: true, filter: true },
      { field: 'title', width: 150, sortable: true, filter: true },
      { field: 'author', width: 80, sortable: true, filter: true },
      { field: 'display_time', width: 100, resizable: false },
      { field: 'pageviews', width: 100, resizable: false }
    ]
    this.getRowList()
  },
  mounted() {
    this.gridApi = this.gridOptions.api
    this.gridColumnApi = this.gridOptions.columnApi
    this.sizeToFit()
  },
  methods: {
    sizeToFit() {
      this.gridApi.sizeColumnsToFit()
    },
    autoSizeAll(skipHeader) {
      var allColumnIds = []
      this.gridColumnApi.getAllColumns().forEach(function(column) {
        allColumnIds.push(column.colId)
      })
      this.gridColumnApi.autoSizeColumns(allColumnIds, skipHeader)
    },
    getRowList() {
      getList().then(({ data }) => {
        if (data.total > 0) {
          this.rowData = data.items
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped></style>
