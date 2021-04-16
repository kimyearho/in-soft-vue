<template>
  <div class="form-wrapper">
    <v-container fluid>
      <v-row>
        <v-col :cols="12">
          <v-card>
            <v-card-title>Preview Clone Example</v-card-title>
            <v-card-subtitle>TextField 템플릿을 복제하는 컴포넌트 입니다.</v-card-subtitle>
            <v-card-text class="mt-2">
              <p class="mt-2">
                <strong>
                  <span>Source</span> <br>
                  <v-divider />
                  <div :style="{marginTop: '10px'}">
                    > src/components/Clone/index.vue <br>
                    > src/views/example/clone/index.vue
                  </div>
                </strong>
              </p>
              <p class="mt-10">▶ 추가 버튼을 클릭하여 템플릿을 복사할 수 있습니다.</p>
              <app-clone-template :max-template-count="2" />
            </v-card-text>
          </v-card>

          <v-card class="mt-10">
            <v-card-title class="subtitle-1 text-h4">
              Props
            </v-card-title>
            <v-card-text class="mt-2">
              <v-simple-table class="mt-3">
                <template v-slot:default>
                  <thead>
                    <tr>
                      <th class="text-left subtitle-1">
                        Name
                      </th>
                      <th class="text-left subtitle-1">
                        Type
                      </th>
                      <th class="text-left subtitle-1">
                        Default
                      </th>
                      <th class="text-left subtitle-1">
                        Description
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr
                      v-for="item in propsList"
                      :key="item.name"
                    >
                      <td class="indigo--text darken-4 subtitle-2 text-left">{{ item.name }}</td>
                      <td class="light-green--text darken-2 subtitle-2 text-left">{{ item.type }}</td>
                      <td class="purple--text darken-4 subtitle-2">{{ item.default }}</td>
                      <td class="subtitle-2 text-left">{{ item.description }}</td>
                    </tr>
                  </tbody>
                </template>
              </v-simple-table>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import CloneTemplate from '@/components/Clone/index'

export default {
  name: 'Clone',
  components: {
    appCloneTemplate: CloneTemplate
  },
  data: () => ({
    propsList: [
      {
        name: 'maxTemplateCount',
        type: 'Number',
        default: '2',
        description: '복제할 템플릿의 최대 개수 입니다. (기본 2개 / 최대 10개)'
      }
    ]
  }),
  methods: {}
}
</script>
