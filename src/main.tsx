import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import { store, persister } from "./redux/store.tsx";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import App from "./component/1-App/App.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persister}>
      <App />
      </PersistGate>
    </Provider>
  </BrowserRouter>
);
