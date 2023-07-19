export type Restaurant = {
  data: {
    id: number;
    name: string;
    address: string;
    landmark: string;
    cuisine: string;
    distance: number;
    time: number;
    photo: string;
    business_lunch: boolean;
    price: number;
  };
};

export type State = {
  post: Restaurant;
  posts: Restaurant[];
};
