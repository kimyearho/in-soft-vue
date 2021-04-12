<template>
  <div class="horizontal-menu">
    <ul class="list-unstyled nav pl-0">
      <!-- //* 권한별 라우트 목록 -->
      <template v-for="item in permissionRouters">
        <!-- //* 대시보드는 그룹으로 묶어 줄 필요없다. -->
        <li
          v-if="item.prefix"
          :key="item.meta.title"
          class="nav-item"
        >
          <router-link to="/">
            <svg-icon
              class="is-active"
              icon-class="dashboard"
            />
            <span class="prefix-dashboard">{{ item.meta.title }}</span>
          </router-link>
        </li>
        <!-- //* 대메뉴 -->
        <li
          v-if="!item.hidden && item.children && !item.prefix"
          :key="item.path"
          class="sub-menu"
        >
          <a
            class="nav-link"
            active-class="active"
          >
            <svg-icon :icon-class="item.meta ? item.meta.icon : ''" />
            <span class="menu-title">{{ item.meta.title }}</span>
          </a>
          <!-- //* 대메뉴 하위 조건에 부합하는 리스트 그룹을 생성한다. (1 depts) -->
          <ul
            v-if="item.children"
            class="sub-menu"
          >
            <template v-for="child in item.children">
              <!-- //* 하위 메뉴 -->
              <div
                v-if="!child.children"
                :key="child.path"
              >
                <li class="nav-item">
                  <router-link
                    :to="routerLink('', item, child)"
                    class="nav-link"
                    active-class="active"
                  >
                    {{ child.meta.title }}
                  </router-link>
                </li>
              </div>
              <!-- //* 하위 메뉴에 자식이 있을경우 -->
              <div
                v-else
                :key="child.path"
                class="nest-child"
              >
                <li class="nav-item">
                  <a>{{ child.meta.title }}</a>
                  <ul
                    class="sub-menu-child"
                  >
                    <li
                      v-for="(nestChild, i) in child.children"
                      :key="i"
                    >
                      <router-link
                        :to="routerLink(item, child, nestChild)"
                        class="nav-link"
                        active-class="active"
                      >
                        {{ nestChild.meta.title }}
                      </router-link>
                    </li>
                  </ul>
                </li>
              </div>
            </template>
          </ul>
        </li>
      </template>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Horizonbar',
  data: () => ({}),
  computed: {
    ...mapGetters(['permissionRouters'])
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
    }
  }
}
</script>
