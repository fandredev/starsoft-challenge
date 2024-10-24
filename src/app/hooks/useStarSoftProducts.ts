import { useInfiniteQuery } from '@tanstack/react-query';
import Product from '../interfaces/Product';

const PRODUCTS_URL =
  'https://starsoft-challenge-7dfd4a56a575.herokuapp.com/v1/products';

const MAXIMUM_QUANTITY_API_PAGES = 4; // https://starsoft-challenge-7dfd4a56a575.herokuapp.com/v1/docs#/default/ProductsController_findAll

const searchAllProducts = async (
  pageParam: number
): Promise<{ data: Product[] }> => {
  const response = await fetch(`${PRODUCTS_URL}?page=${pageParam}&limit=10`);
  if (!response.ok) {
    throw new Error('Erro ao buscar os produtos');
  }
  return await response.json();
};

const useStarSoftProducts = () => {
  const { data, isLoading, hasNextPage, fetchNextPage, isFetchingNextPage } =
    useInfiniteQuery({
      queryKey: ['products'],
      queryFn: ({ pageParam = 1 }) => searchAllProducts(pageParam),
      initialPageParam: 1,
      getNextPageParam: (_lastPage, pages) => {
        if (pages.length < MAXIMUM_QUANTITY_API_PAGES) return pages.length + 1;
        return undefined;
      },
    });

  return {
    data,
    isLoading,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
  };
};

export { useStarSoftProducts, searchAllProducts };
