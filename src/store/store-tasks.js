import Vue from 'vue';
import { uid } from 'quasar'

const state = {
 tasks: {
  'id1': {
   name: "Go to store",
   details: "Some details",
   dueDate: "1/31/2020",
   dueTime: "11:00",
   completed: false
  },
  'id2': {
   name: "Let the dog out",
   details: "Some details",
   dueDate: "1/31/2020",
   dueTime: "15:30",
   completed: false
  },
  'id3': {
   name: "Smoke some pot",
   details: "Some details",
   dueDate: "1/10/2020",
   dueTime: "08:00",
   completed: true
  },
 }
};

const mutations = {
    addTask(state, payload) {
        Vue.set( state.tasks, payload.id, payload.task)
    },
 updateTask(state, payload) {
  // -TODO: Remove consolelog
  //console.log('from mutaion payload:', payload);
  Object.assign(state.tasks[payload.id], payload.updates);
 },
 deleteTask(state, id) {
  // -TODO: Remove consolelog
  console.log('delete id:', id);
  Vue.delete(state.tasks, id);
 }
};

const actions = {
    addTask({commit}, task) {
        let taskId = uid()
        let payload = {
            id: taskId,
            task
        }
        commit('addTask', payload)
    },
    updateTask({ commit }, payload) {
        // -TODO: Remove consolelog
        //console.log('updateTask action');
        //console.log('payload:', payload);
        commit('updateTask', payload);
 },
    deleteTask({ commit }, id) {
  commit('deleteTask', id);
 }
};

const getters = {
    tasksTodo: (state) => {
        let tasks = {}
        Object.keys(state.tasks)
            .forEach(function(key) {
                let task = state.tasks[key]
                if(!task.completed) {
                    tasks[key] = task
                }
            });
        return tasks;
    },
    tasksComplete: (state) => {
        let tasks = {}
        Object.keys(state.tasks)
            .forEach(function (key) {
                let task = state.tasks[key]
                if (task.completed) {
                    tasks[key] = task
                }
            });
        return tasks;
    }
};

export default {
 namespaced: true,
 state,
 mutations,
 actions,
 getters
};