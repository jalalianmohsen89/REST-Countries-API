<script setup lang="ts">
import {defineProps} from 'vue'

defineProps<{
  modelValue: string
}>()

const emit = defineEmits(['update:modelValue'])
const changeText = (event: string) => {
  emit('update:modelValue', event)
}
</script>

<template>
  <div class="q-pa-lg q-mt-sm">
    <div class="q-gutter-y-md column">
      <q-toolbar class="search-box text-white rounded-borders">
        <q-input dark borderless :model-value="modelValue" input-class="text-left"
                 @update:model-value="changeText" style="width:100%;direction: rtl"
                 placeholder="...Search for a country">
          <template v-slot:append>
            <q-icon class="q-mr-md" v-if="modelValue === ''" name="search"/>
            <q-icon v-else name="clear" class="q-mr-md cursor-pointer" @click="$emit('update:modelValue','')"/>
          </template>
        </q-input>
      </q-toolbar>
    </div>
  </div>
</template>


<style lang="scss">
body.body--dark {
  background-color: #202d36;

  .search-box {
    background-color: #2b3743;
    box-shadow: 0 0 5px 0 $grey-10;
  }
}

body.body--light {
  .search-box {
    background-color: white;
    box-shadow: 0 0 5px 0 $grey-4;

    * {
      color: $grey-6;
    }
  }
}
</style>
