import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
//*Setup Redux
import { Provider } from "react-redux";
import { createStore } from "redux";
import { rootReducer } from "./Redux/Reducer/RootReducer.jsx";

const store = createStore(rootReducer);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
);
