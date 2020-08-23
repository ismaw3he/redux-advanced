import {BUY_WINE} from "./wineTypes";
 	  
export const buyWine = (number = 1) =>{
    return{
        type: BUY_WINE,
        payload: number
    }
}