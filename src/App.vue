<template>
	<component :is="layout">
		<router-view />
	</component>
</template>

<script>
import { defineAsyncComponent } from 'vue'

export default {
	name: 'App',

	components: {
		MainLayout: defineAsyncComponent(() => import('@/layouts/MainLayout.vue')),
	},

	computed: {
		layout () {
			return this.$route.meta.layout
		},
	},
}
</script>
