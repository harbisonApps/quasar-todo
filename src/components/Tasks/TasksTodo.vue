<template>
    <div>
        <ListHeader bgColor="bg-orange-8">
            Todo
        </ListHeader>
        <q-list separator bordered>
        <Task
            v-for="(task, key) in tasksTodo"
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
    props: ['tasksTodo']
    
}
</script>