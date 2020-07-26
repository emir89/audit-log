<template>
    <div class="header-search-container">
        <img class="header-search-icon" src="@/assets/iconsearch.svg" alt="Search Icon" />
        <input
            class="header-search-input"
            type="text"
            placeholder="Search for a word or phrase"
            readonly
        />
    </div>
</template>

<script>
    export default {
        name: "HeaderSearch"
    }
</script>

<style scoped>
    .header-search-container {
        background-color: #F4F4F4;
        border: 1px solid #F4F4F4;
        border-radius: 4px;
        width: 515px;
        height: 38px;
        margin-left: 20px;
        display: flex;
        flex-direction: row;
    }

    .header-search-input {
        width: 480px;
        margin-left: 5px;
        background-color: #F4F4F4;
        border: none;
        font-size: 14px;
        color: #C8C8C8;
    }

    .header-search-input::placeholder {
        color: #C8C8C8;
    }

    .header-search-input:focus {
        outline: none;
    }

    .header-search-icon {
        margin-left: 10px;
    }

    @media (min-width: 768px) and (max-width: 1024px) {
        .header-search-container {
            width: 300px;
        }
    }

    @media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape),
    (min-width: 1025px) and (max-width: 1510px) {
        .header-search-container {
            width: 323px;
        }
    }
</style>