<template>
    <div class="sidebar">
        <img class="logo" src="@/assets/logo.png" alt="Logo" />
        <SidebarMenu />
    </div>
</template>

<script>
    import SidebarMenu  from "./SidebarMenu";

    export default {
        name: "Sidebar",
        components: {
            SidebarMenu,
        },
    }
</script>

<style scoped>
    .sidebar {
        height: 100%;
        background-color: #E1E7E9;
        width: 250px;
    }

    .logo {
        margin: 20px 45px 0 20px
    }

    .menu {

    }
</style>