import Image from 'next/image';

const Logo: React.FC = () => {
  return (
    <div className='select-none pointer-events-none'>
      <Image src="/logo.png" alt="Logo" width={100} height={88} style={{backgroundSize: '100%'}} />
    </div>
  );
};

export default Logo;