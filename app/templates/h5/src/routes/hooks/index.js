import store from 'store'

const history = window.sessionStorage;
history.clear()
let historyCount = history.getItem('count') * 1 || 0;
history.setItem('/', 0);

export default (router) => {

  router.beforeEach(function (to, from, next) {
    const toIndex = history.getItem(to.path);
    const fromIndex = history.getItem(from.path);

    if (toIndex) {
      if (!fromIndex || parseInt(toIndex, 10) > parseInt(fromIndex, 10) || (toIndex === '0' && fromIndex === '0')) {
        store.commit('UPDATE_DIRECTION', 'forward')
      } else {
        store.commit('UPDATE_DIRECTION','reverse')
      }
    } else {
      ++historyCount;
      history.setItem('count', historyCount);
      to.path !== '/' && history.setItem(to.path, historyCount);
      store.commit('UPDATE_DIRECTION','forward')
    }
    next();
  })
  router.afterEach(function (router) {

  })
}
