const { RouterContext } = require("./RouterContext")

/*
 * @Author: your name
 * @Date: 2021-09-09 20:46:54
 * @LastEditTime: 2021-09-09 20:55:40
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /react-study/src/k-react-router-dom/withRouter.js
 */
const withRouter = WrappedComponent => props => {
    return <RouterContext.Consumer>
        {
            context => <WrappedComponent {...props} {...context} />
        }
    </RouterContext.Consumer>
}
export default withRouter;