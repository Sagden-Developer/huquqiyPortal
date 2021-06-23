export const state = () => ({
    cards: [],
    message: "",
    status: ""
});

export const getters = {

};

export const mutations = {
    HOMES_REQUEST(state) {
        state.status = "loading...";
        state.message = "";
    },
    CARDS_SUCCESS(state, cards) {
        state.cards = cards;
        state.status = "";
        state.message = "Успешно!!!";
    },
    // ONE_HOMES(state, data) {
    //     state.oneAdmin = data;
    //     state.status = "";
    //     state.message = "Успешно!!!";
    // },
    CARDS_FAILURE() {
        state.message = "Не смогли!!!";
        state.status = "";
    }
};

export const actions = {
    GET_CARDS({ commit }) {
        commit('HOMES_REQUEST');
        this.$axios.$get('/material/all').then((res) => {
            commit('CARDS_SUCCESS', res.data);
        }).catch((err) => {

            commit("CARDS_FAILURE");
        });
    },

}