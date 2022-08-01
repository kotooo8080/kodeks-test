<template>
    <header class="header-default">
        <navigation-bar/>
    </header>
</template>

<script>
import NavigationBar from './NavigationBar'

export default {
    name: 'HeaderDefault',

    components: { 
        NavigationBar,
    },
}
</script>

<style lang="scss" scoped>
    .header-default {
        height: 80px;
    }
</style>