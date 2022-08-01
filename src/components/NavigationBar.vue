<template>
    <nav class="navigation-bar">
        <navigation-bar-children
            :children="menu"
            :index="0"
            level="top"
        />
    </nav>
</template>

<script>
import { menu } from './data'
import NavigationBarChildren from './NavigationBarChildren'

export default {
    name: 'NavigationBar',

    components: { NavigationBarChildren },

    data() {
        return {
            closeNavBar: false
        }
    },

    computed: {
		menu () {
			return menu
		},
	},
}
</script>

<style lang="scss" scoped>
    .navigation-bar {
        height: 100%;
        padding: 0 24px;
    }
</style>