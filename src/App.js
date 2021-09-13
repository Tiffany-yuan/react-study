import './App.css';
import React, { Component } from 'react'
// import ReduxPage from './pages/ReduxPage';
// import { 
//   BrowserRouter as Router,
//   Route,
//   Link,
//   Switch,
//   useHistory,
//   useLocation,
//   useRouteMatch,
//   useParams,
//   withRouter,
//   Prompt,
//   Redirect
// } from "react-router-dom";

import { 
  BrowserRouter as Router, 
  Route,
  Link,
  Switch,
  useHistory,
  useLocation,
  useRouteMatch,
  useParams,
  withRouter,
  Redirect,
  // Prompt
} from "./k-react-router-dom";
import HomePage from './pages/routerPages/HomePage';
import UserPage from './pages/routerPages/UserPage';
import LoginPage from './pages/routerPages/LoginPage';
import _404Page from './pages/routerPages/_404Page';
// import DialogPage from './pages/DialogPage';
// import MyRCFieldFrom from './pages/MyRCFieldFrom';
// import ContextPage from './pages/ContextPage';
// import HocPage from './pages/HocPage';
// import HooksPage from './pages/HooksPage';
// import ReactReduxPage from './pages/ReactReduxPage';
// import ReactReduxHooksPages from './pages/ReactReduxHooksPages';

function App() {
  return (
    <div className="App">
      {/* <ContextPage></ContextPage> */}
      {/* <HocPage/> */}
      {/* <MyRCFieldFrom/> */}
      {/* <DialogPage /> */}
      {/* <ReduxPage /> */}
      {/* <HooksPage /> */}
      {/* <ReactReduxPage /> */}
      {/* <ReactReduxHooksPages /> */}
      <Router>
        <Link to="/">Home</Link>
        <Link to="/user">User</Link>
        <Link to="/login">Login</Link>
        <Link to="/product/123">product</Link>
        {/* 
          1. 优先级 children > component > render 
          2. children 不管路由是否匹配都会被渲染
        */}
        <Switch>
          <Route exact path="/"
            // children={() => <div>children page</div>}
            component={HomePage}
            render={() => <div>render page</div>}
            ></Route>
          <Route path="/user" component={UserPage} ></Route>
          <Route path="/login" component={LoginPage}></Route>
          <Route path="/product/:id"
            component={Product}
            // render={() => <Product />}
          ></Route>
          <Route component={_404Page}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

// 类组件
@withRouter
class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() {
    const { match } = this.props;
    const { url } = match;
    const { id } = match.params;
    return (
      <div>
        <h1>Product-{id}</h1>
      </div>
     );
  }
}
 
// 函数组件
// function Product(props) {
//   // const { match } = props;
//   // const { url } = match;
//   // const { id } = match.params;

//   const history = useHistory();
//   const location = useLocation();
//   const match = useRouteMatch();
//   const params = useParams();
//   const {id} = match.params;

//   console.log("props", history, location, match, params); //sy-log
//   return (
//     <div>
//       <h1>Product-{id}</h1>
//     </div>
//   );
// }
