<template>
    <div class="about" >
        <ul>
            <li @click.ctrl.exact="elimina(idx)" @click.exact="$emit('update' , idx)" v-for="(item, idx) in list" :key="idx" >
                {{ item }}
            </li>
        </ul>
    </div>
</template>
<script>
    export default {
        name : 'List',
        props : {
            list : Array
        },
        data () {
            return {

            }
        },
        methods : {
            elimina ( idx ) {
                this.$emit( 'delete' , idx );
            }
        },
        created () {

        }
    }
</script>
<style scoped>
    ul > li {
        transition: all 0.3s;
        list-style: none;
    }
    ul > li:hover {
        color : lightcoral;
        cursor: pointer;
    }
</style>
