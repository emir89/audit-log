<template>
    <div class="container">
        <Sidebar />
        <section class="main-section">
            <Header />
            <AuditLogFilter />
            <AuditLogResults />
        </section>
    </div>
</template>

<script>
    import Sidebar from "./components/Sidebar";
    import Header from "./components/Header";
    import AuditLogFilter from "./components/AuditLogFilter";
    import AuditLogResults from "./components/AuditLogResults";

    export default {
        name: "Home",
        components: {
            Sidebar,
            Header,
            AuditLogFilter,
            AuditLogResults,
        }
    }
</script>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Open+Sans&display=swap');

    .container {
        width: 1440px;
        height: 1024px;
        background-color: #F4F4F4;
        margin: 0 auto;
        display: flex;
    }

    .main-section {
        width: 1190px;
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
    }

    @media (min-width: 768px) and (max-width: 975px),
    (min-width: 768px) and (max-width: 975px) and (orientation: landscape){
        .container {
            width: 700px;
        }

        .main-section {
            width: 450px;
        }
    }

    @media (min-width: 975px) and (max-width: 1024px),
    (min-width: 975px) and (max-width: 1024px) and (orientation: landscape),
    (min-width: 1025px) and (max-width: 1510px) {
        .container {
            width: 950px;
        }

        .main-section {
            width: 700px;
        }
    }

</style>