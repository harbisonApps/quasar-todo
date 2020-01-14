<template>
    <q-card-section>
        <q-input :value="details" @input="$emit('update:details', $event)" clearable label="details"/>
      </q-card-section>
</template>
<script>
export default {
    props:['details']
}
</script>