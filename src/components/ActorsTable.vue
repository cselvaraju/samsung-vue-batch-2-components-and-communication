<template>
  <div class="container">
    <h3>Actors Table</h3>
    <table class="table table-striped table-hover table-bordered table-sm">
      <thead>
        <th>Name</th>
        <th>City</th>
        <th>Action</th>
      </thead>
      <tbody>
        <tr v-for="(actor, index) in actors" :key="index">
          <td>
              <span v-show="index !== selectedIndex">{{ actor.name }}</span>
              <span v-show="index === selectedIndex">
                  <input type="text" v-model="selectedActor.name">
              </span>            
          </td>
          <td>
              <span v-show="index !== selectedIndex">{{ actor.city }}</span>
              <span v-show="index === selectedIndex">
                  <input type="text" v-model="selectedActor.city">
              </span>            
          </td>
          <td>
            <span v-show="index !== selectedIndex">
              <button @click="editActor(index)" class="btn btn-info">
                <i class="fa fa-edit"></i>
              </button>
              <button @click="deleteActor(index)" class="btn btn-danger">
                <i class="fa fa-trash"></i>
              </button>
            </span>
            <span v-show="index === selectedIndex">
              <button @click="saveActor(index)" class="btn btn-info">
                <i class="fa fa-save"></i>
              </button>
              <button @click="cancelEdit" class="btn btn-info">
                <i class="fa fa-undo"></i>
              </button>
            </span>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  props: ["actors"],
  data() {
    return {
      selectedIndex: -1,
      selectedActor: { name: "", city: "" },
    };
  },
  methods: {
    deleteActor(index) {
      this.$emit("deleteActor", index);
    },
    editActor(index) {
      this.selectedIndex = index;
      this.selectedActor = Object.assign({}, this.actors[index]);
    },
    saveActor(index) {
        const payload = {
            index: index,
            actor: this.selectedActor
        };
        this.$emit('saveActor', payload);
        this.selectedIndex = -1;
    },
    cancelEdit() {
      this.selectedIndex = -1;
    },
  },
};
</script>

<style>
div.container {
  width: 60%;
}
</style>