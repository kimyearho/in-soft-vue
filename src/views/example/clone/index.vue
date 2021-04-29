<template>
  <page-container>
    <v-row>
      <v-col :cols="12">
        <v-card>
          <v-card-title>Preview Clone Example</v-card-title>
          <v-card-subtitle>{{ $t('templateCopy.guide.subTitle') }}</v-card-subtitle>
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
            <p class="mt-10">
              ▶ {{ $t('templateCopy.guide.action') }}
            </p>
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
                    <td class="indigo--text darken-4 subtitle-2 text-left">
                      {{ item.name }}
                    </td>
                    <td class="light-green--text darken-2 subtitle-2 text-left">
                      {{ item.type }}
                    </td>
                    <td class="purple--text darken-4 subtitle-2">
                      {{ item.default }}
                    </td>
                    <td class="subtitle-2 text-left">{{ item.description }}</td>
                  </tr>
                </tbody>
              </template>
            </v-simple-table>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </page-container>
</template>

<script>
import CloneTemplate from '@/components/Clone/index'

export default {
  name: 'Clone',
  components: {
    appCloneTemplate: CloneTemplate
  },
  data: (vm) => ({
    propsList: [
      {
        name: 'maxTemplateCount',
        type: 'Number',
        default: '2',
        description: vm.$t('templateCopy.props.maxTemplateCount')
      }
    ]
  }),
  methods: {}
}
</script>
