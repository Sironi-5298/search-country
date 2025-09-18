import { Outlet } from "react-router-dom"
import Header from "../components/Header"

export default function Root() {
    return (
        <div className="bg-gray-100 min-h-screen">
            <Header />
            <Outlet />
        </div>
    )
}