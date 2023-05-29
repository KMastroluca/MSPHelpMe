
<template>
    <v-container>
        <v-row>
            <v-col class="v-col-12">
                <MHMSupportQueryItem />
            </v-col>
        </v-row>
    </v-container>
</template>

<script lang="ts">

import MHMSupportQueryItem from '../../components/MHMSupportQueryItem.vue'

export default {
    name: "HMHAdminDashboard",
    components:{
       MHMSupportQueryItem
    },
}
</script>