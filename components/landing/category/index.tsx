import Link from 'next/link'
import { FaChevronDown } from "react-icons/fa6";
import CategoryCard from './card';
import CategoryList from './list';



const CategoriesList = () => {
  return (
    <section className='px-30 py-10'>
        
        {/* heading section */}
        <header className='flex justify-between items-center'>
            {/* left */}
            <div>
                <h3 className='text-xl font-semibold'>Featured Categories</h3>
                <p className='text-sm text-gray-500'>Discover our featured categories</p>
            </div>
            {/* right */}
            <Link href={"#"}>
                <div className='flex items-center text-gray-500 font-medium text-[14px] hiver:text-primary-hover transition-all duration-300'>
                    <span className='text-[16px]'>Explore More</span>
                    <FaChevronDown size={19} className='mt-0.5'/>

                </div>
            </Link>

        </header>

        {/* list categories */}
        <CategoryList/>
    </section>
  )
}

export default CategoriesList
