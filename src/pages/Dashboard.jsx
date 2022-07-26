import img1 from '../assets/images/trad.png'
import {BiMenuAltLeft, BiPencil} from 'solid-icons/bi';
import {AiOutlineBell, AiFillWallet,AiOutlineSetting} from 'solid-icons/ai';
import {FiLogOut} from 'solid-icons/fi'
import {FaBrandsBlogger as FaBlogger} from 'solid-icons/fa'
import {CgProfile} from 'solid-icons/cg';
import {
    RiSystemDashboardLine as RiDashboardLine,
    RiFinanceExchangeDollarFill as RiExchangeDollarFill
} from 'solid-icons/ri'
import '../styles/dashboard.css';
import Wallet from '../components/Wallet';
import IndCryptoBal from '../components/IndCryptoBal';
import bitcoin from '../assets/images/bitcoin.png';
import usdt from '../assets/images/usdt.png';
import ethereum from '../assets/images/ethereum.png';
import Fetcher from '../components/Fetcher';

const Dashboard = (props) => {
    return (
        <section class='getstartedd'>
            <section class='getstartedd_sectionone'>
                <img alt="get started" src={img1}/>
                <ul>
                    <li><RiDashboardLine/> Dashboard</li>
                    <li><AiFillWallet/> Wallet</li>
                    <li><RiExchangeDollarFill/> Exchange rates</li>
                    <li><BiPencil/> Learn</li>
                    <li><FaBlogger/> Blog</li>
                    <li><CgProfile/> Profile</li>
                    <li><AiOutlineSetting/> Settings</li>
                    <li><FiLogOut/> Logout</li>
                </ul>
                <button class='contact_support'>Contact Support</button>
            </section>
            <section class='getstartedd_sectiontwo'>
                <div class='icon_nav'>
                    <BiMenuAltLeft class='icon_nav_bi'/>
                    <AiOutlineBell class='icon_nav_ai'/>
                </div>
                <Wallet/>
                <section class='crypto_wallet_bal'>
                    <h4>Crypto Wallet Balance</h4>
                    <div class='ppp'>
                        <IndCryptoBal crypto='bitcoin' balance='1.67' img={bitcoin}/>
                        <IndCryptoBal crypto='USDT' balance='100.67' img={usdt}/>
                        <IndCryptoBal crypto='ethereum' balance='41.67' img={ethereum}/>
                    </div>
                </section>
                <section class='fetchy'>
                    <Fetcher my_data={props.my_data}/>
                </section>    
            </section>
            
        </section>
    )
}

export default Dashboard