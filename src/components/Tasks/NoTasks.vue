<template>
    <q-banner dense class="bg-grey-3">
      <template v-slot:avatar>
        <q-icon name="check" color="primary" />
      </template>
      There are no tasks to complete
      <template v-slot:action>
        <q-btn @click="$root.$emit('showAddTask')" flat color="primary" label="Add a new task" />
      </template>
    </q-banner>
</template>
<script>
export default {
    
}
</script>