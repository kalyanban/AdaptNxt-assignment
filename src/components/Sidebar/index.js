import { AiOutlineDashboard } from "react-icons/ai"
import { CiShoppingTag, CiViewList, CiShare2 } from "react-icons/ci"
import { LiaShippingFastSolid } from "react-icons/lia"

import "./index.css"

const Sidebar = () => {
        return (
            <ul className="sidebar-elements-container">
                <li className="sidebar-item">
                    <button className="side-buttons">
                        <AiOutlineDashboard size={22} />
                        <p className="list-item-name">Dashboard</p>
                    </button>
                </li>
                <li className="sidebar-item">
                    <button className="side-buttons">
                        <CiShoppingTag size={22} />
                        <p className="list-item-name">Inventory</p>
                    </button> 
                </li>
                <li className="sidebar-item">
                    <button className="side-buttons is-active">
                        <CiViewList size={22} />
                        <p className="list-item-name">Orders</p>
                    </button> 
                </li>
                <li className="sidebar-item">
                    <button className="side-buttons">
                        <LiaShippingFastSolid size={22} />
                        <p className="list-item-name">Shipping</p>
                    </button> 
                </li>
                <li className="sidebar-item">
                    <button className="side-buttons">
                        <CiShare2 size={22} />
                        <p className="list-item-name">Channel</p>
                    </button> 
                </li>
            </ul>
        )
}
export default Sidebar