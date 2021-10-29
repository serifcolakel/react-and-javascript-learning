import React, { useState } from "react";
import State from "./components/HookUseState";
import Effect from "./components/HookUseEffect";
import Context from "./components/HookUseContext";
import Reducer from "./components/HookUseReducer";
import Memo from "./components/HookUseMemo";
import Ref from "./components/HookUseRef";

const themes = {
  dark: {
    background: "#383838",
    color: "#fff",
  },
  light: {
    background: "#fff",
    color: "#000",
  },
};

//1.Context Oluştur
//default dark gelecek export diğer yerlerde kullanmak için
export const ThemeContext = React.createContext(themes.dark);

//2.Provider oluştur go to ---> satır 26

function App() {
  const [theme, setTheme] = useState(themes.dark);

  const toggleTheme = () => {
    if (theme === themes.dark) setTheme(themes.light);
    else setTheme(themes.dark);
  };

  return (
    <div className="App" style={{ padding: 50 }}>
      <Ref />
      <Memo />
      <Reducer />
      <button onClick={toggleTheme}>
        {theme === themes.dark ? "Dark Theme" : "Light Theme"}
      </button>
      <ThemeContext.Provider value={theme}>
        <Context />
      </ThemeContext.Provider>

      <State />
      <Effect />
    </div>
  );
}

export default App;
