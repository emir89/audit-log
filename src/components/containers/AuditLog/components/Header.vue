<template>
    <div class="header-container">
        <HeaderSearch />
        <div class="user-menu" @click="toggleMenu">
            <div class="user-avatar" :class="{'user-avatar-menu-opened': isUserMenuOpened}">
                <span class="user-name" :class="{'user-name-menu-opened': isUserMenuOpened}">JD</span>
            </div>
            <span :class="{'user-menu-dropdown-opened': isUserMenuOpened}" class="user-menu-dropdown-arrow-icon">
                <IconBase>
                    <Component v-bind:is="dropdownArrowComponent('isUserMenuOpened')" />
                </IconBase>
            </span>
        </div>
        <UserMenu v-show="isUserMenuOpened" />
    </div>
</template>

<script>
    import UserMenu from "./UserMenu";
    import HeaderSearch from "./HeaderSearch";
    import {dropdown} from "../../../../mixins/dropdown";

    export default {
        name: "Header",
        components: {UserMenu, HeaderSearch},
        mixins: [dropdown],
        data: () => ({
            isUserMenuOpened: false,
        }),
        methods: {
            toggleMenu() {
                this.isUserMenuOpened = !this.isUserMenuOpened;
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
        margin-right: 18px;
        display: inline-flex;
        justify-content: center;
    }

    .user-menu:hover {
        cursor: pointer;
    }

    .user-avatar {
        background-color: #F4F4F4;
        border-radius: 100%;
        width: 32px;
        height: 32px;
        margin-right: 6px;
        display: flex;
        align-items: center;
    }

    .user-avatar-menu-opened, .user-avatar:hover {
        background-color: #CBEDE8;
    }

    .user-name-menu-opened, .user-avatar:hover .user-name {
        color: #0EAD94 !important;
    }

    .user-menu-dropdown-arrow-icon {
        margin-top: 7px;
    }

    .user-menu-dropdown-arrow-icon:hover svg {
        fill: #00A88D;
    }

    .user-name {
        text-align: center;
        color: #9B9B9B;
        font-size: 12px;
        width: 32px;
        font-weight: 700;
    }
</style>