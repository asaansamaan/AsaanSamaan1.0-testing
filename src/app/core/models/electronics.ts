import {BASICITEM, POWERMANAGMENT, CAMERAOBJ, SYSTEMSSPECS, DIMENSIONS} from './ASmodels';

export interface MOBILEPHONES extends BASICITEM {
    weight: number;
    display: string;
    dimensions: DIMENSIONS;
    camera: CAMERAOBJ;
    powerManagment: POWERMANAGMENT;
    systemSpecifications: SYSTEMSSPECS;
}
export interface WASHINGMACHINE extends BASICITEM {
    weight: number;
    dimensions: DIMENSIONS;
    material: string;
    numberOfWashes: string;
    loadingType: string;
    extraRinse: boolean;
    capacity: number;
    tempControl: boolean;
    powerManagment: POWERMANAGMENT;
    systemSpecifications: SYSTEMSSPECS;
}
export interface TELEVISION extends BASICITEM {
    weight: number;
    dimensions: DIMENSIONS;
    aspectRation: string;
    material: string;
    displayType: string;
    screenSize: string;
    powerManagment: POWERMANAGMENT;
    systemSpecifications: SYSTEMSSPECS;
}
