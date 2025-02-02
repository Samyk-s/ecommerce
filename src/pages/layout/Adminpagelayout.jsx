import { Sidebar } from "flowbite-react";
import { BiBuoy } from "react-icons/bi";
import { HiArrowSmRight, HiChartPie, HiInbox, HiShoppingBag, HiTable, HiUser, HiViewBoards } from "react-icons/hi";
import { Outlet } from "react-router-dom";

const AdminPageLayout = () => {
    return (
        <div className="flex">
            {/* Sidebar */}
            <Sidebar aria-label="Sidebar with content separator example">
                <Sidebar.Items>
                    <Sidebar.ItemGroup>
                        <Sidebar.Item href="/admin" icon={HiChartPie}>
                            Dashboard
                        </Sidebar.Item>
                        <Sidebar.Item href="/admin/product" icon={HiViewBoards}>
                            Product
                        </Sidebar.Item>
                        <Sidebar.Item href="/admin/inbox" icon={HiInbox}>
                            Inbox
                        </Sidebar.Item>
                        <Sidebar.Item href="/admin/users" icon={HiUser}>
                            Users
                        </Sidebar.Item>
                        <Sidebar.Item href="/admin/products" icon={HiShoppingBag}>
                            Products
                        </Sidebar.Item>
                        <Sidebar.Item href="/admin/signin" icon={HiArrowSmRight}>
                            Sign In
                        </Sidebar.Item>
                        <Sidebar.Item href="/admin/signup" icon={HiTable}>
                            Sign Up
                        </Sidebar.Item>
                    </Sidebar.ItemGroup>
                    <Sidebar.ItemGroup>
                        <Sidebar.Item href="/admin/upgrade" icon={HiChartPie}>
                            Upgrade to Pro
                        </Sidebar.Item>
                        <Sidebar.Item href="/admin/docs" icon={HiViewBoards}>
                            Documentation
                        </Sidebar.Item>
                        <Sidebar.Item href="/admin/help" icon={BiBuoy}>
                            Help
                        </Sidebar.Item>
                    </Sidebar.ItemGroup>
                </Sidebar.Items>
            </Sidebar>

            {/* Main Content Area */}
            <div className="flex-1 p-6">
                <Outlet /> {/* This will render the matched child route component */}
            </div>
        </div>
    );
};

export default AdminPageLayout;