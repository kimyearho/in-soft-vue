<template>
  <div class="dashboard-container">
    <v-container>
      <h1>Dashboard</h1>
      <v-card :style="{marginTop: '50px'}">
        <v-row>
          <v-col
            cols="12"
            :style="{height: colHeight}"
          >
            <search-filter @dy-height="dynamicHeight" />
          </v-col>
        </v-row>
      </v-card>
      <v-card :style="{marginTop: '50px'}">
        <v-data-table
          :headers="headers"
          :items="rowItems"
          :items-per-page="10"
          class="elevation-1"
        />
      </v-card>
    </v-container>
  </div>
</template>

<script>
import SearchFilter from '@/components/Filter'
import { getList } from '@/api/table'

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
