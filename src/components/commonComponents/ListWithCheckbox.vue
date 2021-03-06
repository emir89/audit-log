<template>
    <div>
        <div v-if="isSearchable" class="list-search">
            <img class="list-search-icon" src="@/assets/iconsearch.svg" alt="Search Icon" />
            <span
                v-if="search.length"
                @click="clearSearch"
                class="list-search-close-icon">
                <IconBase>
                    <IconClose />
                </IconBase>
            </span>
            <input
                class="list-search-input"
                v-model="search"
                @keyup="searchUsers"
                placeholder="Search for a user..."
                type="text"
            />
        </div>
        <p v-if="search.length && (searchData && !searchData.length)" class="list-search-no-results-text">
            No Results Found
        </p>
        <div v-else class="list" :style="{maxHeight: dropdownMaxHeight, paddingBottom: dropdownPadding}">
            <div v-if="!search.length" @click="onSelectCheckAll"  class="list-row">
                <div :class="{'checkbox' : !selectedAll, 'checkbox-checked': selectedAll}" />
                <span class="row-value">Select All</span>
            </div>
            <div @click="onCheckRow(row)" class="list-row" v-for="row in (searchData || dataForList)" :key="row.value">
                <div :class="{'checkbox' : !row.checked, 'checkbox-checked': row.checked}" />
                <span class="row-value">{{row.value}}</span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "DropdownListWithCheckbox",
        props: {
            data: {
                type: Object,
                default: null,
                isRequired: true,
            },
            isSearchable: {
                type: Boolean,
                default: false,
                isRequired: false,
            }
        },
        data: () => ({
            selectedAll: false,
            dataForList: null,
            search: '',
            searchData: null,
        }),
        computed: {
            dropdownMaxHeight() {
                return this.isSearchable ? '275px' : '325px';
            },
            dropdownPadding() {
                return this.search.length ? '10px' : 0;
            }
        },
        watch: {
            // listen for changes in search text
            search(newVal, oldVal) {
                if (oldVal.length && !newVal.length) {
                    const searchedData = this.searchData && this.searchData.length ? this.searchData : null;
                    this.setListData(searchedData);
                    this.searchData = null;
                }
            },
            searchData(newVal, oldVal) {
                if (oldVal && oldVal.length && !newVal) {
                    this.dataForList = this.dataForList
                        .map(row => {
                            const existingInSearchData = oldVal.find(searchRow =>
                                searchRow.value.includes(row.value));
                            if (existingInSearchData) return existingInSearchData
                            return row;
                        });
                }
            },
            dataForList(newVal, oldVal) {
                // toggle select all with a row
                this.selectedAll = !!((!this.searchData || (this.searchData && !this.searchData.length))
                    && newVal && newVal.every(row => row.checked)
                    && !oldVal.every(row => row.checked));
                    this.$emit("allCheckboxSelected",
                        {
                            listType: this.data.type,
                            data: this.searchData || this.dataForList,
                            isAllRowsSelected: this.selectedAll,
                            isToggledWithRow: true
                    });
            },
        },
        mounted() {
            // set initial list data
            this.setListData();
        },
        methods: {
            /**
             * Sets list data
             *
             * @param searchedData
             * @return array
             */
            setListData(searchedData = null) {
                // set list from already existed list or from initial one
                const data = this.dataForList || this.data.list;
                this.dataForList = data.map(row => {
                    let valueToProcess;
                    if (searchedData) {
                        // if any searched data, set searched row state in list
                        const searchedRow = searchedData.find(r => r.value === row.value);
                        valueToProcess = searchedRow || row;
                    } else {
                        valueToProcess = row;
                    }
                   return {
                       value: valueToProcess.value || row,
                       checked: valueToProcess.checked || false
                   }
                });
            },
            /**
             * Handles Select All event
             */
            onSelectCheckAll() {
                this.dataForList = this.dataForList.map(row => ({
                    value: row.value,
                    checked: !this.selectedAll
                }));
                this.selectedAll = !this.selectedAll;
                this.$emit("allCheckboxSelected",
                    {
                        listType: this.data.type,
                        data: this.searchData || this.dataForList,
                        isAllRowsSelected: this.selectedAll,
                        isToggledWithRow: false
                    });
            },
            /**
             * Handles row check
             *
             * @param checkedRow
             */
            onCheckRow(checkedRow) {
                const data = this.searchData ? 'searchData' : 'dataForList';
                this[data] = this[data].map(row => {
                   if (checkedRow.value === row.value) {
                       return {
                           ...row,
                           checked: !row.checked
                       }
                   }
                   return row;
                });
                this.$emit("rowCheckboxSelected",
                    {listType: this.data.type, row: checkedRow});
            },
            /**
             * Searches list
             */
            searchUsers() {
                if (!this.search.length) {
                    this.setListData();
                    this.searchData = null;
                    return;
                }
                if (this.searchData && this.searchData.length) {
                    this.searchData = this.dataForList
                        .filter(row => row.value.includes(this.search.toLowerCase()))
                        .map(row => {
                            const existingInSearchData = this.searchData.find(searchRow =>
                                searchRow.value.includes(row.value));
                            if (existingInSearchData) return existingInSearchData
                            return row;
                        });
                } else {
                    this.searchData = this.dataForList
                        .filter(row => row.value.includes(this.search.toLowerCase()));
                }

            },
            /**
             * Clears search text
             */
            clearSearch() {
                this.search = '';
                if (this.searchData && this.searchData.length) {
                    this.dataForList = this.dataForList
                        .map(row => {
                            const existingInSearchData = this.searchData.find(searchRow =>
                                searchRow.value.includes(row.value));
                            if (existingInSearchData) return existingInSearchData
                            return row;
                        });
                }
                this.searchData = null;
            }
        },
    }
</script>

<style scoped>
.list {
    margin: 10px 0 0 8px;
    overflow: auto;
    font-size: 14px;
}

.list-row {
    display: flex;
    flex-direction: row;
    padding: 5px;
}

.row-value {
    margin-left: 10px;
}

.list-row:hover .row-value, .list-row:hover .checkbox {
    color: #00A88D;
    cursor: pointer;
}

.list-row:hover .checkbox {
    border: 1px solid #00A88D;
}

.checkbox, .checkbox-checked {
    border: 1px solid #9B9B9B;
    border-radius: 4px;
    width: 17px;
    height: 17px;
}

.checkbox-checked {
    background-color: #00A88D;
    background-image: url('../../assets/icn-checkmark.svg');
    background-position: center;
    background-repeat: no-repeat;
}

.list-search-icon {
    position: absolute;
    top: 22px;
    left: 20px;
}

.list-search-close-icon {
    position: absolute;
    top: 22px;
    left: 224px;
    cursor: pointer;
}

.list-search-close-icon:hover svg {
    fill: #00A88D;
}

.list-search {
    background-color: #F4F4F4;
    border-radius: 4px;
    border: 1px solid #F4F4F4;
    width: 238px;
    height: 38px;
    margin: 12px 0 0 11px;
}

.list-search-input {
    border: none;
    background-color: #F4F4F4;
    width: 173px;
    margin-top: 10px;
    color: #3E4543;
    font-size: 14px;
}

.list-search-input::placeholder {
    color: #C8C8C8;
}

.list-search-input:focus {
    outline: none;
}

.list-search-no-results-text {
    text-align: start;
    margin: 10px 0 0 12px;
    color: #9B9B9B;
    padding-bottom: 10px;
    font-size: 14px;
}

@media (min-width: 768px) and (max-width: 1024px) {
    .list-search {
        width: 383px;
        margin-left: 12px;
    }

    .list-search-input {
        width: 310px;
        margin: 10px 0 0 -10px;
    }

    .list-search-close-icon {
        left: 375px;
    }
}

@media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape),
(min-width: 975px) and (max-width: 1025px),
(min-width: 1025px) and (max-width: 1510px) {
    .list-search {
        width: 297px;
    }

    .list-search-input {
        width: 217px;
        margin: 10px 0 0 -10px;
    }

    .list-search-close-icon {
        left: 286px;
    }
}
</style>