<template>

    <v-card>
        <v-card-item >
            <v-row>
                <v-col>
                    <v-card-title>{{ subject }}Subject
                        <v-badge inline size="x-large" content="OPEN" color="success"></v-badge>
                    </v-card-title>
                    <v-card-subtitle>{{ residentname }} | MDOC: #{{ residentid }} | Building: | Pod: </v-card-subtitle>
                </v-col>
                <v-col>
                    <v-btn class="float-right" color="mhm-light-grey" size="48" :icon="show ? 'mdi-chevron-up' : 'mdi-chevron-down'"
                    @click="show = !show"></v-btn>
                </v-col>
            </v-row>
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
import Resident from '@/models/Resident';

export default {
    name:"MHMSupportQueryItem",
    props:{
        subject:String,
        resident:Resident,

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