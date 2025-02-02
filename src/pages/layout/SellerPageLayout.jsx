import { Outlet } from "react-router-dom"

const SellerPageLayout = () => {
  return (
    <div className="bg-green-100 min-h-screen">
      <header className="bg-green-500 text-white p-4">
        <h1 className="text-2xl font-bold">Seller Dashboard</h1>
        {/* Add navigation menu for seller */}
      </header>
      <main className="p-4">
        <Outlet />
      </main>
    </div>
  )
}

export default SellerPageLayout

