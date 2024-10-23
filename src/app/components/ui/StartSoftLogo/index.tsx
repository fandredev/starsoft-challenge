import Image from 'next/image';

interface StarSoftLogoProps {
  logoPath: string;
  alt: string;
}

export default function StartSoftLogo({
  logoPath = '/images/starsoft_logo.svg',
  alt = 'Logotipo da empresa Starsoft',
}: Partial<StarSoftLogoProps>) {
  return <Image src={logoPath} alt={alt} width={101} height={64} />;
}
