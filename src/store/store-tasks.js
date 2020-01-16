import Vue from 'vue';
import { uid } from 'quasar'

const state = {
 tasks: {
  'id1': {
   name: "Go to store",
   details: "Some details",
   dueDate: "1/30/2020",
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
   name: "Make dinner",
   details: "Some details",
   dueDate: "1/10/2020",
   dueTime: "08:00",
   completed: true
  },
 },
    search: '',
    sort: 'name'
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
 },
 setSearch(state, value) {
     state.search = value
 },
setSort(state, value) {
    state.sort = value
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
    },
    setSearch({ commit }, value) {
        commit('setSearch', value)
    },
    setSort({ commit }, value) {
        commit('setSort', value)
    }
};

const getters = {
    tasksSorted: (state) => {
        let tasksSorted = {},
            keysOrdered = Object.keys(state.tasks)
        
        keysOrdered.sort((a,b) => {
            let taskAProp = state.tasks[a][state.sort].toLowerCase(),
                taskBProp = state.tasks[b][state.sort].toLowerCase()

            if(taskAProp > taskBProp) return 1
            else if(taskAProp < taskBProp) return -1
            else return 0
        })
        
        keysOrdered.forEach((key) => {
            tasksSorted[key] = state.tasks[key]
        })

        return tasksSorted
    },
    tasksFiltered: (state, getters) => {
        let tasksSorted = getters.tasksSorted,
            tasksFiltered = {}
        if(state.search) {
            Object.keys(tasksSorted).forEach(function(key) {
                let task = tasksSorted[key],
                taskNameLowerCase = task.name.toLowerCase(),
                searchLowerCase = state.search.toLowerCase()
                if (taskNameLowerCase.includes(searchLowerCase)) {
                    tasksFiltered[key] = task
                }
            })
            return tasksFiltered
        }
        return tasksSorted
    },
    tasksTodo: (state, getters) => {
        let tasksFiltered = getters.tasksFiltered
        let tasks = {}
        Object.keys(tasksFiltered)
            .forEach(function(key) {
                let task = tasksFiltered[key]
                if(!task.completed) {
                    tasks[key] = task
                }
            });
        return tasks;
    },
    tasksComplete: (state, getters) => {
        let tasksFiltered = getters.tasksFiltered
        let tasks = {}
        Object.keys(tasksFiltered)
            .forEach(function (key) {
                let task = tasksFiltered[key]
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