import { RxCross2 } from "react-icons/rx"
import { CiSettings } from "react-icons/ci"
import { LiaFileImportSolid } from "react-icons/lia"
import { TbArrowBadgeRight } from "react-icons/tb"
import { FiPrinter, FiRefreshCcw } from "react-icons/fi"
import { PiArrowsOutLineVerticalBold } from "react-icons/pi"
import { MdFilterAlt, MdKeyboardArrowDown, MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md"
import { IoMdSearch } from "react-icons/io"
import { GoPlus } from "react-icons/go"

import "./index.css"

const Home = () => {
    return (
        <div className="home-container">
            <div className="top-container">
                <div className="orders">
                    <p className="order-text">Orders</p>
                    <RxCross2 size={16} />
                </div>
                <CiSettings size={22} className="settings-icon" />
            </div>
            <div className="info-container">
                <div className="buttons-container">
                    <div className="buttons-container-left">
                        <button className="import-button">
                            <LiaFileImportSolid size={18} />
                            <p className="import-text">Import Orders</p>
                        </button>
                        <button className="accept-button">
                            <TbArrowBadgeRight size={18} />
                            <p className="accept-text">Accept</p>
                        </button>
                        <button className="print-button">
                            <FiPrinter size={18} />
                            <p className="print-text">Print</p>
                            <MdKeyboardArrowDown size={18} />
                        </button>
                    </div>
                    <button className="refresh-button">
                        <FiRefreshCcw size={18} />
                        <p className="refresh-text">Refresh</p>
                    </button>
                </div>
                <table className="table">
                    <tr className="table-row">
                        <th></th>
                        <th className="checkbox-col">
                            <input type="checkbox" size={18} />
                        </th>
                        <th>
                            <p className="row-headings">Channel</p>
                            <div className="row-icons-container">
                                <PiArrowsOutLineVerticalBold size={18} />
                                <MdFilterAlt size={18}/>
                            </div>
                        </th>
                        <th>
                            <p className="row-headings">Order No</p>
                            <div className="row-icons-container">
                                <PiArrowsOutLineVerticalBold size={18} />
                                <IoMdSearch size={18}/>
                            </div>
                        </th>
                        <th>
                            <p className="row-headings">Order Date</p>
                            <div className="row-icons-container">
                                <PiArrowsOutLineVerticalBold size={18} />
                                <IoMdSearch size={18}/>
                            </div>
                        </th>
                        <th>
                            <p className="row-headings">City</p>
                            <PiArrowsOutLineVerticalBold size={18} />
                        </th>
                        <th>
                            <p className="row-headings">Customer Name</p>
                            <IoMdSearch size={18} />
                        </th>
                        <th>
                            <p className="row-headings">Order Value</p>
                            <PiArrowsOutLineVerticalBold size={18} />
                        </th>
                        <th>
                            <p className="row-headings">Status</p>
                            <PiArrowsOutLineVerticalBold size={18} />
                        </th>
                        <th>
                            <p className="row-headings">Operation</p>
                        </th>
                    </tr>
                    <tr>
                        <td><GoPlus size={16} /></td>
                        <td className="checkbox-col">
                            <input type="checkbox" size={18} />
                        </td>
                        <td>
                            <img src="https://res.cloudinary.com/dnthvhppc/image/upload/v1708331740/images_aptezo.png" alt="bag" className="bag-image" />
                        </td>
                        <td>
                            #TKN202030754
                        </td>
                        <td>
                            2022-05-04
                        </td>
                        <td>
                            Lucknow
                        </td>
                        <td>
                            Abhishek Dixit
                        </td>
                        <td>0.00</td>
                        <td>
                            <p className="pending">Pending</p>
                        </td>
                        <td>
                            <select className="select">
                                <option value="actions" selected>Actions</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td><GoPlus size={16} /></td>
                        <td className="checkbox-col">
                            <input type="checkbox" size={18} />
                        </td>
                        <td>
                            <img src="https://res.cloudinary.com/dnthvhppc/image/upload/v1708331740/images_aptezo.png" alt="bag" className="bag-image" />
                        </td>
                        <td>
                            #TKN202030753
                        </td>
                        <td>
                            2022-05-04
                        </td>
                        <td>
                            Lucknow
                        </td>
                        <td>
                            Abhishek Dixit
                        </td>
                        <td>0.00</td>
                        <td>
                            <p className="pending">Pending</p>
                        </td>
                        <td>
                            <select className="select">
                                <option value="actions" selected>Actions</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td><GoPlus size={16} /></td>
                        <td className="checkbox-col">
                            <input type="checkbox" size={18} />
                        </td>
                        <td>
                            <img src="https://res.cloudinary.com/dnthvhppc/image/upload/v1708331740/images_aptezo.png" alt="bag" className="bag-image" />
                        </td>
                        <td>
                            #TKN202030752
                        </td>
                        <td>
                            2022-05-04
                        </td>
                        <td>
                            Lucknow
                        </td>
                        <td>
                            Abhishek Dixit
                        </td>
                        <td>0.00</td>
                        <td>
                            <p className="pending">Pending</p>
                        </td>
                        <td>
                            <select className="select">
                                <option value="actions" selected>Actions</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td><GoPlus size={16} /></td>
                        <td className="checkbox-col">
                            <input type="checkbox" size={18} />
                        </td>
                        <td>
                            <img src="https://res.cloudinary.com/dnthvhppc/image/upload/v1708331740/images_aptezo.png" alt="bag" className="bag-image" />
                        </td>
                        <td>
                            #TKN202030751
                        </td>
                        <td>
                            2022-05-04
                        </td>
                        <td>
                            Lucknow
                        </td>
                        <td>
                            Abhishek Dixit
                        </td>
                        <td>0.00</td>
                        <td>
                            <p className="pending">Pending</p>
                        </td>
                        <td>
                            <select className="select">
                                <option value="actions" selected>Actions</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td><GoPlus size={16} /></td>
                        <td className="checkbox-col">
                            <input type="checkbox" size={18} />
                        </td>
                        <td>
                            <img src="https://res.cloudinary.com/dnthvhppc/image/upload/v1708331740/images_aptezo.png" alt="bag" className="bag-image" />
                        </td>
                        <td>
                            #TKN202030750
                        </td>
                        <td>
                            2022-05-04
                        </td>
                        <td>
                            Lucknow
                        </td>
                        <td>
                            Abhishek Dixit
                        </td>
                        <td>0.00</td>
                        <td>
                            <p className="pending">Pending</p>
                        </td>
                        <td>
                            <select className="select">
                                <option value="actions" selected>Actions</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td><GoPlus size={16} /></td>
                        <td className="checkbox-col">
                            <input type="checkbox" size={18} />
                        </td>
                        <td>
                            <img src="https://res.cloudinary.com/dnthvhppc/image/upload/v1708331740/images_aptezo.png" alt="bag" className="bag-image" />
                        </td>
                        <td>
                            #TKN202030749
                        </td>
                        <td>
                            2022-05-04
                        </td>
                        <td>
                            Lucknow
                        </td>
                        <td>
                            Abhishek Dixit
                        </td>
                        <td>0.00</td>
                        <td>
                            <p className="pending">Pending</p>
                        </td>
                        <td>
                            <select className="select">
                                <option value="actions" selected>Actions</option>
                            </select>
                        </td>
                    </tr>
                </table>
            </div>
        </div>
    )
}
export default Home