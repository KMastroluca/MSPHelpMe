<template>

    <v-card>
        <v-card-item >
            <v-row>
                <v-col>
                    <v-card-title>{{ subject }}Subject
                        <v-badge inline size="x-large" content="SUCCESS" color="success"></v-badge>
                        <v-badge inline size="x-large" content="ERROR" color="error"></v-badge>
                        <v-badge inline size="x-large" content="INFO" color="info"></v-badge>
                        <v-badge inline size="x-large" content="WARNING" color="warning"></v-badge>
                    </v-card-title>
                    <v-card-subtitle class="resident-label-bk">
                        <div class="resident-label">
                            {{ resident?.firstname + " " + resident?.lastname }} | MDOC: #{{ resident?.mdoc }} | Building: {{ resident?.building }} | Pod: {{ resident?.pod }} 
                        </div>
                    </v-card-subtitle>
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

                <v-btn variant="plain">Plain</v-btn>
                <v-btn variant="outlined" color="primary">Outlined - Primary</v-btn>
                <v-btn variant="flat" color="secondary">Flat - Secondary</v-btn>

                
                <v-btn variant="elevated" color="primary-darken-1">Elevated - Primary Darken</v-btn>
                <v-btn variant="tonal" color="secondary-darken-1">Tonal - Secondary Darken</v-btn>
                
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
                new Category("IT"),
                new Category("Education")
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

.resident-label-bk{
    display: inline-block;
    background-color:grey;
    width:fit-content;
    border-radius: 5px 5px 5px 5px
}

.resident-label {
    display:inline-flex;
    padding-left: 5px;
    padding-right:5px;
}


</style>