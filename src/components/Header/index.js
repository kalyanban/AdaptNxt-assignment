import { AiOutlineMenuFold } from "react-icons/ai"
import { MdOutlineDarkMode, MdGTranslate } from "react-icons/md"
import { IoIosNotificationsOutline } from "react-icons/io"

import "./index.css"

const Header = () => {
    return (
        <div className="header-container">
            <div className="header-left">
                <img src="https://res.cloudinary.com/dnthvhppc/image/upload/c_crop,ar_16:9/v1708318427/free-shipping-delivery-service-logo-badge-vector_lfzxnp.jpg" alt="logo" className="logo" />
                <AiOutlineMenuFold size={25} />
            </div>
            <div className="icons-container">
                <MdOutlineDarkMode size={25} />
                <IoIosNotificationsOutline size={25} />
                <MdGTranslate size={25} />
                <img src="https://res.cloudinary.com/dnthvhppc/image/upload/v1708319935/boy_hnj7os.png" alt="avatar" className="avatar" />
            </div>
        </div>
    )
}
export default Header