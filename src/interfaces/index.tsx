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
}

export interface ICarCard {
  car: ICar;
}
