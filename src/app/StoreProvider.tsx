"use client";

import { store } from "@/lib/store";
import { Provider } from "react-redux";
import persistStore from "redux-persist/es/persistStore";
import { PersistGate } from "redux-persist/integration/react";

export default function StoreProvider({
  children,
}: {
  children: Readonly<React.ReactNode>;
}) {
  // const persistor = persistStore(store);
  return <Provider store={store}>{children}</Provider>;
}
