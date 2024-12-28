import "./App.css"
import Head from "./components/Head";
import Body from "./components/Body";
import { Provider } from "react-redux";
import store from "./utils/store";
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ReactDOM from "react-dom/client"
import MainContainer from "./components/MainContainer";
import WatchPage from "./components/WatchPage";


function App() {
  return (
    <Provider store={store}>
    <div>
      <Head/>
      <RouterProvider router={appRouter}/>
    </div>
    </Provider>
  );
}

const appRouter = createBrowserRouter([
  {
      path: '/',
      element :  <Body/>,
      children: [
         {
          path: '/',
          element: <MainContainer/>,
      },{
          path: 'watch',
          element: <WatchPage/>,

      }
  ]
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render()

export default App;
