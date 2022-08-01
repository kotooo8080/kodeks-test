<template>
    <main class="main-layout">
        <header-default />
        <div class="main-layout__main">
            <div class="main-layout__content">
                <slot></slot>
            </div>
        </div>
    </main>
</template>

<script>
import HeaderDefault from '@/components/HeaderDefault.vue'

export default {
    name: 'MainLayout',

    components: {
        HeaderDefault
    },
}
</script>

<style lang="scss" scoped>
   .main-layout {
        position: relative;

        display: flex;
        flex-direction: column;

        height: 100%;
        width: 100%;
        
        &__main {
            display: flex;
            flex-direction: row;
            justify-content: center;

            width: 100%;
        }
    }
</style>