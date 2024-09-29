import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import {createApp}  from 'vue';
import { createPinia } from 'pinia';

const app = createApp(App);
const pinia = createPinia();
app.use(pinia);
app.mount('#app');


ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
