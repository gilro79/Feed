<template>
    <form @submit.prevent="filter">
        <input type="search" placeholder="Search.." v-model="filterBy">
        <button>Search</button>
    </form>
</template>

<script>
export default {
    name: "reviewFilter",

    data() {
        return {
            filterBy: ''
        }
    },
    methods: {
        filter() {
            this.$emit('filter', this.filterBy)
        }
    }
}
</script>