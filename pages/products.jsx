import Layout from "@/components/Layout.jsx";
import Link from "next/link";

export default function Products() {
  return (
    <>
    <Layout>
      <Link href='/products/new' className="border-green-700 rounded-lg border p-2 shadow-lg bg-gray-100 text-sm" >הוספת מוצר חדש</Link>
    </Layout>
    </>
  )
}