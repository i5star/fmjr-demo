import vue from 'vue';
import vuex from 'vuex';

import home from './home.js';
import invest from './invest.js';
import find from './find.js';
import mine from './mine.js';

vue.use(vuex);

const store = new vuex.Store({
    modules: {
        home,
        invest,
        find,
        mine,
    },
});

export default store;
