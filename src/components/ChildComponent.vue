<template>
  <div id="child">
      <h3>Child Component</h3>
      <p>
          Parent's favourite dish is: {{ favDish || 'No Data!!'}}
      </p>
      <p>
          Favourite fruit: <input type="text" v-model="favFruit"> 
          <button @click="sendDataToParent">Send data to Parent</button>
      </p>
  </div>
</template>

<script>
export default {
    props: [
        'favDish'
    ],
    data() {
        return {
            favFruit: ''
        }
    },
    methods: {
        sendDataToParent() {
            this.$emit('favFruit', this.favFruit);
        }
    }
}
</script>

<style>
    #child {
        border: 2px solid red;
        margin: 5px;
        padding: 5px;
    }
</style>