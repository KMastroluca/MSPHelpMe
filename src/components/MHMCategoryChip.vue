<template>

    <v-chip-group
        selected-class="text-primary"
        column>
        <v-chip v-for="item in categories"
            :key="item.name">
            <v-avatar color="blue"><span class="text-h5">{{ item.initial.toLocaleUpperCase() }}</span></v-avatar>
            {{ item.name }}
        </v-chip>
    </v-chip-group>

</template>


<script lang="ts">

import Category from "../models/Categories"

export default {
    name:"MHMCategoryChip",
    props:{
        categories: Array<Category>,
    },
    
}
</script>