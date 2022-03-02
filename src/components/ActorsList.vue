<template>
  <div class="container">
    <h3>List of Actors</h3>
    <ul>
        <li v-for="(actor, index) in actors" :key="index">
            Name: {{ actor.name }} 
            City: {{ actor.city }}
        </li>
    </ul>
  </div>
</template>

<script>
export default {
    props: [
        'actors'
    ],
  data() {
    return {
    };
  },
};
</script>

<style>
ul {
    text-align: left;
}
h3 {
    text-align: left;
}
</style>