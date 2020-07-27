<template>
    <div class="container">
        <Sidebar />
        <section class="main-section">
            <Header />
            <AuditLogFilter
                :usersData="usersData"
                :actionsData="actionsData"
            />
            <AuditLogResults />
        </section>
    </div>
</template>

<script>
    import Sidebar from "./components/Sidebar";
    import Header from "./components/Header";
    import AuditLogFilter from "./components/AuditLogFilter";
    import AuditLogResults from "./components/AuditLogResults";
    import {users} from '@/dummyData';
    import {actions} from "@/dummyData";

    export default {
        name: "Home",
        components: {
            Sidebar,
            Header,
            AuditLogFilter,
            AuditLogResults,
        },
        computed: {
            usersData() {
                return users.sort(function(a, b){
                    const userA = a;
                    const userB = b;
                    if(userA < userB) { return -1; }
                    if(userA > userB) { return 1; }
                    return 0;
                });
            },
            actionsData() {
                return actions;
            }
        },
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