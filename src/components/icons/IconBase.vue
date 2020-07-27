<template>
    <svg xmlns="http://www.w3.org/2000/svg"
         :width="width"
         :height="height"
         viewBox="0 0 18 18"
         :aria-labelledby="iconName"
         :fill="iconColor"
    >
        <slot />
    </svg>
</template>
<script>
    export default {
        props: {
            iconName: {
                type: String,
                default: 'box',
                isRequired: false,
            },
            width: {
                type: [Number, String],
                default: 18,
                isRequired: false,
            },
            height: {
                type: [Number, String],
                default: 18,
                isRequired: false,
            },
            iconColor: {
                type: String,
                default: '#9B9B9B',
                isRequired: false,
            },
            shouldTransform: {
                type: Boolean,
                default: false,
                isRequired: false,
            }
        },
    }
</script>

<style scoped>

</style>