<script setup lang="ts">
import {onMounted, ref} from 'vue';
import {api} from 'boot/axios';
import {useRoute} from 'vue-router';

const route = useRoute();
const queryParam = ref<string>(`alpha?codes=${route.params.id}`);
const country = ref<string>('');
const borderCountries = ref([])
// # methods
const getDate = async () => {
  try {
    country.value = (await api.get(queryParam.value)).data.filter((item: object) => item.cca3 === route.params.id)[0];
    if (country.value?.borders) {
      borderCountries.value = (await api.get(`alpha?codes=${country.value.borders.join(',')}`)).data.map((item: object) => {
        return {
          name: item.name.common,
          symbol: item.cca3
        }
      });
    }
  } catch (error) {
    console.log(error)
  }
}

const gotToPage = (val: string) => {
  window.open(`#/detail/${val}`, '_blank');
}

// # mounted
onMounted(async () => {
  await getDate();
})
</script>

<template>
  <div class="flex q-mx-xl q-my-xl">
    <q-btn class="q-btn" icon="west" label="Back" @click="$router.push({path:'/'})"/>
  </div>
  <div v-if="Object.keys(country).length>0" class="row q-mx-xl q-mb-xl justify-md-start">
    <figure class="col-12 col-md-5 col-lg-7 q-mx-none q-mb-xl q-mb-md-none">
      <q-img class="full-width" style="max-height: 600px" :src="country.flags.svg" :alt="country.flags.alt">
        <template v-slot:loading>
          <div class="text-yellow">
            <q-spinner-ios/>
            <div class="q-mt-md">Loading...</div>
          </div>
        </template>
      </q-img>
    </figure>
    <div class="col-12 col-md-6 col-lg-4 flex column justify-sm-center q-ml-md-xl">
      <div class="full-width flex column q-mb-xl q-mb-md-xl q-pb-md-none">
        <p class="text-h4"> {{ country.name.common }}</p>
        <div class="full-width flex column row-md justify-md-between">
          <div class="flex column">
            <div class="flex q-mb-sm">
              <span class="text-subtitle1 q-mr-md">Native Name :</span>
              <span class="text-subtitle1 text-grey-13">{{ Object.values(country.name.nativeName)[0].common }}</span>
            </div>
            <div class="flex q-mb-sm">
              <span class="text-subtitle1 q-mr-md">Population :</span>
              <span class="text-subtitle1 text-grey-13">{{ country.population.toLocaleString() }}</span>
            </div>
            <div class="flex q-mb-sm">
              <span class="text-subtitle1 q-mr-md">Region :</span>
              <span class="text-subtitle1 text-grey-13">{{ country.region }}</span>
            </div>
            <div class="flex q-mb-sm">
              <span class="text-subtitle1 q-mr-md">Sub Region :</span>
              <span class="text-subtitle1 text-grey-13">{{ country.subregion }}</span>
            </div>
            <div class="flex q-mb-sm">
              <span class="text-subtitle1 q-mr-md">Capital :</span>
              <span class="text-subtitle1 text-grey-13">{{ country.capital.join(',') }}</span>
            </div>
          </div>
          <div class="flex column">
            <div class="flex q-mb-sm">
              <span class="text-subtitle1 q-mr-md">Top Level Domain :</span>
              <span class="text-subtitle1 text-grey-13">{{ country.tld.join(' , ') }}</span>
            </div>
            <div class="flex q-mb-sm">
              <span class="text-subtitle1 q-mr-md">Currencies :</span>
              <span class="text-subtitle1 text-grey-13">{{ Object.values(country.currencies)[0].name }}</span>
            </div>
            <div class="flex q-mb-sm">
              <span class="text-subtitle1 q-mr-md">Languages :</span>
              <span class="text-subtitle1 text-grey-13">{{ Object.values(country.languages).join(' , ') }}</span>
            </div>
          </div>
        </div>
      </div>
      <div class="flex column row-md items-md-center">
        <p class="text-subtitle1 q-mb-md-none q-mr-md-md">Border Countries :</p>
        <div class="flex">
          <q-btn v-for="(item,index) in borderCountries" :key="index" class="q-btn q-mr-md" :label="item.name"
                 @click="gotToPage(item.symbol)"/>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
body.body--dark {
  background-color: #202d36;
}

body.screen--xs {
  .my-card {
    max-width: 85%;
    margin: 1rem auto;
  }
}

body.screen--sm {
  .my-card {
    max-width: 70%;
    margin: 1rem auto;
  }
}

body.screen--md {
  .my-card {
    max-width: 47%;
    margin: 1rem;
  }
}

body.screen--lg {
  .my-card {
    max-width: 30%;
  }
}

body.screen--xl {
  .my-card {
    max-width: 24%;
  }
}

</style>
