<template>
  <q-page class="q-pa-md">
    <div class="row">
      <Sort/>
      <Search/>
    </div>
    <p v-if="search && !Object.keys(tasksTodo).length && !Object.keys(tasksComplete).length">
      <q-icon color="red" name="not_interested"/>
      Your search didn't return a results
      <q-icon color="red" name="not_interested"/>
    </p>
    
    <NoTasks  v-if="!Object.keys(tasksTodo).length && !search"></NoTasks>
    <TasksTodo :tasksTodo="tasksTodo"
       v-if="Object.keys(tasksTodo).length"
    ></TasksTodo>
    <TasksComplete v-if="Object.keys(tasksComplete).length"
      :tasksComplete="tasksComplete" >
    </TasksComplete>
    
    <div class="absolute-bottom text-center q-mb-lg">
      <q-btn ripple fab round @click="showAddTask = true"
        color="primary" size="xl" icon="add"/>
    </div>
    <q-dialog v-model="showAddTask">
      <AddTask @close="showAddTask = false"/>
    </q-dialog>
  </q-page>
</template>

<script>
import { mapState, mapGetters } from "vuex";
export default {
  data() {
    return {
      showAddTask: false
    }
  },
  components: {
    TasksTodo: require("components/Tasks/TasksTodo.vue").default,
    TasksComplete: require("components/Tasks/TasksComplete.vue").default,
    Search: require("components/Tasks/Tools/Search.vue").default,
    Sort: require("components/Tasks/Tools/Sort.vue").default,
    AddTask: require("components/Tasks/Modals/AddTask.vue").default,
    NoTasks: require("components/Tasks/NoTasks.vue").default
  },
  computed: {
    ...mapGetters("tasks", ["tasksTodo", "tasksComplete"]),
    ...mapState("tasks", ['search'])
  },
  mounted(){
    this.$root.$on('showAddTask', () => {
      this.showAddTask = true
    })
  }
};
</script>
<style lang="scss" scoped></style>
