<template>
  <q-page class="q-pa-md">
    <NoTasks @showAddTask="showAddTask = true" v-if="!Object.keys(tasksTodo).length"></NoTasks>
    <TasksTodo :tasksTodo="tasksTodo"
       v-else
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
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      showAddTask: false
    }
  },
  components: {
    TasksTodo: require("components/Tasks/TasksTodo.vue").default,
    TasksComplete: require("components/Tasks/TasksComplete.vue").default,
    AddTask: require("components/Tasks/Modals/AddTask.vue").default,
    NoTasks: require("components/Tasks/NoTasks.vue").default
  },
  computed: {
    ...mapGetters("tasks", ["tasksTodo", "tasksComplete"])
  },
  mounted(){
    this.$root.$on('showAddTask', () => {
      this.showAddTask = true
    })
  }
};
</script>
<style lang="scss" scoped></style>
