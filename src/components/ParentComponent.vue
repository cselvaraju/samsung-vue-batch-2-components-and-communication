<template>
  <div id="parent">
      <h3>Parent Component</h3>
      <div>
          Favourite Dish: <input type="text" v-model="parentFavDish"> 
          <button @click="sendDataToChild">Send data to Child</button>
      </div>
      <div>
          Child component's favourite fruit is: {{ childFavFruit }}
      </div>
      <ChildComponent :favDish="dataForChild" @fav-fruit="onFavFruit($event)" />
  </div>
</template>

<script>
import ChildComponent from "./ChildComponent.vue";

export default {
    components: {
        ChildComponent
    },
    data() {
        return {
            parentFavDish: '',
            dataForChild: '',
            childFavFruit: ''
        }
    },
    methods: {
        sendDataToChild() {
            this.dataForChild = this.parentFavDish;
        },
        onFavFruit(event) {
            // console.log(event);
            this.childFavFruit = event;
        }
    }
}
</script>

<style>
    #parent {
        border: 2px solid blue;
        margin: 5px;
        padding: 5px;
    }
</style>