import React, { FC } from "react";
import Svg, { Path } from "react-native-svg";

export const BackIcon: FC<{ width?: number, height?: number, color?: string }> = ({ width, height, color }) => {
    return (
        <Svg width={width || "36"} height={height || "36"} fill="none" viewBox="0 0 36 36">
            <Path stroke={color || "#000"} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 10l-10 8.5L21 27" />
        </Svg>
    )
};
