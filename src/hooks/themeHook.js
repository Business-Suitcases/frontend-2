import {React, useState} from "react";

function SwitchTheme() {
    const [theme, setTheme] = useState("Light");
    const SwitchTheme = () => {
        setTheme((cur) => (cur === "light" ? "dark" : "light"));
    };
}
    export default SwitchTheme;