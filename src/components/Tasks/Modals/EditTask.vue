<template>
  <q-card>
    <ModalHeader>Edit Task</ModalHeader>
    <q-space/> 
    <q-form @submit.prevent="submitForm">
      <ModalTaskName ref="modalTaskName" :name.sync="taskToSumbit.name"/>
      <ModalTaskDetails :details.sync="taskToSumbit.details"/>
      <ModalTaskDate :dueDate.sync="taskToSumbit.dueDate" />
      <ModalTaskTime v-if="taskToSumbit.dueDate" :dueTime.sync="taskToSumbit.dueTime"/>
      <ModalButtons/>
    </q-form>
  </q-card>
</template>
<script>
import { mapActions } from 'vuex'
export default {
  props: ["task", "id"],
  components: {
    ModalHeader: require("components/Tasks/Modals/shared/ModalHeader.vue").default,
    ModalTaskName: require("components/Tasks/Modals/shared/ModalTaskName.vue").default,
    ModalTaskDetails: require("components/Tasks/Modals/shared/ModalTaskDetails.vue").default,
    ModalTaskDate: require("components/Tasks/Modals/shared/ModalTaskDate.vue").default,
    ModalTaskTime: require("components/Tasks/Modals/shared/ModalTaskTime.vue").default,
    ModalButtons: require("components/Tasks/Modals/shared/ModalButtons.vue").default
  },
    data(){
      return{
        taskToSumbit: {
          // name: "",
          // details: "",
          // dueDate: "",
          // dueTime: "",
          // completed: false
        }
      }
    },
    methods: {
      ...mapActions('tasks', ['updateTask']),
      submitForm() {
        this.$refs.modalTaskName.$refs.name.validate()
        if(!this.$refs.modalTaskName.$refs.name.hasError) {
          this.submitTask()
        }
      },
      submitTask() {
        this.updateTask({
          id: this.id,
          updates: this.taskToSumbit
        })
        this.$emit('close')
      }
    },
    mounted() {
      this.taskToSumbit = Object.assign({}, this.task)
    }
}
</script>
<style lang="scss" scoped></style>