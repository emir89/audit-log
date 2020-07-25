<template>
    <div class="header-container">
        <HeaderSearch />
        <div class="user-menu" @click="toggleMenu">
            <div class="user-avatar" :class="{'user-avatar-menu-opened': isUserMenuOpened}">
                <span class="avatar-name" :class="{'avatar-name-menu-opened': isUserMenuOpened}">JD</span>
            </div>
            <img :src="menuArrowSrc" alt="Icon Down" />
        </div>
        <UserMenu v-show="isUserMenuOpened" />
    </div>
</template>

<script>
    import UserMenu from "./UserMenu";
    import HeaderSearch from "./HeaderSearch";

    export default {
        name: "Header",
        components: {UserMenu, HeaderSearch},
        data: () => ({
            isUserMenuOpened: false,
        }),
        computed: {
          menuArrowSrc() {
              const arrow = this.isUserMenuOpened ? "icn-arrow-up" : "icn-arrow-down";

              return require(`../../assets/${arrow}.svg`);
          }
        },
        mounted() {},
        updated() {},
        methods: {
            toggleMenu() {
                this.isUserMenuOpened = !this.isUserMenuOpened;
            },
            clearSearch() {
                this.searchText = '';
            }
        }
    }
</script>

<style scoped>
    .header-container {
        background-color: #FFFFFF;
        height: 60px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom: 1px solid #CFCFCF;
    }

    .user-menu{
        margin-right: 20px;
        display: inline-flex;
        justify-content: center
    }

    .user-menu:hover {
        cursor: pointer;
    }

    .user-avatar {
        background-color: #F4F4F4;
        border-radius: 100%;
        width: 32px;
        height: 32px;
        margin-right: 10px;
        display: flex;
        align-content: center;
        align-items: center;
    }

    .user-avatar-menu-opened {
        background-color: #CBEDE8;
    }

    .avatar-name-menu-opened {
        color: #0EAD94 !important;
    }

    .avatar-name {
        text-align: center;
        color: #9B9B9B;
        font-size: 12px;
        width: 32px;
        font-weight: 700;
    }
</style>