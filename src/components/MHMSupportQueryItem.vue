<template>

    <v-card>
        <v-card-item class="d-flex">
            <v-btn class="float-right" color="mhm-light-grey" size="sm" :icon="show ? 'mdi-chevron-up' : 'mdi-chevron-down'"
            @click="show = !show"></v-btn>
            <v-badge inline size="x-large" content="OPEN" color="success"></v-badge>
            <v-card-title>{{ subject }}</v-card-title>
            <v-card-subtitle>{{ residentname }} - {{ residentid }}</v-card-subtitle>
            <v-divider class="query-item-divider"></v-divider>
        </v-card-item>
        
        <v-expand-transition>
            <div v-show="show">
                <v-card-item>
                    <v-card-subtitle>Issue:</v-card-subtitle>
                    <v-avatar icon="mdi-account"></v-avatar>
                    <v-card-text>
                        I had a problem blah blah
                    </v-card-text>
                </v-card-item>
                <v-card-item>
                    <v-card-subtitle>Support Categories:</v-card-subtitle>
                    <MHMCategoryChip :categories="cats"/>
                </v-card-item>
                <v-card-actions>
                    <v-btn variant="plain">Action</v-btn>
                </v-card-actions>
            </div>
        </v-expand-transition>
    </v-card>

</template>

<script lang="ts">
import Category from '@/models/Categories';
import MHMCategoryChip from './MHMCategoryChip.vue';


export default {
    name:"MHMSupportQueryItem",
    props:{
        subject:String,
        residentname:String,
        residentid:String,

    },
    components:{
        MHMCategoryChip,
    },
    data() {
        return {
            cats:[
                new Category("Thing"),
                new Category("Other Thing")
            ],
            show:false,
        }
    }
    
}
</script>



<style>

.query-item-divider{
    margin-top: 1%;
}


</style>