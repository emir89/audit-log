<template>
    <ListWithCheckbox
        :data="{
            list: usersData,
            type: 'users'
        }"
        :isSearchable="true"
        @allCheckboxSelected="emitAllUsersCheckboxSelected"
        @rowCheckboxSelected="emitRowActionsCheckboxSelected"
    />
</template>

<script>
    import {users} from '../../../../dummyData';
    import ListWithCheckbox from "../../../commonComponents/ListWithCheckbox";

    export default {
        name: "UsersDropdownList",
        components: {
            ListWithCheckbox
        },
        data: () => ({
            search: null,
            data: users,
        }),
        computed: {
            usersData() {
                return users.sort(function(a, b){
                    const userA = a;
                    const userB = b;
                    if(userA < userB) { return -1; }
                    if(userA > userB) { return 1; }
                    return 0;
                });
            }
        },
        methods: {
            emitAllUsersCheckboxSelected({listType, data, isAllRowsSelected, isToggledWithRow}) {
                if (listType === "users")
                this.$emit('allCheckboxSelected', {
                    listType: "users",
                    data,
                    isAllRowsSelected,
                    isToggledWithRow
                })
            },
            emitRowActionsCheckboxSelected({listType, row}) {
                if (listType === "users")
                    this.$emit('rowCheckboxSelected', {listType: "users" , row})
            }
        }
    }
</script>

<style scoped>
    .user-dropdown-search-icon {
        position: absolute;
        top: 24px;
        left: 22px;
    }

    .user-select-search-input {
        background-color: #F4F4F4;
        border-radius: 4px;
        border: 1px solid #F4F4F4;
        width: 243px;
        height: 38px;
        margin-top: 12px;
    }
</style>