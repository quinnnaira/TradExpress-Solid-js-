import '../styles/header.css';
import apple from '../assets/images/apple.png';
import playstore from '../assets/images/playstore.png'

const Header = () => {
    return (
        <header>
            <p class='headerp'>Buy, sell and manage your crypto on tradexpress.</p>
            <p class='headerptwo'>easily trade cryptocurrencies like BTC,ETH,LTC,USDT and XRP with NGN</p>
            <button class='headerbutton'>Get Started</button>
            <div class='button-app-div'>
                <button class='appstore'>
                    <img alt="apple" src={apple}/>
                    <div class='appstore-div'>
                        <span class='download'>Download on the</span>
                        <span class='span-appstore'>App Store</span>
                    </div>
                </button>
                <button class='googleplay'>
                    <img alt="playstore" src={playstore}/>
                    <div class='appstore-div'>
                        <span class='download'>Download on the</span>
                        <span class='span-appstore'>Google Store</span>
                    </div>
                </button>
            </div>
        </header>
    )
}

export default Header