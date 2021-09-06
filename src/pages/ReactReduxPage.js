import React, { Component } from 'react';
// import { connect } from 'react-redux';
import { connect } from '../kReactRedux/kReactRedux';
// import { bindActionCreators } from 'redux';
import { bindActionCreators } from '../kReactRedux/kReactRedux';

// connect 高阶组件
@connect(
    // mapStateToProps 把state映射到props上
    ({ count }) => ({ count }),
    // mapDispatchToProps: obj || func
    // {add: () => ({type: 'ADD'}), minus: () => ({type: 'MINUS'})}
    (dispatch) => {
        // const creators = {
        //     add: () => dispatch({ type: 'ADD' }),
        //     minus: () => dispatch({ type: 'MINUS' })
        // };
        // 但是像上面这样都包一层dispatch会比较麻烦，我们可以像下面这样处理
        let creators = {
            add: () => ({ type: 'ADD' }),
            minus: () => ({ type: 'MINUS' })
        };
        creators = bindActionCreators(creators, dispatch);
        return { dispatch, ...creators };
    }
)
class ReactReduxPage extends Component {
    render() {
        console.log(this.props);
        const { count, dispatch, add, minus } = this.props;
        return (
            <div>
                <h3>ReactReduxPage</h3>
                <p>{count}</p>
                <button onClick={() => dispatch({type: 'ADD', payload: 100})}>dispatch add</button>
                <button onClick={add}>add</button>
                <button onClick={minus}>minus</button>
            </div>
        )
    }
}

export default ReactReduxPage
