import { v4 as uuidv4 } from 'uuid'

const todosModules = {
    state: {
        todos: [
            {
                id: uuidv4(),
                title: 'Do homework',
                date: new Date().toISOString().slice(0, 10),
                piority: 'nomal',
                description: '',
                completed: true
            },
            {
                id: uuidv4(),
                title: 'Do housework',
                date: new Date().toISOString().slice(0, 10),
                piority: 'nomal',
                description: '',
                completed: false
            },
            {
                id: uuidv4(),
                title: 'Do something',
                date: new Date().toISOString().slice(0, 10),
                piority: 'low',
                description: '',
                completed: false
            }
        ].sort((a, b) => new Date(a.date) - new Date(b.date))
    },

    getters: {
        todos: state => state.todos,
        todosIsChecked: state => state.todos.filter(todo => todo.completed)
    },

    actions: {
        addTodo({ commit }, newTodo) {
            commit('ADD_TODO', newTodo);
        },
        updateTodo({ commit }, newTodo) {
            commit('UPDATE_TODO', newTodo);
        },
        deleteTodo({ commit }, todoId) {
            commit('DELETE_TODO', todoId);
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
        ADD_TODO(state, newTodo) {
            state.todos.unshift(newTodo);
        },
        UPDATE_TODO(state, newTodo) {
            state.todos.map(todo => {
                if (todo.id === newTodo.id) {
                    todo.title = newTodo.title;
                    todo.completed = newTodo.completed;
                    todo.date = newTodo.date;
                    todo.piority = newTodo.piority;
                }
                return todo;
            })
        },
        DELETE_TODO(state, todoId) {
            state.todos = state.todos.filter(todo => todo.id != todoId);
        }
    }
}

export default todosModules