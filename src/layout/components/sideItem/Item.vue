<template>
  <div>
    <!-- //* 권한 라우트 목록을 반복한다. -->
    <template v-for="item in permissionRouters">
      <!-- //* 대시보드는 그룹으로 묶어 줄 필요없다. -->
      <v-list-item
        v-if="item.prefix"
        :key="item.meta.title"
      >
        <v-list-item-icon :style="{marginLeft: '0px'}">
          <svg-icon
            class="is-active"
            icon-class="dashboard"
          />
        </v-list-item-icon>
        <router-link to="/">
          <v-list-item-title class="v-group-style">
            {{ item.meta.title }}
          </v-list-item-title>
        </router-link>
      </v-list-item>

      <!-- //* 조건에 부합하는 리스트 그룹을 생성한다. (1 depts) -->
      <v-list-group
        v-if="!item.hidden && item.children && !item.prefix"
        :key="item.path"
        class="v-list-custom"
      >
        <!-- //* 그룹 제목 -->
        <template v-slot:activator>
          <v-list-item-icon>
            <svg-icon :icon-class="item.meta ? item.meta.icon : ''" />
          </v-list-item-icon>
          <v-list-item-title class="v-group-style">
            {{ item.meta.title }}
          </v-list-item-title>
        </template>

        <!-- //? 그룹에 자식이 있을경우 반복한다. -->
        <template v-for="child in item.children">
          <!-- //? 자식내에 또다른 자식 객체가 없으면 (2 depts) -->
          <div
            v-if="!child.children"
            :key="child.path"
          >
            <v-list-item
              :style="{marginLeft: '66px'}"
              link
              @click="listItemLink('', item, child)"
            >
              <router-link
                :to="routerLink('', item, child)"
                :active-class="child.meta.activeClass"
                :style="{display: 'contents'}"
              >
                <v-list-item-icon>
                  <svg-icon
                    class="child-svg-icon"
                    icon-class="oval"
                  />
                </v-list-item-icon>
                <v-list-item-title>
                  {{ child.meta.title }}
                </v-list-item-title>
              </router-link>
            </v-list-item>
          </div>
          <!-- //? 자식내에 또다른 자식 객체가 있을경우 그룹을 생성한다. -->
          <v-list-group
            v-else
            :key="child.path"
            :style="{paddingLeft: '0px'}"
            sub-group
          >
            <template v-slot:activator>
              <v-list-item-title>
                {{ child.meta.title }}
              </v-list-item-title>
            </template>

            <!-- //? 그룹 하위 메뉴를 생성한다. (3 depts) -->
            <v-list-item
              v-for="(nestChild, i) in child.children"
              :key="i"
              :style="{marginLeft: '66px'}"
              @click="listItemLink(item, child, nestChild)"
            >
              <router-link
                :to="routerLink(item, child, nestChild)"
                :active-class="nestChild.meta.activeClass"
                :style="{display: 'contents'}"
              >
                <v-list-item-icon :style="{marginRight: '0'}">
                  <svg-icon
                    class="child-svg-icon"
                    icon-class="oval"
                  />
                </v-list-item-icon>
                <v-list-item-title>
                  {{ nestChild.meta.title }}
                </v-list-item-title>
              </router-link>
            </v-list-item>
          </v-list-group>
        </template>
      </v-list-group>
    </template>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data() {
    return {
      currentName: null
    }
  },
  computed: {
    ...mapGetters(['permissionRouters'])
  },
  watch: {
    $route(val) {
      this.currentName = val.name
    }
  },
  methods: {
    routerLink(root, item, child) {
      const to =
        item.path === '/' ? '/' + child.path : item.path + '/' + child.path
      if (root) {
        return root.path + '/' + to
      } else {
        return to
      }
    },
    listItemLink(root, item, child) {
      const path = this.routerLink(root, item, child)
      this.$router.push(path)
    }
  }
}
</script>
