import { createStore } from "vuex";

const localStorageKey = 'DJsdfg-2352LLDSF-dfg';

export default createStore({
    state: {
        isAuthenticated: true,
        usuario: '',
    },
    getters: {

    },
    mutations: {
        setIsAuthenticated(state, value) {
            state.isAuthenticated = value;
            localStorage.setItem(localStorageKey, JSON.stringify(state));
        },
        setUsuario(state, value){
            state.usuario = value;
            localStorage.setItem(localStorageKey, JSON.stringify(state));
        },
        // Agregar una mutación para inicializar el estado desde localStorage al cargar la página
        initializeStateFromLocalStorage(state) {
            const storedState = localStorage.getItem(localStorageKey);
            if (storedState) {
                Object.assign(state, JSON.parse(storedState));
            }
        }
    },
    actions: {
        initializeStateFromLocalStorage({ commit }) {
            commit('initializeStateFromLocalStorage');
        }
    }
})