import Image from 'next/image';
import Link from 'next/link';

interface ProductCardProps {
  imgURL: string;
  name: string;
  price: string;
  category: string;
  discount?: string;
}

const ProductCard = ({ imgURL, name, price, category, discount }: ProductCardProps) => {
  return (
    <div className="group flex flex-col relative">
      <div className="relative w-full h-[350px] overflow-hidden rounded-lg shadow-lg">
        <Image
          src={imgURL || "/images/placeholder.jpg"}
          alt={name}
          fill
          style={{ objectFit: "cover" }}
          className="transition-transform duration-500 group-hover:scale-110"
        />
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
          <button className="bg-black text-white font-bold py-2 px-6 rounded-full opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
            Add to Cart
          </button>
        </div>
        {/* Discount Badge */}
        {discount && (
          <div className="absolute top-2 left-2 bg-red-500 text-white font-bold text-xs px-2 py-1 rounded-full animate-bounce">
            {discount} OFF
          </div>
        )}
      </div>
      <Link href={`/product/${name.toLowerCase().replace(/\s+/g, '-')}`}>
        <div className="mt-4 text-center">
          <h3 className="mt-1 text-lg font-semibold text-dark-text hover:text-accent transition-colors">{name}</h3>
          <p className="mt-1 font-bold text-gray-800">{price}</p>
          <p className="text-sm text-gray-500 mt-1">{category}</p>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
