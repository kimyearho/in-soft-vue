<template>
  <v-card>
    <ag-grid-vue
      style="width: 100%; height: 700px; padding: 20px;"
      class="ag-theme-alpine"
      :class="{'ag-theme-alpine-dark' : darkTheme ? true : false}"
      :grid-options="gridOptions"
      :default-col-def="defaultColDef"
      :column-defs="columnDefs"
      :pagination="true"
      :pagination-page-size="14"
      :row-data="rowData"
      @grid-ready="onGridReady"
      @first-data-rendered="sizeToFit"
    />
  </v-card>
</template>

<script>
import { AgGridVue } from 'ag-grid-vue'
import { getList } from '@/api/table'
import { mapGetters } from 'vuex'

export default {
  name: 'AgGrid',
  components: {
    AgGridVue
  },
  data() {
    return {
      defaultColDef: {
        resizable: true,
        suppressHorizontalScroll: false
      },
      gridColumnApi: null,
      gridOptions: null,
      gridApi: null,
      columnDefs: null,
      rowData: null
    }
  },
  computed: {
    ...mapGetters(['darkTheme'])
  },
  beforeMount() {
    this.gridOptions = {}
    this.columnDefs = [
      { field: 'id', width: 80, sortable: true, filter: true },
      { field: 'title', width: 150, sortable: true, filter: true },
      { field: 'author', width: 80, sortable: true, filter: true },
      { field: 'display_time', width: 100, resizable: false },
      { field: 'pageviews', width: 50, resizable: false }
    ]
  },
  mounted() {
    this.gridApi = this.gridOptions.api
    this.gridColumnApi = this.gridOptions.columnApi
    // this.sizeToFit()
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
    onGridReady() {
      this.getRowList()
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

<style lang="scss" scoped>
.ag-body-viewport {
  overflow-x: hidden;
}
</style>
