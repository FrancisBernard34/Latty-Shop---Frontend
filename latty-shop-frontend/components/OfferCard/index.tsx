import Image from "next/image";

interface OfferCardProps {
  productName: string,
  originalPrice: string,
  finalPrice: string,
  productImage: string,
}

const OfferCard: React.FC<OfferCardProps> = ({ productName, originalPrice, finalPrice, productImage }) => {
  return (
    <div className="w-[268px] h-auto min-h-[500px] flex flex-col border-none p-4 bg-[#0e1114] cursor-pointer rounded-md">
      <div className="flex justify-center mb-2">
        <Image
          alt="product-image"
          src={productImage}
          width={182}
          height={132}
        />
      </div>
      <div className="tooltip text-left" data-tip={productName}>
        <p className="font-bold mb-4 line-clamp-3">{productName}</p>
      </div>
      <span className="line-through text-sm">{originalPrice}</span>
      <h3 className="font-bold text-xl">{finalPrice}</h3>
      <span className="text-sm mb-0">À vista no PIX</span>
      <button className="btn w-full h-[40px] bg-[#ffa60d] text-[#1a1a1a] hover:bg-[#1a1a1a] hover:text-[#ffa60d] duration-100 font-bold mt-auto rounded-md">COMPRAR</button>
    </div>
  );
};

export default OfferCard;
