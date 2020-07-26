<template>
    <div class="filter-container">
        <div @click="toggleUserDropDown" class="select-container users-container">
            <input
                class="select-input users-input"
                placeholder="No users selected"
                :value="numberOfUsersSelectedRows"
                type="text"
                readonly
            />
            <img class="user-dropdown-arrow-icon" :src="userDropDownArrowSrc"  alt="Arrow Icon" />
            <div v-show="isUserDropDownOpened" class="user-select-dropdown" @click.stop>
                <UsersDropdownList
                    @allCheckboxSelected="handleAllCheckboxSelected"
                    @rowCheckboxSelected="handleRowCheckboxSelected"
                />
            </div>
        </div>
        <div
            @click="toggleActionDropDown"
            class="select-container actions-container"
            :class="{
                'disabled-actions-container': !selectedUsers.length,
                'enabled-actions-container': selectedUsers.length
            }"
        >
            <input
                class="select-input actions-input"
                :class="{
                'disabled-actions-input': !selectedUsers.length,
                'enabled-actions-input': selectedUsers.length
            }"
                placeholder="No actions selected"
                :value="numberOfActionsSelectedRows"
                type="text"
                readonly
            />
            <img
                v-if="selectedUsers.length"
                :src="actionDropDownArrowSrc"
                class="action-dropdown-arrow-icon"
                alt="Arrow Icon"
            />
            <div v-show="isActionDropDownOpened" class="action-select-dropdown" @click.stop>
                <ActionsDropdownList
                    @allCheckboxSelected="handleAllCheckboxSelected"
                    @rowCheckboxSelected="handleRowCheckboxSelected"
                />
            </div>
        </div>
        <div class="results-filter-container">
            <input
                v-model="resultsFilerSearch"
                class="results-filter-input"
                placeholder="Filter results..."
                type="text"
            />
            <img
                    v-if="resultsFilerSearch.length"
                    @click="clearResultsFilter"
                    class="user-dropdown-close-icon"
                    src="../../assets/icn-close.svg" alt="Close Icon"
            />
        </div>
        <button
            :class="{
            'disabled-search-button': !selectedUsers.length,
            'search-enabled': selectedUsers.length
        }"
            :disabled="!selectedUsers.length"
            class="search">
            Search Now
        </button>
    </div>
</template>

<script>
    import UsersDropdownList from "./UsersDropdownList";
    import ActionsDropdownList from "./ActionsDropdownList";

    export default {
        name: "AuditLogFilter",
        data: () => ({
            selectedUsers: [],
            selectedActions: [],
            resultsFilterText: null,
            isUserDropDownOpened: false,
            isActionDropDownOpened: false,
            isAllUsersSelected: false,
            isAllActionsSelected: false,
            resultsFilerSearch: '',
        }),
        components: {
            UsersDropdownList,
            ActionsDropdownList,
        },
        computed: {
            userDropDownArrowSrc() {
                return this.getDropDownArrowSrc(this.isUserDropDownOpened);
            },
            actionDropDownArrowSrc() {
                return this.getDropDownArrowSrc(this.isActionDropDownOpened);
            },
            numberOfUsersSelectedRows() {
                if (this.selectedUsers.length) {
                    return this.getNumberOfSelectedRows(
                        "selectedUsers",
                        this.isAllUsersSelected,
                        "users"
                    );
                }

                return null;
            },
            numberOfActionsSelectedRows() {
                if (this.selectedActions.length) {
                    return this.getNumberOfSelectedRows(
                        "selectedActions",
                        this.isAllActionsSelected,
                        "actions"
                    );
                }

                return null;
            }
        },
        watch: {
            // close actions dropdown if opened when users unselected
            numberOfUsersSelectedRows(newVal, oldVal) {
                if (!!oldVal && !newVal && this.isActionDropDownOpened) {
                    this.isActionDropDownOpened = false;
                }
            }
        },
        methods: {
            /**
             * Opens/Closes users filter list
             */
            toggleUserDropDown() {
                this.isUserDropDownOpened = !this.isUserDropDownOpened;
            },
            /**
             * Opens/Closes actions filter list
             *
             * @returns void
             */
            toggleActionDropDown() {
                if (!this.selectedUsers.length) return;
                this.isActionDropDownOpened = !this.isActionDropDownOpened;
            },
            /**
             * Gets dropdown icon source path
             */
            getDropDownArrowSrc(isMenuOpened) {
                const arrow = isMenuOpened ? "icn-arrow-up" : "icn-arrow-down";

                return require(`../../assets/${arrow}.svg`);
            },
            /**
             * Handles Select All checkboxes event
             *
             * @param listType
             * @param data
             * @param isAllRowsSelected
             * @param isToggledWithRow
             */
            handleAllCheckboxSelected({listType, data, isAllRowsSelected, isToggledWithRow}) {
                if (listType === "users") {
                    if (isToggledWithRow) {
                        this.isAllUsersSelected = isAllRowsSelected;
                    } else {
                        this.selectedUsers = isAllRowsSelected ? data : [];
                    }
                } else if (listType === "actions") {
                    if (isToggledWithRow) {
                        this.isAllActionsSelected = isAllRowsSelected;
                    } else {
                        this.selectedActions = isAllRowsSelected ? data : [];
                    }
                }
            },
            /**
             * Handles check row event
             *
             * @param listType
             * @param row
             * @param isAllSelected
             */
            handleRowCheckboxSelected({listType, row}) {
                if (listType === "users") {
                    this.handleSelectedRows(
                        "selectedUsers",
                        "isAllUsersSelected",
                        this.isAllUsersSelected,
                        row
                    );
                } else if (listType === "actions") {
                    this.handleSelectedRows(
                        "selectedActions",
                        "isAllActionsSelected",
                        this.isAllActionsSelected,
                        row
                    );
                }
            },
            /**
             * Handles selected rows
             *
             * @param selectedData
             * @param isAllSelectedType
             * @param isAllSelectedValue
             * @param row
             */
            handleSelectedRows(selectedData, isAllSelectedType, isAllSelectedValue, row) {
                if (this[selectedData].some(selectedRow => selectedRow.value === row.value && row.checked)  ||
                    this[selectedData].includes(row.value)) {
                    this.removeSelectedRow(this[selectedData], row)
                } else {
                    this[selectedData].push(row);
                }
                this[isAllSelectedType] = isAllSelectedValue;
            },
            /**
             * Gets number of selected rows
             *
             * @param selectedRowsType
             * @param isAllSelected
             * @param listType
             * @returns {string|*}
             */
            getNumberOfSelectedRows(selectedRowsType, isAllSelected, listType) {
                if (isAllSelected) {
                    return `All ${listType}`;
                }

                const numberOfSelectedRows = this[selectedRowsType].length;
                if (numberOfSelectedRows > 1) {
                    return `${numberOfSelectedRows} selected`;
                } else {
                    return this[selectedRowsType][0].value;
                }
            },
            /**
             * Removes selected row
             *
             * @param data
             * @param row
             * @returns {any[]}
             */
            removeSelectedRow(data, row) {
                const index = data.indexOf(row.value);
                return data.splice(index, 1);
            },
            /**
             * Clears search sting
             */
            clearResultsFilter() {
                this.resultsFilerSearch = '';
            }
        }
    }
</script>

<style scoped>
    .filter-container {
        background-color: #FFFFFF;
        min-height: 70px;
        border-bottom: 1px solid #CFCFCF;
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    .search {
        margin-left: 15px;
    }

    .select-container, .results-filter-container {
        margin-left: 20px;
        border: 1px solid #9B9B9B;
        border-radius: 4px;
        width: 263px;
        height: 38px;
        display: flex;
        flex-direction: row;
    }

    .search {
        background-color: #00A88D;
        border: 1px solid #00A88D;
        border-radius: 4px;
        width: 113px;
        height: 40px;
        color: #fff;
        font-size: 14px;
    }

    .search-enabled:hover {
        background-color: #00A88D;
        border: 1px solid #00A88D;
        color: #FFFFFF;
        cursor: pointer;
    }

    .search-enabled:hover {
        background-color: #67C8C7;
        cursor: pointer;
    }

    .select-input, .results-filter-input {
        width: 85%;
        margin-left: 10px;
        font-size: 14px;
        border: none;
    }

    .select-input {
        color: #3E4543;
    }

    .results-filter-input {
        color: #9B9B9B;
    }

    .select-input:focus, .results-filter-input:focus {
        outline: none;
    }

    .select-container:hover:not(.actions-container), .results-filter-container:hover {
        border: 1px solid #00A88D;
    }

    .users-container:hover,
    .users-input:hover,
    .results-filter-container:hover,
    .results-filter-input:hover {
        cursor: pointer;
    }

    .user-dropdown-arrow-icon {
        left: 603px;
    }

    .action-dropdown-arrow-icon {
        left: 885px;
    }

    .user-select-dropdown, .action-select-dropdown {
        position: absolute;
        margin-top: 50px;
        background-color: #FFFFFF;
        border: 1px solid #CFCFCF;
        border-radius: 4px;
        box-shadow: 0 3px 4px 0 rgba(0, 0, 0, 0.3);
        width: 263px;
        max-height: 335px;
        padding: 0;
    }

    .action-select-dropdown {
        width: 285px;
    }

    .disabled-actions-container, .disabled-actions-input {
        background-color: #F4F4F4;
    }

    .disabled-actions-container {
        border: 1px solid #CFCFCF;
    }

    .enabled-actions-container:hover {
        border: 1px solid #00A88D;
        cursor: pointer;
    }

    .enabled-actions-input:hover {
        cursor: pointer;
    }

    .disabled-actions-input {
        color: #9B9B9B;
    }

    .disabled-search-button {
        background-color: #CFCFCF;
        border: 1px solid #CFCFCF;
        color: #9B9B9B;
    }

    @media (min-width: 768px) and (max-width: 975px),
    (min-width: 768px) and (max-width: 1024px) and (orientation: landscape),
    (min-width: 975px) and (max-width: 1025px),
    (min-width: 1025px) and (max-width: 1410px) {
        .filter-container {
            flex-wrap: wrap;
        }

        .select-container, .results-filter-container {
            flex: 0 0 91%;
            margin: 20px 0 10px 20px;
        }

        .search {
            margin: 10px 0 20px 20px;
        }

        .user-select-dropdown, .action-select-dropdown {
            width: 410px;
        }

        .user-dropdown-arrow-icon,
        .action-dropdown-arrow-icon,
        .user-dropdown-close-icon {
            margin-left: 12px;
        }
    }

    @media (min-width: 975px) and (max-width: 1024px),
    (min-width: 975px) and (max-width: 1025px) and (orientation: landscape) {
        .filter-container {
            flex-wrap: wrap;
        }

        .select-container {
            flex: 0 0 46%;
        }

        .select-container:nth-child(2) {
            margin-left: 20px;
        }

        .results-filter-container {
            flex: 0 0 94%;
            padding-right: 3px;
        }

        .select-container, .results-filter-container {
            margin: 20px 0 10px 20px;
        }

        .select-container:nth-child(2) {
            margin-left: 15px;
        }

        .user-dropdown-arrow-icon,
        .action-dropdown-arrow-icon,
        .user-dropdown-close-icon {
            margin-right: 10px;
        }

        .user-select-dropdown, .action-select-dropdown {
            width: 320px;
        }

        .user-dropdown-close-icon {
            margin-left: 70px;
        }
    }

    @media (min-width: 1025px) and (max-width: 1410px) {
        .user-select-dropdown, .action-select-dropdown {
            width: 655px;
        }

        .filter-container {
            flex-wrap: wrap;
        }

        .select-container, .results-filter-container {
            flex: 0 0 94%;
            margin: 20px 0 10px 20px;
        }

        .user-dropdown-arrow-icon,
        .action-dropdown-arrow-icon,
        .user-dropdown-close-icon {
            margin-left: 55px;
        }
    }
</style>