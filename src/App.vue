<template>
  <div class="container">
    <h1>Component Demo</h1>
    <!-- <ActorsList :actors="actorsList" /> -->
    <ActorsTable :actors="actorsList" @delete-actor="deletActor($event)" @save-actor="saveActor($event)" />
    <AddActorComponent @add-actor="addActor($event)" />
    <ParentComponent />
  </div>
</template>

<script>
// import ActorsList from "./components/ActorsList.vue";
import ActorsTable from "./components/ActorsTable.vue";
import ParentComponent from "./components/ParentComponent.vue";
import AddActorComponent from "./components/AddActorComponent.vue";

export default {
  components: {
    // ActorsList,
    ActorsTable,
    ParentComponent,
    AddActorComponent,
  },

  data() {
    return {
      actorsList: [
        {
          name: "Amitabh Bachhan",
          city: "Mumbai",
        },
        {
          name: "Ajeeth",
          city: "Chennai",
        },
        {
          name: "Aishwarya Rai",
          city: "Mumbai",
        },
        {
          name: "Deepika Padukone",
          city: "New Delhi",
        },
        {
          name: "Rajnikant",
          city: "Chennai",
        },
      ],
    };
  },
  methods: {
    deletActor(event) {
      this.actorsList.splice(event, 1);
    },
    addActor(event) {
      console.log("Add actor in root component");
      this.actorsList.push(event);
    },
    saveActor(event) {
      // console.log('save actor');
      // console.log(event);
      // console.log(event.actor);
      this.actorsList.splice(event.index, 1, event.actor);
    }
  },
};
</script>

<style>
.container {
  width: auto;
  text-align: center;
}
</style>