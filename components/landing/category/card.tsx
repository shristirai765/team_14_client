import { ICategory } from '@/types/category.type'
import Image from 'next/image'

interface IProps{
    category: ICategory
}
const CategoryCard = ({category: {name, logo, description, _id}}: IProps) => {
  return (
    <div className='cursor-pointer flex border border-primary max-w-100 h-fit gap-2 items-center p-1 rounded-md hover:translate-y-1 hover:bg-primary-lighter/60 transition-all duration-300'>
        {/* image */}
        <div className='h-16 w-16 rounded-sm overflow-clip shrink-0 '>
            <Image
                src={logo.path}
                alt= {name + "-" + "image"}
                className= "h-full w-full"
                height= {800}
                width= {800}
            />
        </div>
        {/* name and desc */}
        <div className='flex flex-col'>
            <p className='text-md font-semibold text-gray-700'>{name}</p>
            <p className='line-clamp-2 text-sm leading-4'>{description}</p>
        </div>

      
    </div>
  )
}

export default CategoryCard
