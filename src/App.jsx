import { useState } from "react";
import Loader from "./components/Loader";

function App() {
  const [showContent, setShowContent] = useState(false);
  return (
    <>
      <Loader onLoading={() => setShowContent(true)} />
      {showContent && (
        <main className="main w-full overflow-hidden bg-black text-white"></main>
      )}
    </>
  );
}

export default App;
