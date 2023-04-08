<script setup lang="ts">
import AppHeader from 'components/layout/AppHeader.vue';
</script>
<template>
  <q-layout view="lHh Lpr lFf">
    <app-header/>
    <q-page-container>
      <router-view/>
    </q-page-container>
  </q-layout>
</template>

