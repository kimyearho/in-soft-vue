<template>
  <v-navigation-drawer
    app
    clipped
    :mini-variant="!isHide"
    :mini-variant-width="80"
  >
    <v-list>
      <template v-for="item in permissionRouters">
        <!-- //? 하위 메뉴가 포함된 대메뉴 -->
        <v-list-group
          v-if="!item.hidden && item.children"
          :key="item.path"
          :prepend-icon="item.meta ? item.meta.icon : ''"
        >
          <template v-slot:activator>
            <v-list-item-title>
              {{ item.meta.title }}
            </v-list-item-title>
          </template>
          <!-- //? 대메뉴에 포함된 하위메뉴 목록 그리기 -->
          <v-list-item
            v-for="(child, i) in item.children"
            :key="i"
            :style="{marginLeft: '56px'}"
            link
          >
            <!-- //? 하위 메뉴에도 아이콘을 사용하려면 이것을 사용 -->
            <!-- <v-list-item-action v-if="child.meta.icon">
              <v-icon>{{ child.meta.icon }}</v-icon>
            </v-list-item-action> -->
            <!-- //? -->
            <v-list-item-title @click="routerLink(item, child)">
              <!-- //? 라우터 링크는 실제 a태그로 변환된다. -->
              <router-link :to="item.path === '/' ? '/' + child.path : item.path +'/' + child.path">
                {{ child.meta.title }}
              </router-link>
            </v-list-item-title>
          </v-list-item>
        </v-list-group>
      </template>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Sidebar',
  props: {
    isHide: Boolean
  },
  data: () => ({
    drawer: null
  }),
  computed: {
    ...mapGetters(['permissionRouters'])
  },
  methods: {
    routerLink(item, child) {
      const to = item.path === '/' ? '/' + child.path : item.path + '/' + child.path
      this.$router.push(to)
    }
  }
}
</script>
