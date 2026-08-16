import Link from "next/link";

const AdminSidebar = () => {  
  return (
 <section className="h-screen w-64 bg-[#333b4e] text-white">
      <div className=" px-5 pt-5">
        <h2 className="mb-6 text-xl font-bold">Admin Side </h2>
      </div>
      <div className="bg-[#0F172A] h-screen p-5">
        <nav className="flex flex-col gap-4">
          <Link href="/admin/users">User</Link>
          <Link href="/admin/brands">Brands</Link>
          <Link href="/admin/categories">Categories</Link>
          <Link href="/admin/products">Products</Link>
        </nav>
      </div>
    </section>
  )};
export default AdminSidebar;