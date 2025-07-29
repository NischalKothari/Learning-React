import { useEffect, useState, useCallback, useRef } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  //useRef hook

  const passwordRef = useRef(null);

  const passGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*-_=+[]{}~`";

    for (let index = 1; index <= length; index++) {
      let char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, numberAllowed, charAllowed]);

  useEffect(() => {
    passGenerator();
  }, [length, numberAllowed, charAllowed, passGenerator]);

  const copypass = useCallback(() => {
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0,99);
    window.navigator.clipboard.writeText(password)
  }, [password]);

  // Add this to your component
  useEffect(() => {
    const card = document.querySelector(".conic-border");
    let angle = 0;

    const animate = () => {
      angle = (angle + 1) % 360;
      card.style.setProperty("--angle", `${angle}deg`);
      requestAnimationFrame(animate);
    };

    const animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, []);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-800">
      <div className="conic-border">
        <div
          id="card"
          className="relative bg-gray-900 w-full max-w-3xl mx-auto px-4 py-3 my-3 overflow-hidden"
        >
          <h1 className="text-4xl text-center text-white font-serif mt-3">
            Password generator
          </h1>
          <div className="w-full max-w-lxl mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-600 text-white font-mono">
            <div className="flex bg-white text-black shadow rounded-lg overflow-hidden mb-4">
              <div className="bg-green-500 w-2"></div>
              <input
                type="text"
                value={password}
                placeholder="PASSWORD"
                className="outline-none w-full py-1 px-3" id="sel"
                readOnly
                ref={passwordRef}
              />
              <button
                className="outline-none px-3 py-0.5 shrink-0 bg-red-400 text-white hover:bg-red-500 cursor-pointer font-serif"
                onClick={copypass}
              >
                copy
              </button>
            </div>
            <div className="flex text-lg gap-x-8 font-mono flex-wrap">
              <div className="flex items-center gap-x-2">
                <input
                  type="range"
                  min={6}
                  max={55}
                  value={length}
                  className="cursor-pointer accent-green-400 hover:accent-purple-400"
                  onChange={(e) => setLength(Number(e.target.value))}
                />
                <label>Length: {length}</label>
              </div>
              <div className="flex items-center gap-x-1">
                <input
                  type="checkbox"
                  checked={numberAllowed}
                  onChange={() => {
                    setNumberAllowed((prev) => !prev);
                  }}
                />
                <label>Numbers</label>
              </div>
              <div className="flex items-center gap-x-1">
                <input
                  type="checkbox"
                  checked={charAllowed}
                  onChange={() => {
                    setCharAllowed((prev) => !prev);
                  }}
                />
                <label>Special Characters</label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
