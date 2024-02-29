import OfferCard from "../OfferCard";
import ArrowLeft from "../ArrowLeft";
import ArrowRight from "../ArrowRight";

const OfferList = () => {
  return (
    <div className="flex flex-col mb-16 px-2">
      <div className="flex flex-row w-full justify-center items-center gap-4 mt-12 mb-4">
        <ArrowLeft />
        <OfferCard
          productName="Ração Farmina N&D Prime Frango e Romã Puppy para Cães Filhotes de Raças Pequenas"
          originalPrice="R$ 166,23"
          finalPrice="R$ 184,70"
          productImage="https://royalpets.vteximg.com.br/arquivos/ids/225513-510-640/-r-a-rac-o-farmina-n-d-grain-free-frango-e-rom-puppy-para-c-es-filhotes-de-racas-pequenas.jpg?v=637685302662030000"
        />
        <OfferCard
          productName="Ração Golden Fórmula Light Cães Adultos Frango e Arroz - 15kg"
          originalPrice="R$ 176,90"
          finalPrice="Por: R$ 159,21"
          productImage="https://royalpets.vteximg.com.br/arquivos/ids/230002-510-640/-r-a-racao-golden-formula-light-cachorros-racas-grandes-adultos-frango-15-kg.jpg?v=637686957512300000"
        />
        <OfferCard
          productName="Bravecto Anti Pulgas e Carrapatos 40 a 56kg MSD - 1400mg"
          originalPrice="R$ 296,91"
          finalPrice="R$ 329,90"
          productImage="https://royalpets.vteximg.com.br/arquivos/ids/234962-510-640/-b-r-bravecto-anti-pulgas-e-carrapatos-40-a-56-kg.jpg?v=637686958874830000"
        />
        <OfferCard
          productName="Casinha Durahouse com Chaminé Preto para Cães – Durapets"
          originalPrice="R$ 44,91"
          finalPrice="R$ 49,90"
          productImage="https://royalpets.vteximg.com.br/arquivos/ids/245040-510-640/casinha-durahouse-chamine-preta-n-01-02-03-04-05-10284-01-10284-02-10284-03-10284-04-10284-05.jpg?v=637884749164600000"
        />
        <OfferCard
          productName="Kit Design Comedouro e Bebedouro Automático Rosa – Truqys Pets"
          originalPrice="R$ 86,31"
          finalPrice="R$ 95,90"
          productImage="https://royalpets.vteximg.com.br/arquivos/ids/245249-510-640/kit-design-comedouro-bebedouro-automatico-rosa-1330-2-ROSA.jpg?v=637902997858030000"
        />
        <ArrowRight />
      </div>
      <div className="self-end mr-28">
        <a href="#" className="no-underline font-bold text-base uppercase text-[#ffa60d]">Ver todos ➡</a>
      </div>
    </div>
  );
};

export default OfferList;
