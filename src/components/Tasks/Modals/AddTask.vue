<template>
  <q-card>
    <q-card-section>
      <div class="text-h6 text-center">Add Task</div>
    </q-card-section>
    <q-form @submit.prevent="submitForm">
      <q-card-section class="q-pt-none">
        <q-input v-model="taskToSumbit.name" label="name" autofocus clearable ref="name" 
          :rules="[val => !!val || 'Please add a name']"/>
      </q-card-section>
      <q-card-section>
        <q-input v-model="taskToSumbit.details" clearable label="details"/>
      </q-card-section>
      <q-card-section>
        <q-input v-model="taskToSumbit.dueDate" clearable label="due date">
          <template v-slot:append>
            <q-icon color="primary" name="event" class="cursor-pointer">
              <q-popup-proxy ref="qDateProxy" transition-show="scale" transition-hide="scale">
                <q-date v-model="taskToSumbit.dueDate" @input="() => $refs.qDateProxy.hide()" />
              </q-popup-proxy>
            </q-icon>
          </template>
        </q-input>
      </q-card-section>
      <q-card-section v-if="taskToSumbit.dueDate">
        <q-input v-model="taskToSumbit.dueTime" clearable label="due time">
          <template v-slot:append>
            <q-icon color="primary" name="access_time" class="cursor-pointer">
              <q-popup-proxy transition-show="scale" transition-hide="scale">
                <q-time v-model="taskToSumbit.dueTime" />
              </q-popup-proxy>
            </q-icon>
          </template>
        </q-input>
      </q-card-section>
      <q-card-actions align="center">
        <q-btn flat label="cancel" color="red" v-close-popup />
        <q-btn rounded type="submit" label="Make this list longer" color="green"/>
      </q-card-actions>
    </q-form>
  </q-card>
</template>
<script>
import { mapActions } from 'vuex'
export default {
    data(){
      return{
        taskToSumbit: {
          name: "",
          details: "",
          dueDate: "",
          dueTime: "",
          completed: false
        }
      }
    },
    methods: {
      ...mapActions('tasks', ['addTask']),
      submitForm() {
        this.$refs.name.validate()
        if(!this.$refs.name.hasError) {
          this.submitTask()
        }
      },
      submitTask() {
        this.addTask(this.taskToSumbit)
        this.$emit('close')
      }
    }
}
</script>
<style lang="scss" scoped></style>