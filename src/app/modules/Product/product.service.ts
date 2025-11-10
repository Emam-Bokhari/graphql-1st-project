import ApiError from '../../errors/ApiError';
import { TProduct } from './product.interface';
import { Product } from './product.model';


const createProductToDB = async (input: TProduct) => {
  const product = await Product.create(input);
  if (!product) {
    throw new ApiError(400, 'Failed to create product');
  }
  return product;
};

const getProductsFromDB = async () => {
  const products = await Product.find();

  if (!products || products.length === 0) {
    throw new ApiError(404, 'No products are found in the database');
  }

  return products;
};

const getProductByIdFromDB = async (id: string) => {
  const product = await Product.findById(id);
  if (!product) {
    throw new ApiError(404, `No product are found by this ${id}`);
  }

  return product;
};

const updateProductByIdToDB = async (id: string, input: Partial<TProduct>) => {
  const product = await Product.findByIdAndUpdate(id, input, { new: true });
  if (!product) {
    throw new ApiError(400, 'Failed to update product');
  }

  return product;
};

const deleteProductByIdFromDB = async (id: string) => {
  const product = await Product.findByIdAndDelete(id);
  if (!product) {
    throw new ApiError(400, `Failed to delete product by ${id}`);
  }

  return product;
};

export const ProductServices = {
  createProductToDB,
  getProductsFromDB,
  getProductByIdFromDB,
  updateProductByIdToDB,
  deleteProductByIdFromDB,
};
