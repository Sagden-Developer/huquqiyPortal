export const state = () => ({
    video: [],
    news: [],
    sites: [],
    libraries: [],
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
    HOMES_SUCCESS_VIDEO(state, video) {
        state.video = video;
        state.status = "";
        state.message = "Успешно!!!";
    },

    HOMES_SUCCESS_NEWS(state, news) {
        state.news = news;
        state.status = "";
        state.message = "Успешно!!!";
    },

    HOMES_SUCCESS_SITES(state, sites) {
        state.sites = sites;
        state.status = "";
        state.message = "Успешно!!!";
    },
    HOMES_SUCCESS_LIBRARIES(state, libraries) {
        state.libraries = libraries;
        state.status = "";
        state.message = "Успешно!!!";
    },
    // ONE_HOMES(state, data) {
    //     state.oneAdmin = data;
    //     state.status = "";
    //     state.message = "Успешно!!!";
    // },
    HOMES_FAILURE() {
        state.message = "Не смогли!!!";
        state.status = "";
    }
};

export const actions = {
    GET_ONE_HOMES({ commit }, id) {
        console.log(id, "bizning id");
        this.$axios.$get(`/home/${id}`)
            .then((data) => {
                console.log(data);
                // commit("ONE_HOMES", data.data);
            }).catch((error) => {
                console.log(error);
            })
    },
    GET_HOMES_VIDEO({ commit }) {
        commit('HOMES_REQUEST');
        this.$axios.$get('/home/video').then((res) => {
            commit('HOMES_SUCCESS_VIDEO', res.data);
        }).catch((err) => {
            
            commit("HOMES_FAILURE");
        });
    },

    GET_HOMES_NEWS({ commit }) {
        commit('HOMES_REQUEST');
        this.$axios.$get('/home/news').then((res) => {
            commit('HOMES_SUCCESS_NEWS', res.data);
        }).catch((err) => {
            
            commit("HOMES_FAILURE");
        });
    },

    GET_HOMES_SITES({ commit }) {
        commit('HOMES_REQUEST');
        this.$axios.$get('/home/site').then((res) => {
            commit('HOMES_SUCCESS_SITES', res.data);
        }).catch((err) => {
            
            commit("HOMES_FAILURE");
        });
    },
    
    
    GET_HOMES_LIBRARIES({ commit }) {
        commit('HOMES_REQUEST');
        this.$axios.$get('/home/library').then((res) => {
            commit('HOMES_SUCCESS_LIBRARIES', res.data);
        }).catch((err) => {
            
            commit("HOMES_FAILURE");
        });
    },
}