import axios from "axios";

const todosModules = {
    state: {
        todos: []
    },

    getters: {
        todos: state => state.todos,
        todosIsChecked: state => state.todos.filter(todo => todo.completed)
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
        async updateTodo({ commit }, todoId, newTodo) {
            try {
                await axios.put(`https://jsonplaceholder.typicode.com/todos/${todoId}`, newTodo);
                commit('UPDATE_TODO', todoId, newTodo);
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
        REMOVE_TODO_CHECKED(state) {
            state.todos = state.todos.filter(todo => !todo.completed);
        },
        GET_TODOS(state, todos) {
            state.todos = todos;
        },
        ADD_TODO(state, newTodo) {
            state.todos.push(newTodo);
        },
        UPDATE_TODO(state, todoId, newTodo) {
            const index = state.todos.findIndex(todo => todo.id === todoId);
            state.todos[index] = newTodo;
        },
        DELETE_TODO(state, todoId) {
            state.todos = state.todos.filter(todo => todo.id != todoId);
        }
    }
}

export default todosModules