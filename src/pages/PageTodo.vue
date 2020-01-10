<template>
  <q-page padding>
    <p>Todo Page</p>
  </q-page>
</template>

<script>
export default {
  data() {
    return {
      tasks:[
        {
          id:1,
          name: "",
          completed: false
        }
      ]
    }
  },
};
</script>
<style lang="scss" scoped></style>
