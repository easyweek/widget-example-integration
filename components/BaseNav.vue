<template>
    <div class="uk-navbar-container uk-navbar-transparent">
        <nav class="uk-navbar uk-container" uk-navbar>
            <div class="uk-navbar-left">
                <NLink to="/" class="uk-navbar-item uk-logo">
                    <BaseLogo />
                </NLink>
            </div>

            <div class="uk-navbar-right">
                <ol class="uk-navbar-nav">
                    <li
                        v-for="page in pages"
                        :key="page.id"
                        :class="{
                            'uk-active': hasChildren(page)
                                ? isActiveParent(page)
                                : isActive(page)
                        }"
                    >
                        <template v-if="hasChildren(page)">
                            <a href="">
                                {{ page.name }}
                            </a>
                            <div class="uk-navbar-dropdown">
                                <ol class="uk-nav uk-navbar-dropdown-nav">
                                    <li
                                        v-for="subpage in page.children"
                                        :key="page.id + '-' + subpage.id"
                                        :class="{
                                            'uk-active': isActive(subpage)
                                        }"
                                    >
                                        <NLink :to="subpage.href">
                                            {{ subpage.name }}
                                        </NLink>
                                    </li>
                                </ol>
                            </div>
                        </template>
                        <NLink v-else :to="page.href">
                            {{ page.name }}
                        </NLink>
                    </li>
                </ol>

                <slot name="right"></slot>
            </div>
        </nav>
    </div>
</template>

<script>
export default {
    name: 'BaseNav',

    computed: {
        pages() {
            return [
                {
                    name: 'Default',
                    id: 'default',
                    children: [
                        { name: 'Default', href: '/', id: 'default' },
                        { name: 'Left side', href: '/left', id: 'left' },
                        {
                            name: 'Without text',
                            href: '/no-text',
                            id: 'no-text'
                        },
                        {
                            name: 'Custom icon',
                            href: '/custom-icon',
                            id: 'custom-icon'
                        }
                    ]
                },
                {
                    name: 'Custom trigger',
                    id: 'trigger',
                    children: [
                        {
                            name: 'Additional button',
                            href: '/trigger',
                            id: 'trigger'
                        },
                        {
                            name: 'Without default button',
                            href: '/no-button',
                            id: 'no-button'
                        }
                    ]
                },
                {
                    name: 'Custom layout',
                    id: 'layout',
                    children: [
                        {
                            name: 'Built in',
                            href: '/built-in',
                            id: 'built-in'
                        },
                        {
                            name: 'Full page',
                            href: '/fullpage',
                            id: 'fullpage'
                        }
                    ]
                }
            ]
        },

        hasChildren() {
            return (page) => page.children && page.children.length
        },

        isActiveParent() {
            return (page) =>
                page.children.some(({ href }) => href === this.$route.path)
        },

        isActive() {
            return (page) => page.href === this.$route.path
        }
    }
}
</script>
