import { useQuery } from '@tanstack/react-query';
import Product from '../interfaces/Product';

const PRODUCTS_URL =
  'https://starsoft-challenge-7dfd4a56a575.herokuapp.com/v1/products?page=1&limit=20';

const searchAllProducts = async (): Promise<{ data: Product[] }> => {
  const response = await fetch(PRODUCTS_URL);

  return await response.json();
};

const useStarSoftProducts = () => {
  const query = useQuery({
    queryKey: ['products'],
    queryFn: searchAllProducts,
  });

  return {
    ...query,
    data: query.data?.data,
  };
};

export { useStarSoftProducts, searchAllProducts };
