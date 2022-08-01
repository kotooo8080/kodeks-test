<template>
    <div class="navigation-bar-children">
        <div
            v-if="!isTopLevel && index === 1"
            class="navigation-bar-children__triangle"
        ></div>

        <ul
            class="navigation-bar-children__list"
            :class="{ 'navigation-bar-children__list--top': isTopLevel }"
        >
            <li 
                class="navigation-bar-children__item"
                :class="{ 'navigation-bar-children__item--top': isTopLevel }"
                
                v-for="(elem, indx) in children"
                :key="indx"
            >
                <navigation-bar-children-item
                    :item="elem"
                    :is-top-level="isTopLevel"
                    :index="index"
                ></navigation-bar-children-item>
            </li>
        </ul>
    </div>
</template>

<script>
import NavigationBarChildrenItem from './NavigationBarChildrenItem'

export default {
    name: 'NavigationBarChildren',

    components: {
        NavigationBarChildrenItem,
    },

    props: {
        children: Array,
        level: String,
        index: Number,
    },

    computed: {
        isTopLevel () {
            const { level } = this

            return level === 'top'
        },
    },
}
</script>

<style lang="scss" scoped>
    .navigation-bar-children {
        width: 100%;
        height: 100%;

        &__triangle {
            position: relative;
            top: 2px;
            left: 20px;

            width: 0;
            height: 0;
            border-left: 17px solid transparent;
            border-right: 17px solid transparent;
            border-bottom: 17px solid $bg-color;

            z-index: 6;

            &:before,
            &:after {
                content: '';
                width: 23px;
                display: block;
                position: absolute;
                top: 7px; 

                border-top: 1px solid $border-color;
                animation: fadeIn .2s ease-out;
            }

            &:before {
                left: -19.5px;
                transform: rotate(-45deg);
            }

            &:after {
                left: -4px;
                transform: rotate(45deg);
            }
        }

        &__list {
            min-width: 300px;
            margin: 0;
            padding: 20px 0;

            border: 1px solid $border-color;
            border-radius: 4px;

            list-style: none;
            z-index: 3;
            animation: fadeIn .2s ease-out;

            &--top {
                position: relative;
                
                display: flex;
                flex-direction: row;
                justify-content: flex-start;
                align-items: center;

                width: 100%;
                height: 100%;
                padding: 0;

                animation: unset;
                border: unset;
            }
        }

        &__item {
            display: block;

            height: 100%;

            &--top {
                margin-top: 0;
                padding: 0;
            }
        }

        @keyframes fadeIn {
            0% {
                display: none;
                opacity: 0;
            }

            1% {
                display: flex;
                opacity: 0;
            }

            100% {
                display: flex;
                opacity: 1;
            }
        }
    }
</style>