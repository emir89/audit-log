<template>
    <DropdownListWithCheckbox :data="{
        list: actionsData,
        type: 'actions'
    }"
    @allCheckboxSelected="emitAllActionsCheckboxSelected"
    @rowCheckboxSelected="emitRowActionsCheckboxSelected"
    />
</template>

<script>
    import {actions} from "../../dummyData";
    import DropdownListWithCheckbox from "../commonComponents/ListWithCheckbox";

    export default {
        name: "ActionsDropdownList",
        components: {
            DropdownListWithCheckbox
        },
        computed: {
            actionsData() {
                return actions;
            }
        },
        methods: {
            emitAllActionsCheckboxSelected({listType, data, isAllRowsSelected, isToggledWithRow}) {
                if (listType === "actions")
                    this.$emit('allCheckboxSelected', {
                        listType: "actions",
                        data,
                        isAllRowsSelected,
                        isToggledWithRow
                    });
            },
            emitRowActionsCheckboxSelected({listType, row}) {
                if (listType === "actions")
                    this.$emit('rowCheckboxSelected', {listType: "actions", row});
            }
        }
    }
</script>

<style scoped>

</style>