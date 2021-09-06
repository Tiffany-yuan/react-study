import React, {useContext, useEffect, useReducer, useState, useCallback, useLayoutEffect} from 'react';

// 通过context传递store
// *1. 创建一个Context对象
const Context = React.createContext();
// *2. 通过Provider组件传递value，这里就是store
export function Provider({store, children}) {
    return <Context.Provider value={store}>{children}</Context.Provider>
}
// *3. 子组件接受 context value (Consummer/contextType/useContext)
/// ***!!! 方法一
export const connect = (
    mapStateToProps = state => state,
    mapDispatchToProps
) => WrappedComponent => props => {
    const store = useContext(Context);
    const { getState, dispatch, subscribe } = store;
    let stateProps = mapStateToProps(getState());
    let dispatchProps = { dispatch };

    if (typeof mapDispatchToProps === 'object') {
        dispatchProps = bindActionCreators(mapDispatchToProps, dispatch)
    } else if (typeof mapDispatchToProps === "function") {
        dispatchProps = mapDispatchToProps(dispatch)
    }
    // 让函数组件强制更新的方法
    // * 方法一
    // const [, forceUpdate] = useReducer(x => x + 1, 0);
    // const [, forceUpdate] = useState({});
    // * 方法二
    const forceUpdate = useForceUpdate();
    useLayoutEffect(() => {
        // 有订阅，一定得有取消订阅
        const unsubscribe = store.subscribe(() => {
            // 让函数组件更新
            forceUpdate()
            // forceUpdate({})
        })
        return () => {
            if (unsubscribe) {
                unsubscribe();
            }
        }
    }, [store])

    return <WrappedComponent {...props} {...stateProps} {...dispatchProps}/>;
}

// * 方法二
// * hook只能用在函数组件或者是自定义hook
function useForceUpdate() {
    const [state, setState] = useState(0);
    // 这里用 useCallback 是为了缓存
    const update = useCallback(() => {
        setState(prev => prev + 1);
    }, [])
    return update;
}


function bindActionCreator(creator, dispatch) {
    return (...args) => dispatch(creator(...args));
}

export const bindActionCreators = (creators, dispatch) => {
    let obj = {};
    for (const key in creators) {
        obj[key] = bindActionCreator(creators[key], dispatch);
    }
    return obj;
}

/// ***!!! 方法二 hooks
export const useSelector = (selector) => {
    const store = useStore();
    const { getState } = store;
    const selectState = selector(getState())

    const forceUpdate = useForceUpdate();
    useLayoutEffect(() => {
        // 有订阅，一定得有取消订阅
        const unsubscribe = store.subscribe(() => {
            // 让函数组件更新
            forceUpdate()
            // forceUpdate({})
        })
        return () => {
            if (unsubscribe) {
                unsubscribe();
            }
        }
    }, [store])
    
    return selectState;
}

function useStore() {
    const store = useContext(Context)
    return store;
}

export const useDispatch = (params) => {
    const store = useStore()
    return store.dispatch;
}
