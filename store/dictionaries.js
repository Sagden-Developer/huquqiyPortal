export const state = () => ({
    dictionary: [],
    dictionary2: [],
    message: "",
    status: ""
});

export const getters = {

};

export const mutations = {
    DICTIONARIES_REQUEST(state) {
        state.status = "loading...";
        state.message = "";
    },
    DICTIONARIES_SUCCESS_DICTIONARY(state, dictionary) {
        state.dictionary = dictionary;
        state.status = "";
        state.message = "Успешно!!!";
    },

    DICTIONARIES_SUCCESS_DICTIONARY2(state, dictionary2) {
        state.dictionary2 = dictionary2;
        state.status = "";
        state.message = "Успешно!!!";
    },

    // ONE_DICTIONARIES(state, data) {
    //     state.oneAdmin = data;
    //     state.status = "";
    //     state.message = "Успешно!!!";
    // },
    DICTIONARIES_FAILURE() {
        state.message = "Не смогли!!!";
        state.status = "";
    }
};

export const actions = {
    GET_DICTIONARY({ commit }, query) {
        console.log(query, "bizning query");
        this.$axios.$get(`/dictionary/filter/${query}`)
            .then((data) => {
                console.log(data);
                commit("DICTIONARIES_SUCCESS_DICTIONARY", data.data);
            }).catch((error) => {
                console.log(error);
                commit("DICTIONARIES_FAILURE")
            })
    },
    GET_DICTIONARY2({ commit }, query) {
        console.log(query, "bizning query");
        this.$axios.$get(`/dictionary2/all/${query}`)
            .then((data) => {
                console.log(data);
                commit("DICTIONARIES_SUCCESS_DICTIONARY2", data.data);
            }).catch((error) => {
                console.log(error);
                commit("DICTIONARIES_FAILURE")
            })
    },
    GET_DICTIONARY_BY_CHAR({ commit }, query) {
        console.log(query, "bizning query");
        this.$axios.$get(`/dictionary/filter/${query}`)
            .then((data) => {
                console.log(data.data);
                commit("DICTIONARIES_SUCCESS_DICTIONARY", data.data);
            }).catch((error) => {
                console.log(error);
                commit("DICTIONARIES_FAILURE")
            })
    },
    GET_DICTIONARY2_BY_CHAR({ commit }, query) {
        console.log(query, "bizning query");
        this.$axios.$get(`/dictionary2/filter/${query}`)
            .then((data) => {
                console.log(data);
                commit("DICTIONARIES_SUCCESS_DICTIONARY2", data.data);
            }).catch((error) => {
                console.log(error);
                commit("DICTIONARIES_FAILURE")
            })
    },

}