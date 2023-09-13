import {MouseEventHandler} from "react";
import SearchManufacturer from '../components/SearchManufacturer';
import { manufacturers } from '../constants/index';

export interface CustomButtonProps {
    text: string;
    containerStyle?: string;
    handleClick?:
    MouseEventHandler<HTMLButtonElement>
    btnType?: 'button' | 'submit' ;
    textStyles?: string;
    rightIcon?: string;
    isDisabled?: boolean;
}

export interface SearchManufacturerProps {
    manufacturer: string;
    setManufacturer: (manufacturer: string) => void;
}

export interface CarProps {
city_mpg: number;
class: string;
combination_mpg: number;
cylinders: number;
displacement: number;
drive: string;
fuel_type: string;
highway_mpg: number;
make: string;
model: string;
transmission: string;
year: number;
}
export interface FilterProps {
    manufacturer: string;
    model: string;
    year: number;
    limit: number
    fuel: string;
}

export interface OptionsProps {
value: string;
title: string;
}

export interface customFilterProps {
    title: string;
    options: OptionsProps[];
}
export interface ShowMoreProps {
    pageNumber: number;
    isNext: boolean;
}

export interface SearchManuFacturerProps {
    manufacturer: string;
    setManuFacturer: (manufacturer: string) => void;
}