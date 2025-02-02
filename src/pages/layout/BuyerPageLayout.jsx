import { Outlet } from "react-router-dom"

const BuyerPageLayout = () => {
  return (
    <div className="bg-blue-100 min-h-screen">
      <header className="bg-blue-500 text-white p-4">
        <h1 className="text-2xl font-bold">Buyer Dashboard</h1>
        {/* Add navigation menu for buyer */}
      </header>
      <main className="p-4">
        <Outlet />
      </main>
    </div>
  )
}

export default BuyerPageLayout

