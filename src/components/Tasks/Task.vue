<template>
  <q-item
    :class="!task.completed ? 'bg-secondary' : 'bg-positive'"
    @click="updateTask({ id: id, updates: { completed: !task.completed } })"
    clickable
    v-ripple
  >
    <q-item-section side top>
      <q-checkbox class="no-pointer-events" :value="task.completed" />
    </q-item-section>

    <q-item-section>
      <q-item-label :class="{ strikethrough: task.completed }">
        {{ task.name }}
      </q-item-label>
      <q-item-label caption>{{ task.details }}</q-item-label>
    </q-item-section>

    <q-item-section side>
      <div class="row">
        <div class="column justify-center">
          <q-icon name="events" color="primary" size="24px" />
        </div>
        <div class="column justify-center">
          <q-item-label class="row justify-end" caption>
            {{ task.dueDate }}
          </q-item-label>
          <q-item-label class="row justify-end" caption>
            {{ task.dueTime }}
          </q-item-label>
        </div>
      </div>
    </q-item-section>
    <q-item-section side>
      <q-btn
        @click.stop="deletePrompt(id)"
        dense
        round
        outline
        color="red"
        icon="delete_forever"
      />
    </q-item-section>
  </q-item>
</template>

<script>
import { mapActions } from "vuex";
export default {
  props: ["task", "id"],
  methods: {
    ...mapActions("tasks", ["updateTask", "deleteTask"]),

    deletePrompt(id) {
      this.$q
        .dialog({
          title: "Confirm",
          message: "Would you like to delete this task?",
          position: "bottom",
          ok: {
            push: true,
            color: "green"
          },
          cancel: {
            push: true,
            color: "negative"
          },
          persistent: true
        })
        .onOk(() => {
          console.log("deleted");
          this.deleteTask(id);
        });
    }
  }
};
</script>

<style lang="scss" scoped></style>
