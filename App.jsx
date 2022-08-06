import RootNavigator from "./src/Navigation/RootNavigator";
import { Provider } from "react-redux";
import { store } from "./src/app/store";

export default function App() {
  return (
    <Provider store={store}>
      <RootNavigator />
    </Provider>
  );
}
