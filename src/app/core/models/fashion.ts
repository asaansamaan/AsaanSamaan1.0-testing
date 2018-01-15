import { BASICITEM, POWERMANAGMENT, CAMERAOBJ, SYSTEMSSPECS, DIMENSIONS } from './ASmodels';

export interface TOPWEAR extends BASICITEM {
    bundle: boolean;
    fabric: string;
    topStyle: string;
    size: number;
    targetedGroup: 'male' | 'female';
    sleeveLength: string;
    neckStyle: string;
    color: string;
    season: string;
    occasion: string;
}
export interface PANTS extends BASICITEM {
    bundle: boolean;
    fabric: string;
    pantStyle: string;
    size: number;
    targetedGroup: 'male' | 'female' | 'both';
    sleeveLength: string;
    neckStyle: string;
    color: string;
    season: string;
    occasion: string;
}
export interface WATCHWEAR extends BASICITEM {
    bundle: boolean;
    material: string;
    waterResistant: number;
    movenmentType: number;
    targetedGroup: 'male' | 'female' | 'both';
    type: string;
    style: string;
    color: string;
    occasion: string;
}
