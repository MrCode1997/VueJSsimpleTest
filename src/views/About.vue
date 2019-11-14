<template>
  <div class="about">
    <MiniNotification :isActive="notifyit" :isDelete="true" :msg="'Deleted'" />
    <MiniNotification :isActive="notifyitI" :isInsert="true" :msg="'Inserted'" />
    <MiniNotification :isActive="notifyitU" :isInsert="true" :msg="'Updated'" />
    <h1>Test component</h1>
      <input type="text" v-model="newItem" @keyup.enter="insertNew" />
      <List :list="lista" @delete="deleteItem"  @update="initUpdate" />
  </div>
</template>

<script>

    import List from '@/components/List'
    import MiniNotification from "../components/MiniNotification";
    import ToDo from '@/modules/todo'

    export default {
        components : { List , MiniNotification },
        mixins : [ ToDo ],
        data () {
            return {
                lista : [
                    'Ciao',
                    'Saluti'
                ],
                newItem : null,
                updateItem : null,
                notifyit : false,
                notifyitI : false,
                notifyitU : false
            }
        },
        methods : {
            init () {
              console.log("Hello from component");
            },
            insertNew () {
              if ( this.updateItem !== null ) {
                this.update();
                return;
              }
              this.lista.push(this.newItem);
              this.newItem = null;
              this.notifyitI = true;
              setTimeout( () => {this.notifyitI = false } , 1500 );
            },
            deleteItem ( idx ) {
                this.lista.splice(idx , 1);
                this.notifyit = true;
                setTimeout( () => {this.notifyit = false } , 1500 );
            },
            initUpdate ( idx ) {
                this.newItem = this.lista[idx];
                this.updateItem = idx;
                console.log( "this.updateItem" , this.updateItem );
            },
            update () {
                this.$set( this.lista , this.updateItem , this.newItem );
                this.newItem = null;
                this.updateItem = null;
                this.notifyitU = true;
                setTimeout( () => {this.notifyitU = false } , 1500 );
            }
        },
        created () {

            this.init();
        }
    }
</script>

<style>
  input[type='text'] {
    padding: 10px;
  }
</style>
