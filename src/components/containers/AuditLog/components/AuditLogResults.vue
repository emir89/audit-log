<template>
    <div class="results-container">
        <div class="no-results">
            <img class="no-results-icon" src="@/assets/img-audit-noresults.png" alt="No Results" />
            <div class="no-results-text">
                <p class="no-results-title">Nothing to Show</p>
                <p class="no-results-instruction-text">
                    To see audit logs, choose the filters and/or perform a search from the above menu.
                </p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "AuditLogResults"
    }
</script>

<style scoped>
    .results-container {
        display: flex;
        flex-direction: column;
    }

    .no-results {
        text-align: center;
    }

    .no-results-icon {
        margin-top: 200px;
    }

    .no-results-title {
        font-weight: 700;
        color: #3E4543;
        font-size: 16px;
        line-height: 24px;
    }

    .no-results-instruction-text {
        margin-top: -10px;
        font-weight: 400;
    }

    .no-results-text {
        color: #3E4543;
        font-size: 14px;
        line-height: 20px;
        width: 300px;
        margin: 0 auto;
    }
</style>