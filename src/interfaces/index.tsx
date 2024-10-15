export interface IService {
  title: string;
  description: string;
  icon?: string;
}

export interface CarGalleryProps {
  type: string;
}

export interface Car {
  name: string;
  image_path: string;
  fuel_type: string;
  tank_capacity: string;
  cambio_type: string;
}

export interface CarCardProps {
  cars: Car[];
}
