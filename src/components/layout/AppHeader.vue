<script setup lang="ts">
import { useQuasar } from 'quasar'
const $q = useQuasar()
const mode=$q.dark;
// calling here; equivalent to when component is created
mode.set(true)
</script>

<template>
<q-header class="q-pa-lg header">
 <div class="flex bi-align-center justify-between">
   <p class="text-weight-bold text-subtitle1 q-mb-none">Where in the world?</p>
   <div class="cursor-pointer" @click="mode.toggle">
     <q-icon v-if="!mode.isActive" color="black" size="2rem" name="wb_sunny" />
     <q-icon v-else size="2rem" name="brightness_3" />
     <span class="q-ml-md">{{mode.isActive?'Dark':'Light'}} Mode</span>
   </div>
 </div>
</q-header>
</template>

<style lang="scss">
body.body--dark{
  .header{
    background-color: #2b3743;
    box-shadow: 0 0 5px 0 $grey-10;
  }
}

body.body--light{
  .header{
    background-color: white;
    box-shadow: 0 0 5px 0 $grey-4;
    *{
      color: $dark;
    }
  }
}
</style>
