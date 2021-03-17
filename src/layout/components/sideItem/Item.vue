<template>
  <div>
    <!-- //* 권한 라우트 목록을 반복한다. -->
    <template v-for="item in permissionRouters">
      <!-- //* 조건에 부합하는 리스트 그룹을 생성한다. (1 depts) -->
      <v-list-group
        v-if="!item.hidden && item.children"
        :key="item.path"
        :prepend-icon="item.meta ? item.meta.icon : ''"
        no-action
        class="v-list-custom"
      >
        <!-- //* 그룹 제목 -->
        <template v-slot:activator>
          <v-list-item-title>
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
              :style="{marginLeft: '56px'}"
              link
              @click="routerLink('', item, child)"
            >
              <v-list-item-title> {{ child.meta.title }}</v-list-item-title>
            </v-list-item>
          </div>
          <!-- //? 자식내에 또다른 자식 객체가 있을경우 그룹을 생성한다. -->
          <v-list-group
            v-else
            :key="child.path"
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
              :style="{marginLeft: '56px'}"
              @click="routerLink(item, child, nestChild)"
            >
              <v-list-item-title>
                {{ nestChild.meta.title }}
              </v-list-item-title>
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
  computed: {
    ...mapGetters(['permissionRouters'])
  },
  methods: {
    routerLink(root, item, child) {
      const to =
        item.path === '/' ? '/' + child.path : item.path + '/' + child.path
      if (root) {
        this.$router.push(root.path + '/' + to)
      } else {
        this.$router.push(to)
      }
    }
  }
}
</script>
