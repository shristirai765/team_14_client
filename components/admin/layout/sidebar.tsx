import Link from "next/link";
import react from "react";
const AdminSidebar = () => {
  return (
 <section className="h-screen w-64 bg-[#0F172A] p-5 text-white">
      <h2 className="mb-6 text-xl font-bold"> AdminSidebar </h2>

      <nav className="flex flex-col gap-4">
        <Link href="/admin/brands">Brands</Link>
        <Link href="/admin/categories">Categories</Link>
        <Link href="/admin/products">Products</Link>
      </nav>
    </section>
  )};
export default AdminSidebar;