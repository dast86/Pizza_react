import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import { store } from "./redux/store.tsx";
import { Provider } from "react-redux";

import App from "./component/1-App/App.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);
