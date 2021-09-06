export default function applyMiddleware(...middlewares) {
    return createStore => reducer => {
        let store = createStore(reducer);
        let dispatch = store.dispatch;

        // 加强store.dispatch
        const midApi = {
            getState: store.getState,
            dispatch: (action) => dispatch(action),
        }
        // 这里不用forEach，用map。forEach没有返回值，map重新返回这个数组
        const middlewareChain = middlewares.map(middleware => middleware(midApi))
        dispatch = compose(...middlewareChain)(store.dispatch);

        //返回加强版 store.dispatch
        return {
            ...store,
            dispatch
        }
     }
}

function compose(...funcs) {
    if (funcs.length === 0) {
        return arg => arg;
    }
    if (funcs.length === 1) {
        return funcs[0];
    }
    console.log(funcs);
    return funcs.reduce((a, b) => (...args) => a(b(...args)));
}