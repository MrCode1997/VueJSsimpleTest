<template>
    <div  :class="{ active : isActive , notification : true  , delete : isDelete  , insert : isInsert }" >
        {{ msg }}
    </div>
</template>
<script>
    export default {
        name : 'MiniNotification',
        props : [ 'isActive' , 'msg' , 'isInsert' , 'isDelete' ],
        data () {
            return {

            }
        },
        methods : {

        },
        created () {

        }
    }
</script>
<style>
    .notification {
        position: absolute;
        top : 40px;
        left: 47%;
        width: 100px;
        padding: 20px;
        color: white;
        font-weight: bold;
        background-color: lightcoral;
        border-radius: 5px;
        display: none;
    }
    .delete {
        background-color: lightcoral;
    }
    .insert {
        background-color: #42b983;
    }
    .active {
        display: block;
    }
</style>
