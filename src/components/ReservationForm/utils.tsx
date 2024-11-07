import { IVehicle } from "../../interfaces";

export const handleGridSize = (vehicles: IVehicle[], defaultSize: number) => {
  let size = defaultSize;

  const length = vehicles.length;

  if (length === 1) {
    size = 12;
  }

  if (length === 2) {
    size = 6;
  }

  if (length === 3) {
    size = 4;
  }

  return size;
};
