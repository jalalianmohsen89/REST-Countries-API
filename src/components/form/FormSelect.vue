<script setup lang="ts">
import {defineProps, ref} from 'vue'

const stringOptions = [
  'Africa', 'Americas', 'Asia', 'Europe', 'Oceania','All'
]

const options = ref(stringOptions)
defineProps<{
  modelValue: string
}>()

const emit = defineEmits(['update:modelValue'])
const changeOption = (event: string) => {
  emit('update:modelValue', event)
}
const filterFn = (val: string, update: any) => {
  if (val === '') {
    update(() => {
      options.value = stringOptions

      // here you have access to "ref" which
      // is the Vue reference of the QSelect
    })
    return
  }

  update(() => {
    const needle = val.toLowerCase()
    options.value = stringOptions.filter(v => v.toLowerCase().indexOf(needle) > -1)
  })
}
</script>
<template>
  <div class="flex justify-start justify-md-end q-px-md q-ml-sm q-pa-md-lg q-mt-md-sm">
    <div class="q-gutter-md">
      <q-select
        borderless
        :model-value="modelValue"
        class="select q-pl-md"
        :options="options"
        @filter="filterFn"
        @update:model-value="changeOption"
        style="width: 250px"
      >
        <template v-slot:no-option>
          <q-item>
            <q-item-section class="text-grey">
              No results
            </q-item-section>
          </q-item>
        </template>
      </q-select>
    </div>
  </div>
</template>

<style lang="scss">
body.body--dark {
  .select {
    background-color: #2b3743;
    box-shadow: 0 0 5px 0 $grey-10;

    * {
      background-color: unset !important;
    }
  }
}

body.body--light {
  .select {
    background-color: white;
    box-shadow: 0 0 5px 0 $grey-4;

    * {
      color: $grey-6;
      background-color: unset !important;
    }
  }
}
</style>
