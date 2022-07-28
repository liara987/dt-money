import React from "react";
import ReactDOM from "react-dom/client";
import { createServer } from "miragejs";
import { App } from "./App";

createServer({
  routes() {
    this.namespace = "api";

    this.get('/transaction', () => {
      return [
        {
          id: 1,
          title: 'First transaction',
          amount: 300,
          type: 'Clothes',
          category: 'Shooping',
          createdAt: new Date()
        }
      ]
    })
  },
});

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
