"use client"
import { getAllUsers } from '@/api/user.api'
import Button from '@/components/common/button'
import { TUser } from '@/types/user.type'
import { useQuery } from '@tanstack/react-query'

const UserTable = () => {

    const { isLoading, data } = useQuery({
        queryFn : getAllUsers,
        queryKey: ["get-all-users"]
    })
  return (
    <div className='container px-4 py-4 w-300'>
      <h1 className='font-bold text-lg mb-5 text-gray-700'>User Management</h1>

      <div className='overflow-x-auto border border-gray-400 rounded-md shadow-md'>
        <table className=' text-sm text-left min-w-full divide-y divide-gray-400 bg-white '>
            <thead className='g-gray-50 text-md font-semibold uppercase text-gray-700'>
                <tr className='divide-x'>
                    <th className='px-6 py-4'>ID</th>
                    <th className='px-6 py-4'>Name</th>
                    <th className='px-6 py-4'>Email</th>
                    <th className='px-6 py-4'>Role</th>
                    <th className='px-6 py-4'></th>
                </tr>
            </thead>
            <tbody className='divide-y divide-gray-400'>
                {
                    data?.data?.map((user: TUser)=>(
                        <tr key={user._id} className='hover:bg-amber-100  divide-x'>
                            <td className='hover:bg-amber-50 whitespace-nowrap px-6 py-4 font-md text-gray-900'>{user._id}</td>
                            <td className='hover:bg-amber-50 whitespace-nowrap px-6 py-4 font-md text-gray-900'>{user.full_name}</td>
                            <td className='hover:bg-amber-50 whitespace-nowrap px-6 py-4 font-md text-gray-900'>{user.email}</td>
                            <td className='hover:bg-amber-50 whitespace-nowrap px-6 py-4 font-md text-gray-900'>
                                <span className="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">
                                    {user.role}
                                </span>
                            </td>
                            <td>
                                <div className='size-sm'>
                                    <Button label='edit'/>
                                </div>
                            </td>

                        </tr>
                    ))
                }
            </tbody>
        </table>
      </div>
    </div>
  )
}

export default UserTable
