<template>
  <q-page class="q-pa-md">
    <q-list v-if="Object.keys(tasks).length" separator bordered>
      <Task
        v-for="(task, key) in tasks"
        :key="key"
        :task="task"
        :id="key"
      ></Task>
    </q-list>
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
    Task: require("components/Tasks/Task.vue").default,
    AddTask: require("components/Tasks/Modals/AddTask.vue").default
  },
  computed: {
    ...mapGetters("tasks", ["tasks"])
  }
};
</script>
<style lang="scss" scoped></style>
