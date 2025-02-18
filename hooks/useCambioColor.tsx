import { PaletteType } from "@/Types/PaleteTypes";
import { useState } from "react";

const chroma = require("chroma-js");

const useColor =()=>{
    const [color, setColor] = useState<string[]>([]);
   
    const GenerateColor = (
        type: PaletteType = "complementary",
        count: number = 6
    ) => {
        const Colorbase = chroma.random();

        let colors: string [] = [];
        switch(type){
            case "complementary":
                colors= chroma.Colors
                break;
            default: 
            break
      setColor(colors);
        }
    };
    return{
        color,
        GenerateColor,
    };
};

export default useColor;