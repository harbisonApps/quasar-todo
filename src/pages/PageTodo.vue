<template>
  <q-page class="q-pa-md">
    <q-list separator bordered>
      <q-item
        :class="!task.completed ? 'bg-secondary' : 'bg-positive'"
        v-for="task in tasks"
        :key="task.id"
        @click="task.completed = !task.completed"
        clickable
        v-ripple
      >
        <q-item-section side top>
          <q-checkbox v-model="task.completed" />
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
              <q-icon name="events" color="primary" size="18px" />
            </div>
            <div class="column justify-center">
              <q-item-label class="row justify-end" caption>
                {{ task.dueDate }}
              </q-item-label>
              <q-item-label class="row justify-end" caption>
                <small
                  :class="
                    !task.completed ? 'text-accent' : 'text-positive-dark'
                  "
                  >{{ task.dueTime }}</small
                >
              </q-item-label>
            </div>
          </div>
        </q-item-section>
      </q-item>

      <q-separator spaced />
      <q-item-label>Below Separator</q-item-label>
    </q-list>
  </q-page>
</template>

<script>
export default {
  data() {
    return {
      tasks: [
        {
          id: 1,
          name: "Go to store",
          details: "Some details",
          dueDate: "1/31/2020",
          dueTime: "11:00",
          completed: false
        },
        {
          id: 2,
          name: "Let the dog out",
          details: "Some details",
          dueDate: "1/31/2020",
          dueTime: "15:30",
          completed: false
        },
        {
          id: 3,
          name: "Smoke some pot",
          details: "Some details",
          dueDate: "1/10/2020",
          dueTime: "08:00",
          completed: true
        }
      ]
    };
  }
};
</script>
<style lang="scss" scoped></style>
