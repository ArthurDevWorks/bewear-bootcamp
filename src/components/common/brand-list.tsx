import Image from "next/image";

interface BrandListProps {
  title: string;
};

const brands = [
  { src: "/brand-01.svg", name: "Nike" },
  { src: "/brand-02.svg", name: "Adidas" },
  { src: "/brand-03.svg", name: "Puma" },
  { src: "/brand-04.svg", name: "New Balence" },
  { src: "/brand-05.svg", name: "Converse" },
  { src: "/brand-06.svg", name: "Polo" },
  { src: "/brand-07.svg", name: "Zara" },
];

export default function BrandList({title}: BrandListProps) {
  return (
    <div className="space-y-4">
      <h3 className="px-5 font-semibold">{title}</h3>
      <div className="flex w-full gap-4 overflow-x-auto px-5 [&::-webkit-scrollbar]:hidden">
        {brands.map((brand, idx) => (
          <div
            key={idx}
            className="flex min-w-[100px] flex-col items-center justify-center rounded-xl bg-white px-6 py-4 shadow-sm"
          >
            <Image
              src={brand.src}
              alt={brand.name}
              width={40}
              height={40}
              className="object-contain"
            />
            <p className="mt-2 text-center text-sm font-medium">{brand.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
