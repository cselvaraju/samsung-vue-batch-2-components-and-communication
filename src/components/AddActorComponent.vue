<template>
  <div class="container">
      <h3>Add Actor</h3>
      <form @submit.prevent="addActor">
          <div class="mb-3">
              <label for="actorname" class="form-label">
                  Name: 
              </label>
              <input type="text" id="actorname" class="form-control" v-model="newActor.name">
          </div>
          <div class="mb-3">
              <label for="actorcity" class="form-label">
                  City: 
              </label>
              <input type="text" id="actorcity" class="form-control" v-model="newActor.city">
          </div>
           <button class="btn btn-primary" type="submit">
               <i class="fa fa-user-plus"></i>
           </button>
      </form>
  </div>
</template>

<script>
export default {
    data() {
        return {
            newActor: {
                name: '', city: ''
            }
        }
    },
    methods: {
        addActor() {
            console.log('addActor event handler');
            this.$emit('addActor', this.newActor);
            this.newActor = {
                name: '', city: ''
            }
        }
    }
}
</script>

<style>

</style>