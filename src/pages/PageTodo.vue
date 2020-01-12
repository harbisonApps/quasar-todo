<template>
  <q-page class="q-pa-md">
    <q-list separator bordered>
      <Task
        v-for="(task, key) in tasks"
        :key="key"
        :task="task"
        :id="key"
      ></Task>
    </q-list>
  </q-page>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  components: {
    Task: require("components/Tasks/Task.vue").default
  },
  computed: {
    ...mapGetters("tasks", ["tasks"])
  }
};
</script>
<style lang="scss" scoped></style>
