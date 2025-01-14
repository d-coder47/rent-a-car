import { createContext, ReactNode, useContext, useState } from "react";
import { ICar } from "../interfaces";

interface CarContextType {
  cars: ICar[] | null;
  updateCars: (newCars: ICar[]) => void;
}

// Create Context
export const CarContext = createContext<CarContextType>({
  cars: null,
  updateCars: () => {},
});

interface CarProviderProps {
  children: ReactNode;
}

// Create a Provider component
export const CarProvider = ({ children }: CarProviderProps) => {
  const [cars, setCars] = useState<ICar[]>([]);

  const updateCars = (newCars: ICar[]) => {
    setCars(newCars);
  };

  return (
    <CarContext.Provider value={{ cars, updateCars }}>
      {children}
    </CarContext.Provider>
  );
};

export const useCar = (): CarContextType => {
  const context = useContext(CarContext);
  if (!context) {
    throw new Error("useCar must be used within a CarContext");
  }
  return context;
};
