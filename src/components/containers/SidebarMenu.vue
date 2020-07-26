<template>
    <div class="menu-list">
        <img class="audit-log-dashboard-icon" src="../../assets/icondashboard.svg" alt="Menu Icon - Audit" />
        <span class="menu-list-item">Audit</span>
    </div>
</template>

<script>
    export default {
        name: "SidebarMenu"
    }
</script>

<style scoped>
    .menu-list {
        margin: 47px 212px 0 23px;
        display: flex;
        justify-content: start;
    }

    .menu-list-item {
        font-weight: 700;
        margin-left: 12px;
        color: #00A88D;
        font-size: 14px;
        line-height: 18px;
        width: 180px;
        text-align: left;
    }

    .audit-log-dashboard-icon {
        width: 15px;
        height: 18px;
    }
</style>