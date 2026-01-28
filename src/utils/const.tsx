
interface Range {
  min: number;
  max: number;
  label: string;
}
export type SuitDimension = 
  | "height" | "neck" | "shoulders" | "chest" | "stomach" 
  | "sleeve" | "bicep" | "waist" | "inseam" | "outseam" 
  | "thigh" | "knee";

export const DIMENSION_LIMITS: Record<SuitDimension, Range> = {
  height:    { min: 50, max: 300, label: "Height" },
  neck:      { min: 25,  max: 60,  label: "Neck Circumference" },
  shoulders: { min: 25,  max: 70,  label: "Shoulder Width" },
  chest:     { min: 60,  max: 170, label: "Chest Circumference" },
  stomach:   { min: 50,  max: 180, label: "Stomach Circumference" },
  sleeve:    { min: 45,  max: 90,  label: "Sleeve Length" },
  bicep:     { min: 15,  max: 70,  label: "Bicep Circumference" },
  waist:     { min: 50,  max: 170, label: "Trouser Waist" },
  inseam:    { min: 50,  max: 110, label: "Inseam" },
  outseam:   { min: 70,  max: 150, label: "Outseam" },
  thigh:     { min: 30,  max: 90,  label: "Thigh Circumference" },
  knee:      { min: 20,  max: 60,  label: "Knee Circumference" }
};
