import axios from "axios";
import { getCurrentTime } from '../../helpers';

const todosModules = {
    state: {
        todos: []
    },

    getters: {
        todos: state => state.todos,
        todosIsChecked: state => state.todos.filter(todo => todo.completed),
        isBulkActions: state => state.todos.some(todo => todo.completed),
        max_id: state => Math.max.apply(Math, state.todos.map(todo => {
            return todo.id;
        }))
    },

    actions: {
        async getTodos({ commit }) {
            try {
                const response = await axios.get(`https://jsonplaceholder.typicode.com/todos?_limit=3`);
                commit('GET_TODOS', response.data);
            } catch (error) {
                console.log(error);
            }
        },
        async addTodo({ commit }, newTodo) {
            try {
                await axios.post(`https://jsonplaceholder.typicode.com/todos`, newTodo);
                commit('ADD_TODO', newTodo);
            } catch (error) {
                console.log(error);
            }
        },
        async updateTodo({ commit }, newTodo) {
            try {
                await axios.put(`https://jsonplaceholder.typicode.com/todos/${newTodo.id}`, newTodo);
                commit('UPDATE_TODO', newTodo);
            } catch (error) {
                console.log(error);
            }
        },
        async deleteTodo({ commit }, todoId) {
            try {
                await axios.delete(`https://jsonplaceholder.typicode.com/todos/${todoId}`)
                commit('DELETE_TODO', todoId);
            } catch (error) {
                console.log(error);
            }
        },
    },

    mutations: {
        MARK_COMPLETE(state, todoId) {
            state.todos.map(todo => {
                if (todo.id === todoId) todo.completed = !todo.completed;
                return todo;
            })
        },
        CHECK_ALL_TODO(state) {
            state.todos.map(todo => {
                todo.completed = true;
                return todo;
            })
        },
        REMOVE_TODO_CHECKED(state) {
            state.todos = state.todos.filter(todo => !todo.completed);
        },
        GET_TODOS(state, todos) {
            state.todos = todos.map(todo => ({
                title: todo.title,
                date: getCurrentTime(),
                id: todo.id,
                piority: 'normal',
                description: '',
                completed: todo.completed
            })).sort((a, b) => new Date(a.date) - new Date(b.date));
        },
        ADD_TODO(state, newTodo) {
            state.todos.push(newTodo);
            state.todos.sort((a, b) => new Date(a.date) - new Date(b.date));
        },
        UPDATE_TODO(state, newTodo) {
            let newState = [...state.todos];
            const index = newState.findIndex(el => el.id === newTodo.id);
            newState[index] = newTodo;
            state.todos = newState;
        },
        DELETE_TODO(state, todoId) {
            state.todos = state.todos.filter(todo => todo.id != todoId);
        }
    }
}

export default todosModules