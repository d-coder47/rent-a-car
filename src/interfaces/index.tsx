export interface IService {
  title: string;
  description: string;
  icon?: string;
}

export interface ICarGallery {
  type: string;
}

export interface ICar {
  name: string;
  image_path: string;
  fuel_type: string;
  tank_capacity: string;
  cambio_type: string;
  people_number: number;
  price: number;
}

export interface ICarCard {
  car: ICar;
  type: string;
}

export interface IVehicle {
  id: string;
  name: string;
}

export interface IReservationInfo {
  name: string;
  email: string;
  phone: string;
  identificationDoc: {
    filePath: string;
    fileType: string;
  };
  driverLicence: {
    filePath: string;
    fileType: string;
  };
  vehicle: IVehicle[];
  price: number;
  days: number;
}

export interface IFieldsErrors {
  name: string;
  email: string;
  phone: string;
  identificationDoc: string;
  driverLicence: string;
  vehicle: string;
  price: string;
  days: string;
}

export interface ISelectedVehicle {
  name: string;
  image: string;
}

export interface IStep {
  reservationValues: IReservationInfo;
  fieldsErrors: IFieldsErrors;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
