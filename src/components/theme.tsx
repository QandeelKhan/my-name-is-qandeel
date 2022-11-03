import { useEffect, useState } from "react";
import "../CssBaselines.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { RootState } from "../app/store";
import { setThemeMode } from "../features/themeSlice";

const Theme = () => {
    const dispatch = useDispatch();
    const { themeMode } = useSelector((state: RootState) => state.theme);

    // set theme
    const handleClick = (theme: any) => {
        dispatch(setThemeMode(theme));
        localStorage.setItem("mode", theme);
    };

    useEffect(() => {
        const currentThemeMode = localStorage.getItem("mode");
        // if found
        if (currentThemeMode) {
            dispatch(setThemeMode(currentThemeMode));
        }
    }, []);

    return (
        <div id="theme-options-wrapper">
            <div
                id="light-mode"
                className={`theme-dot ${
                    themeMode === "light-mode" ? "active" : ""
                }`}
                onClick={() => handleClick("light-mode")}
            ></div>
            <div
                id="blue-mode"
                className={`theme-dot ${
                    themeMode === "blue-mode" ? "active" : ""
                }`}
                onClick={() => handleClick("blue-mode")}
            ></div>
            <div
                id="green-mode"
                className={`theme-dot ${
                    themeMode === "green-mode" ? "active" : ""
                }`}
                onClick={() => handleClick("green-mode")}
            ></div>
            <div
                id="purple-mode"
                className={`theme-dot ${
                    themeMode === "purple-mode" ? "active" : ""
                }`}
                onClick={() => handleClick("purple-mode")}
            ></div>
        </div>
    );
};

export default Theme;
