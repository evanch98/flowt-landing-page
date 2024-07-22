import Image from 'next/image';

interface PartnerCardProps {
  imgSrc: string;
  name: string;
}

export const PartnerCard = ({ imgSrc, name }: PartnerCardProps) => {
  return (
    <div className="flex items-center gap-x-2 md:gap-x-3">
      <div className="relative size-4 md:size-10">
        <Image
          src={imgSrc}
          alt={name}
          fill
          className="object-fill"
        />
      </div>
      <p className="text-subtitleM md:text-h6">{name}</p>
    </div>
  );
};
