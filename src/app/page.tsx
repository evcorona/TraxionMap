import Image from 'next/image';

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <Image
        src='/traxion_logo.svg'
        alt='Traxion Logotype'
        width={180}
        height={37}
        priority
      />
      <h1>Technical test</h1>
    </main>
  );
}
