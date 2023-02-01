import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'
import Navbar from '../../components/navbar'


export default function Staff() {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>Staff - EarthCraft</title>
        <meta name="description" content="Earthcraft" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='bg-[#292929] h-screen'>
    <Navbar />
    <p className='text-7xl bg-mcbg1 bg-fixed bg-no-repeat bg-cover py-1 text-center mt-[5vh] text-white tracking-widest' style={{fontFamily:"'Minecraftia', sans-serif"}}>ABOUT</p>
    <div className='flex'>
          <p className='text-center mx-auto text-white text-4xl mt-[10vh] w-full sm:w-[70vw]'>EarthCraft is the most advanced Earth Themed SMP server on Minecraft. Founded in September 2019 by FrenchFries8854, the server has undergone many improvements and upgrades. From a 1:1000 scale, to a 1:500 scale, and now a 1:200 scale, the server has come a long way. This journey would not have been possible without the contributions of the many players and staff members who have come and gone over the years. Their hard work and dedication have helped to make EarthCraft the amazing server it is today.</p>
    </div>
    <div className='flex'>
    <button onClick={() => router.push('/about/staff')} className='mt-[10vh] bg-white rounded mx-auto p-2 mb-5 sm:p-3 tracking-widest text-1xl sm:text-5xl font-light'>VIEW STAFF</button>

    </div>



    </div>
    </>
  )
}
