import { AiOutlineMail, AiOutlineShoppingCart, AiOutlineSearch, AiOutlineHeart, AiOutlineUserAdd } from 'react-icons/ai';
import { TbPhoneCall } from 'react-icons/tb';
import logo from "./images/logo.png";
function Header() {
    return (
        <>
            <div className="container ">
                <div id="contact-bar" class="grid grid-cols-2 gap-4 p-4 bg-[#7E33E0]">
                    <div className="flex justify-center align-middle gap-6">
                        <div className="flex items-center  text-white gap-2">
                            <AiOutlineMail /> Jagjeet.kmr89@gmail.com
                        </div>
                        <div className="flex items-center  text-white gap-2">
                            <TbPhoneCall /> +918727089775
                        </div>
                    </div>
                    <div className='flex justify-center items-center gap-4 text-white' >
                        English
                        <div className='flex items-center'>
                            login <AiOutlineUserAdd />
                        </div>
                        USD
                        <div className='flex items-center'>
                            wishlist <AiOutlineHeart />
                        </div>
                        <AiOutlineShoppingCart />
                    </div>
                </div>

                <div id="main-menu" className='flex p-4'>
                    <div class="flex w-1/4 justify-center ">
                        <img src={logo} alt='logo' />
                    </div>
                    <div class="flex justify-center w-3/4 gap-8">
                        <ul className='flex gap-10  items-center justify-center'>
                            <li>Pages</li>
                            <li> Products</li>
                            <li> Blog</li>
                            <li> Shop</li>
                            <li> Contact</li>
                        </ul>
                    </div>
                    <div class="flex-initial w-1/4 ...">
                        <div className='flex rounded-sm'>
                            <input type="text" placeholder="search" className='p-2 border'>
                                </input>
                            <button className='bg-[#FB2E86] p-2 w-12 flex items-center justify-center'>
                                <AiOutlineSearch />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header;