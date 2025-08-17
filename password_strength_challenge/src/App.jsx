import { useEffect, useState } from "react";
import { usePasswordStrength } from "./hooks/useStrength";

function App() {
  const [password, setPassword] = useState("");
  const strength = usePasswordStrength(password);
  const [color, setColor] = useState("red");
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    switch (strength) {
      case "Weak":
        setColor("red");
        break;
      case "Medium":
        setColor("orange");
        break;
      case "Strong":
        setColor("green");
        break;
      default:
        setColor("purple");
    }
  }, [password, strength]);
  return (
    <>
      <div
        className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
        style={{
          backgroundImage: `url('https://i.pinimg.com/1200x/67/65/4e/67654e36b98c49da27328f0971979e88.jpg')`,
        }}
      >
        <div className="w-full">
          <div className="w-full max-w-md mx-auto border rounded-lg px-2 py-5 bg-white">
            <label htmlFor="pass" className="mx-5 font-serrif">
              Enter your Password:{" "}
            </label>
            <input
              type={showPassword ? "text" : "password"}
              name="pass"
              id="pass"
              className="border rounded-md bg-gray-200 overflow-auto px-2 py-1"
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              className="bg-gray-500 border-black border-1  mx-1"
              onClick={() => setShowPassword(!showPassword)}
            >
              👁️
            </button>
            <p
              className="text-xl font-mono flex justify-center mt-2"
              style={{ color }}
            >
              {strength || "Start Typing the Password.."}
            </p>
            <div className="h-1 w-full bg-gray-200 mt-1">
              <div
                className={`h-full ${strength === "" ? "":
                  strength === "Weak"
                    ? "bg-red-500 w-1/3"
                    : strength === "Medium"
                    ? "bg-yellow-500 w-2/3"
                    : "bg-green-500 w-full"
                }`}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
