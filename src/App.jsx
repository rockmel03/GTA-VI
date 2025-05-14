import { useState } from "react";
import Hero from "./components/Hero";
import Loader from "./components/Loader";

function App() {
  const [showContent, setShowContent] = useState(false);
  return (
    <>
      <Loader onLoading={() => setShowContent(true)} />
      {showContent && (
        <main className="main w-full overflow-hidden bg-black text-white">
          <Hero />
          <section className="w-full md:h-screen ">
            <div className="w-full h-full flex flex-col md:flex-row">
              <div className="flex-1 grid place-items-center">
                <div className="md:w-8/10 ">
                  <img
                    src="imag.png"
                    alt=""
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
              <div className="flex-1 grid place-items-center">
                <div className="p-5 md:w-8/10 flex flex-col gap-5">
                  <h2 className="text-6xl">
                    <div>Still Running</div>
                    <div>Not Hunting</div>
                  </h2>
                  <p className="text-xl font-sans">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Illo nisi sequi deleniti dolore autem modi eum quis cum
                    repellendus vero illum voluptatum quasi molestias harum
                    magni, provident, sunt doloremque veniam.
                  </p>
                  <p className="text-xl font-sans">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
                    quis porro nesciunt accusantium itaque dolore rerum ea
                    asperiores, at nobis.
                  </p>
                  <button className="text-xl w-fit font-semibold rounded-md bg-yellow-500 px-6 py-4">
                    Download Now
                  </button>
                </div>
              </div>
            </div>
          </section>
        </main>
      )}
    </>
  );
}

export default App;
