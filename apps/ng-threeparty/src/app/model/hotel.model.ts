export interface Hotel {
  id: number;
  name: string;
  lat: number;
  lng: number;
  price: number;
  imgUrl: string;
  rating: number;
  givenRating: number;
  shortdescription: string;
  tags: string[];
}
