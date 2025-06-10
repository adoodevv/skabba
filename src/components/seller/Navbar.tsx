import { useAppContext } from '@/context/AppContext'

const Navbar = () => {

   const { router } = useAppContext()

   return (
      <div className='flex items-center px-4 md:px-8 py-3 justify-between border-b'>
         <button onClick={() => router.push('/')}>
            <h1 className="text-2xl font-bold">Skabba</h1>
         </button>
         <button className='bg-gray-600 text-white px-5 py-2 sm:px-7 sm:py-2 rounded-full text-xs sm:text-sm'>Logout</button>
      </div>
   )
}

export default Navbar