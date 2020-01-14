<template>
<q-card-section class="q-pt-none">
    <q-input :value="name" label="name" autofocus clearable ref="name"
        @input="$emit('update:name', $event)"
        :rules="[val => !!val || 'Please add a name']"/>
</q-card-section>
</template>
<script>
export default {
    props:['name']
}
</script>