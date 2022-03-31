import React, { FC } from "react";
import Svg, { Path, G } from "react-native-svg";

export const FavoritesListIcon: FC<{ width?: number, height?: number, color?: string }> = ({ width, height, color }) => {
    return (
        <Svg
            width={width || "25"}
            height={height || "25"}
            fill={color || "#000"}
            viewBox="0 0 48.84 48.84"
        >
            <Path d="M46.503 48.839H2.337A2.337 2.337 0 010 46.502V2.337A2.337 2.337 0 012.337 0h44.166a2.337 2.337 0 012.337 2.337v44.165a2.337 2.337 0 01-2.337 2.337zM4.674 44.166h39.492V4.674H4.674v39.492z" />
            <Path d="M11.015 8.724L12.295 11.317 15.157 11.734 13.086 13.752 13.576 16.603 11.015 15.257 8.455 16.603 8.945 13.752 6.873 11.734 9.736 11.317z" />
            <Path d="M13.576 18.161c-.248 0-.498-.059-.725-.179l-1.835-.965-1.835.965A1.56 1.56 0 016.92 16.34l.351-2.043-1.483-1.447a1.556 1.556 0 01.863-2.657l2.052-.3.915-1.858c.527-1.065 2.269-1.065 2.795 0l.917 1.858 2.052.3a1.557 1.557 0 01.863 2.657l-1.484 1.447.351 2.043a1.559 1.559 0 01-1.536 1.821zm-2.561-4.463c.173 0 .347.029.513.086a1.56 1.56 0 01.317-.977 1.554 1.554 0 01-.83-.603 1.56 1.56 0 01-.83.603c.213.281.325.625.317.977.166-.057.34-.086.513-.086zM37.053 14.222H19.627a1.557 1.557 0 110-3.116h17.426a1.558 1.558 0 110 3.116z" />
            <Path d="M11.015 21.189L12.295 23.782 15.157 24.2 13.086 26.217 13.576 29.069 11.015 27.721 8.455 29.069 8.945 26.217 6.873 24.2 9.736 23.782z" />
            <Path d="M13.576 30.626c-.248 0-.498-.06-.725-.181l-1.835-.963-1.835.963a1.55 1.55 0 01-1.641-.117 1.56 1.56 0 01-.62-1.523l.351-2.043-1.483-1.447a1.556 1.556 0 01.863-2.657l2.052-.3.915-1.858c.527-1.065 2.269-1.065 2.795 0l.917 1.858 2.052.3a1.557 1.557 0 01.863 2.657l-1.484 1.447.351 2.043a1.558 1.558 0 01-1.536 1.821zm-2.561-4.463c.173 0 .347.029.513.088a1.56 1.56 0 01.317-.977 1.556 1.556 0 01-.83-.604 1.566 1.566 0 01-.83.604c.213.28.325.625.317.977.166-.059.34-.088.513-.088zM37.053 26.686H19.627a1.557 1.557 0 110-3.117h17.426a1.558 1.558 0 010 3.117z" />
            <G>
                <Path d="M11.015 33.655L12.295 36.247 15.157 36.663 13.086 38.681 13.576 41.532 11.015 40.186 8.455 41.532 8.945 38.681 6.873 36.663 9.736 36.247z" />
                <Path d="M13.576 43.091c-.248 0-.498-.06-.725-.181l-1.835-.963-1.835.963a1.556 1.556 0 01-2.261-1.641l.351-2.043-1.483-1.446a1.557 1.557 0 01.863-2.659l2.052-.299.915-1.857c.527-1.064 2.269-1.064 2.795 0l.917 1.857 2.052.299a1.558 1.558 0 01.863 2.659l-1.484 1.446.351 2.043a1.559 1.559 0 01-1.536 1.822zm-2.561-4.463c.173 0 .347.028.513.087a1.56 1.56 0 01.317-.977 1.55 1.55 0 01-.83-.604 1.566 1.566 0 01-.83.604c.213.281.325.625.317.977.166-.058.34-.087.513-.087z" />
            </G>
            <G>
                <Path d="M37.053 39.151H19.627a1.557 1.557 0 110-3.116h17.426a1.558 1.558 0 110 3.116z" />
            </G>
        </Svg>
    )
};