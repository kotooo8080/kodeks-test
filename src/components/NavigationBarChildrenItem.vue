<template>
    <div
        class="navigation-bar-children-item"
        :class="{
            'navigation-bar-children-item--top': isTopLevel,
        }"
        @mouseenter="changeVisibility(true)"
        @mouseleave="changeVisibility(false)"
    >
        <component
            :is="component"
            v-bind="props"
            class="navigation-bar-children-item__link"
        >
            {{ item.name }}
        </component>

        <div
            v-if="item.children?.length && !isTopLevel"
            class="navigation-bar-children-item__arrow"
        ></div>

        <template v-if="item.children?.length">
            <navigation-bar-children
                v-show="isVisible"
                class="navigation-bar-children-item__children"
                :class="{
                    'navigation-bar-children-item__children--top': isTopLevel,
                }"
                :children="item.children"
                :index="index + 1"
                level="next"
            ></navigation-bar-children>
        </template>
    </div>
</template>

<script>
import { defineAsyncComponent } from 'vue'

export default {
    name: 'NavigationBarChildrenItem',

    components: {
        NavigationBarChildren: defineAsyncComponent(() => import('./NavigationBarChildren.vue')),
    },

    props: {
        item: {
            type: Object,
            required: true,
        },
        isTopLevel: {
            type: Boolean,
            default: false,
        },
        index: {
            type: Number,
            required: true,
        },
    },

    data() {
        return {
            isVisible: false,
        }
    },

    computed: {
        component() {
            const { item } = this;

            return item.target === "_blank" ? "a" : "router-link";
        },

        props() {
            const { item } = this;
            const isSideLink = item.target === "_blank";

            if (isSideLink) {
                return {
                    target: item.target,
                    href: item.lk,
                };
            } else {
                return {
                    to: item.lk,
                };
            }
        },
    },

    methods: {
        changeVisibility(status) {
            this.isVisible = status;
        },
    },
};
</script>

<style lang="scss" scoped>
    .navigation-bar-children-item {
        $this: &;

        position: relative;

        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;

        padding: 6px 20px;
            
        &--top {
            flex-direction: unset;
            justify-content: flex-start;
            
            width: 100%;
            height: 100%;
        }

        &__link {
            display: block;
            text-decoration: none;
            color: $text-color;

            &:visited {
                color: $text-color;
            }
        }

        #{$this} &__children {
            position: absolute;
            top: -21px;
            left: calc(100% - 3px);

            height: fit-content;
            padding-left: 6px;

            &--top {
                top: calc(70% - 1px);
                left: 20px;
                padding-left: 0;
            }
        }

        &__arrow {
            display: inline-block;
            margin-left: auto;
            margin-right: 0;

            width: 9px;
            height: 9px;

            border-top: 1px solid $text-color;
            border-right: 1px solid $text-color;

            transform: rotate(45deg);
        }
    }
</style>
