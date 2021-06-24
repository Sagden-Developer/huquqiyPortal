export const state = () => ({
    phones: [],
    catalogs: [],
    message: "",
    status: ""
});

export const getters = {
    phones(state){
        return state.phones;
    }
};

export const mutations = {
    PHONES_REQUEST(state) {
        state.status = "loading...";
        state.message = "";
    },
    PHONES_SUCCESS(state, phones) {
        state.phones = phones;
        state.status = "";
        state.message = "Успешно!!!";
    },


    PHONE_CATALOGS_SUCCESS(state, catalogs) {
        state.catalogs = catalogs;
        state.status = "";
        state.message = "Успешно!!!";
    },
    // ONE_PHONES(state, data) {
    //     state.oneAdmin = data;
    //     state.status = "";
    //     state.message = "Успешно!!!";
    // },
    PHONES_FAILURE() {
        state.message = "Не смогли!!!";
        state.status = "";
    }
};

export const actions = {
    GET_PHONES({ commit }) {
        commit('PHONES_REQUEST');
        this.$axios.$get('/helpline/all').then((res) => {
            console.log(res.data);
            commit('PHONES_SUCCESS', res.data);
        }).catch((err) => {

            commit("PHONES_FAILURE");
        });
    },
    GET_QUERY_PHONES({ commit }, query) {
        commit('PHONES_REQUEST');
        this.$axios.$get(`/helpline/filter/${query}`).then((res) => {
            console.log(res.data);
            commit('PHONES_SUCCESS', res.data);
        }).catch((err) => {

            commit("PHONES_FAILURE");
        });
    },
    GET_PHONE_CATALOGS({ commit }) {
        commit('PHONES_REQUEST');
        this.$axios.$get('/phones-catalog/all').then((res) => {
            console.log(res.data);
            commit('PHONE_CATALOGS_SUCCESS', res.data);
        }).catch((err) => {

            commit("PHONES_FAILURE");
        });
    },

}