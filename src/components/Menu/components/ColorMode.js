import React from "react";

export const ColorModeContext = React.createContext({
    mode: "",
    setMode: () => { alert("Você precisa me configurar primeiro") },
    toggleMode: () => { alert("Você precisa me configurar primeiro") }
});

//Pega o children no _app.js, que neste caso é o ThemeProvider
export default function ColorModeProvider(props) {
    const [mode, setMode] = React.useState(props.initialMode);

    function toggleMode() {
        if(mode === "dark") setMode("light")
        if(mode === "light") setMode("dark")
    }
    return(
        // Entender o porque está sendo ignorado
        <ColorModeContext.Provider value={{mode: mode, setMode: setMode, toggleMode: toggleMode}}>
            {props.children}
        </ColorModeContext.Provider>
    )
}