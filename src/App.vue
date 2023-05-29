<template>
  <v-app>
    <v-main>
      <MHMTaskbar></MHMTaskbar>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script lang="ts">

// imports
import MHMTaskbar from './components/MHMTaskbar.vue';

export default {
  name: 'App',
  components:{
    MHMTaskbar,
  }
};
</script>
