<script setup lang="ts">
import Search from 'components/form/FormSearch.vue';
import FormSelect from 'components/form/FormSelect.vue';
import {onMounted, ref, watch} from 'vue';
import {api} from 'boot/axios'
import _ from 'lodash'
// import {useCountries} from "stores/countries";
import {useRoute, useRouter} from "vue-router";


// # variables
const country = ref<string>('')
const region = ref<string>('Filter By region')
const list = ref<object[]>([]);
const countriesList = ref<object[]>([]);
const queryParam = ref<string>('all?fields=name,capital,region,population,flags,cca3')
// const store = useCountries()
const router = useRouter();
const route = useRoute()

// # watch
watch(region, (region) => {
  if (region === 'All') {
    countriesList.value = list.value;
  } else
    countriesList.value = list.value.filter((item) => item.region === region);
  router.push({path: '/', query: {...route.query, region: region}})
})

watch(country, (val) => {
  if (val) {
    countriesList.value = match(val);
  } else {
    if (region.value !== 'Filter By region' && region.value !== 'All') {
      countriesList.value = list.value.filter((item) => item.region === region.value)
    } else countriesList.value = list.value
  }
  router.push({path: '/', query: {...route.query, search: val}})
})

// # methods
const getDate = async () => {
  try {
    list.value = countriesList.value = (_.orderBy((await api.get(queryParam.value)).data, 'population', 'desc')).filter((item: any, index: any) => {
      // if (index < 20)
        return item
    });
    // store.setCountries(list.value)
  } catch (error) {
    console.log(error)
  }
}

const match = (search: string) => {
  const wordList = Array.from(search.toLowerCase()).reduce((a, v, i) => `${a}[^${search.substr(i).toLowerCase()}]*?${v}`, '');
  const re = RegExp(wordList, 'i');
  return countriesList.value.filter(item => item.name.common.toLowerCase().includes(search)||item.name.common.toLowerCase().match(re) )
}
// # mounted
onMounted(async () => {
  await getDate();
})
</script>

<template>
  <div class="row justify-between q-mb-xl">
    <div class="col-12 col-md-6">
      <Search v-model="country"/>
    </div>
    <div class="col-12 col-md-4">
      <FormSelect v-model="region"/>
    </div>
  </div>
  <div class="q-pa-md row items-start q-gutter-md">
    <q-card v-for="(item,index) in countriesList" :key="index" class="my-card cursor-pointer"
            @click="$router.push({path:`detail/${item.cca3}`})">
      <q-img class="full-width" style="height: 250px" :src="item.flags.svg" :alt="item.flags.alt"/>

      <q-card-section class="">
        <div class="text-h6 q-mb-lg">{{ item.name.common }}</div>
        <div class="flex column q-mb-xl">
          <div class="flex q-mb-sm">
            <div class="text-subtitle2 q-mr-sm">Population:</div>
            <div class="text-subtitle2 text-grey-13">{{ item.population.toLocaleString() }}</div>
          </div>
          <div class="flex q-mb-sm">
            <div class="text-subtitle2 q-mr-sm">Region:</div>
            <div class="text-subtitle2 text-grey-13">{{ item.region }}</div>
          </div>
          <div class="flex">
            <div class="text-subtitle2 q-mr-sm">Capital:</div>
            <div class="text-subtitle2 text-grey-13">{{ item.capital[0] }}</div>
          </div>
        </div>
      </q-card-section>
    </q-card>
  </div>
</template>

<style lang="scss">
body.body--dark {
  background-color: #202d36;

  .my-card {
    background-color: #2b3743;
    box-shadow: 0 0 5px 0 $grey-10;
  }
}

body.screen--xs {
  .my-card {
    width: 85%;
    margin: 1rem auto;
  }
}

body.screen--sm {
  .my-card {
    width: 70%;
    margin: 1rem auto;
  }
}

body.screen--md {
  .my-card {
    width: 47%;
    margin: 1rem;
  }
}

body.screen--lg {
  .my-card {
    width: 30%;
  }
}

body.screen--xl {
  .my-card {
    width: 24%;
  }
}

</style>
