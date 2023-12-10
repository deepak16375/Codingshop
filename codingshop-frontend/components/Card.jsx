import Image from "next/image";
import Link from "next/link";

const Card = (props) => {
  const { title, description, image, pricing, date } = props;
  const day = date.split('-')[1];
  const isLiveDay = day === '12';

  return (
    <div className='w-64 h-[20rem] rounded-xl shadow-lg' onClick={() => {}}>
      <div className='w-full h-1/2 bg-slate-200 rounded-xl rounded-b-none relative'>
        <Image src={image} alt={title} layout="responsive" sizes="400px" width={500} height={100} objectFit="cover" />
        {isLiveDay && (
          <div className="absolute top-2 right-2 text-white bg-red-500 px-2 py-1 rounded-md">
            Live
          </div>
        )}
      </div>
      <div className='w-full h-1/2 rounded-xl rounded-t-none p-5 flex flex-col gap-1 relative'>
        <h2 className='text-lg'>{title}</h2>
        <p className='text-sm'>{date}</p>
        <p className='text-xs'>{pricing}</p>
        {isLiveDay && (
          <Link href="https://studio-codingshop.vercel.app">
          <button className="absolute bottom-2 right-2 bg-red-500 text-white px-3 py-1 rounded-md">
            Go Live
          </button>
          </Link>
        )}
        <p>Free</p>
      </div>
    </div>
  );
}

export default Card;
