import { useState } from "react";
import { Pages } from "./routes";

function App() {
  const [count, setCount] = useState(0);

  return <Pages />;
}

export default App;
