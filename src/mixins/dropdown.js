export const dropdown = {
    methods: {
        dropdownArrowComponent(isDropdownOpened) {
            return this[isDropdownOpened] ? "IconArrowUp" : "IconArrowDown";
        }
    }
}