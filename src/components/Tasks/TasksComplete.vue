<template>
    <div class="q-mt-md">
        <ListHeader bgColor="bg-green">
            Complete
        </ListHeader>
        <q-list separator bordered>
        <Task
            v-for="(task, key) in tasksComplete"
            :key="key"
            :task="task"
            :id="key"
        ></Task>
        </q-list>
    </div>
</template>
<script>
export default {
    components: {
    Task: require("components/Tasks/Task.vue").default,
    ListHeader: require('components/Shared/ListHeader.vue').default
    },
    props: ['tasksComplete']
}
</script>