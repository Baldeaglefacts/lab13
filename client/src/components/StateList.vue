<template>

  <div>
    <p v-for="state in states" v-bind:key="state.name">
      {{state.name}}
    </p>
  </div>
</template>

<script>
//import StateDetail from './StateDetail.vue'
// import StateSummary from './StateSummary.vue'
export default {
  components: {
    // StateDetail,
    // StateSummary
  },
  name: 'StateList',
  data() {
    return {
      states: []
    }
  },
  mounted() {
    this.fetchAllStates()
  },
  methods: {
    fetchAllStates() { // Get states for display
      this.$stateService.getAllStates().then(states => {
        this.states = states
      }).catch(err => {
        alert('Sorry, unable to fetch state list')
        console.error(err)
      })
    },
  //   updateVisited(stateName, visited) {
  //     this.$stateService.setVisited(stateName, visited).then(response => {
  //       this.fetchAllStates()
  //     }).catch(err => {
  //       alert('Sorry, unable to update this state')
  //       console.error(err)
  //     })
  //   }
  }
}
</script>

<style scoped>
.state-list-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
}
.state-container {
  margin: 1rem;
}
</style>