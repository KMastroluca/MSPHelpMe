
<script lang="ts">

import HMHAdminDashboard from '@/layouts/admin/HMHAdminDashboard.vue';

export default {
    name: "Dashboard",
    components:{
        HMHAdminDashboard,
    },
    data(){
        return{ // Logic To Determine If Admin or User Is Logged In
            isAdmin: true,
            isUser:false,
        }
    }
};
</script>

<template>
    
    <!-- Decide If We Are Rendering The Admin Dashboard, Or The User Dashboard -->
    <HMHAdminDashboard v-if="isAdmin" />

</template>
