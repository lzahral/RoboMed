import { useContext } from "react";
import { ThemeContext } from "styled-components";
import { Btn } from "../styles/mixins";
import { IoSunnyOutline, IoMoonOutline } from "react-icons/io5";

const ThemeToggler = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <Btn onClick={() => toggleTheme(theme === "light" ? "dark" : "light")}>
            {theme === "dark" ? (
                <IoMoonOutline className='fs-5' />
            ) : (
                <IoSunnyOutline className='fs-5' />
            )}
        </Btn>
    );
};
export default ThemeToggler;
