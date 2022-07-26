import '../styles/home.css'
import Header from '../components/Header';
import Fetcher from '../components/Fetcher';
import img1 from '../assets/images/home_image.png';
import img2 from '../assets/images/home_image2.png';
import apple from '../assets/images/apple.png';
import playstore from '../assets/images/playstore.png';



const Home = (props) => {
    return (
        <section class='home'>
            
            <Header/>
            <section class='first_section'>
                <p class='first_section_p'>why do people get involved with cryptocurrencies?</p>
                <div class='first_section_div'>
                    <div class='first_section_div_child' >
                        <img alt="easy mode of payment" class='img1' src={img1} />
                        <h3>easy mode of payment</h3>
                        <p>
                            people can now easily send and recieve money from
                            anywhere in the world to purchase goods and pay for services
                        </p>
                    </div>
                    <div class='first_section_div_child'>
                        <img alt="financial freedom" class='img1' src={img2}/>
                        <h3>finacial freedom</h3>
                        <p>
                        Just like the internet no single entity controls the Crypto network which
                        provides users transparency and privacy, which puts you in absolute control of your money.
                        </p>
                    </div>
                    <div class='first_section_div_child'>
                        <img alt="investment" class='img1' src={img1}/>
                        <h3>investment</h3> 
                        <p>
                        The constant demand as made Cryptocurrecies a Digital Gold used for alternative
                         store of wealth on long term investments.
                        </p>
                    </div>
                </div>
                <button>learn more</button>
            </section>
            <section class='second_section'>
                <p class='second_section_p'>buy and sell your cryptocurrencies in 3 simple steps</p>
                <div class='second_section_child'>
                    <div class='second_section_divs'>
                        <div class='dbc'>
                            <h3>create a free account</h3>
                            <p>
                            Sign up for your free TradExpress Wallet on web, iOS, or Android
                            devices and follow our easy process to set up your profile.
                            </p>
                        </div>
                        <img alt="sec"src={img1} class='sec_img'/>
                    </div>
                
                
                    <div class='second_section_divs'>
                        <img alt="deposit" src={img1} class='sec_img'/>
                        <div class='dbc'>
                            <h3>deposit</h3>
                            <p>
                            Choose your preferred deposit option like bank transfer, credit/debit
                            card or send digital asset directly to your wallet for easy funding/withdrawal.
                            </p>
                        </div>
                    </div>
                
                
                    <div class='second_section_divs'>
                        <div class='dbc'>
                            <h3>buy/sell crypto</h3>
                            <p>
                            Buy BTC, USDT, ETH, LTC, XRP, DOGE and securely store
                            it in your wallet or send it easily to friends and family.
                            </p>
                        </div>
                        <img alt="buy and sell crypto" src={img2} className='sec_img size'/>
                    </div>
                </div>
            </section>
            <section class='third_section'>
                <h5 class='third_section_h5'>Ready to trade Buy/Sell cryptocurrencies in just 10 minutes?</h5>
                <h3>Create your account for free and start trading today!</h3>
                <button class='thirdsectionbutton'>Get Started</button>
                <div class='button-app-div'>
                <div class='third_section_button_div'>
                    <button class='third_section_button'>
                        <img alt="download on appstore" src={apple}/>
                        <div class='appstore-div'>
                            <span class='download'>Download on the</span>
                            <span class='span-appstore'>App Store</span>
                        </div>
                    </button>
                    <button class='third_section_button'>
                        <img alt="downlaod on playstore" src={playstore}/>
                        <div class='appstore-div'>
                            <span class='download'>Download on the</span>
                            <span class='span-appstore'>Google Store</span>
                        </div>
                    </button>
                </div>
            </div>
            </section>
            <section class='customer_review'>
                <h4>customer's review</h4>
                <section class='customer_review_child_section'>
                    <div class='customer_review_child'>
                        <span>
                            Trading on TradExpress mobile & web platforms has been a
                            smooth experience for me quite easy to navigate.
                        </span>                       
                    </div>
                    <div class='customer_review_child'>
                        <span>
                            They have the best rate compared to other platforms with fast payout.
                        </span>
                    </div>
                    <div class='customer_review_child'>
                        <span>
                            Easy to fund and withdraw coins or cash on their platform,
                            I will definitely trade with them again.
                        </span>
                    </div>
                </section>
            </section>
            <section class='footer'>
                <ul>
                    <li class='first'>Products</li>
                    <li>bitcoin</li>
                    <li>alts</li>
                    <li>fiat</li>
                    <li>refill</li>
                    <li>p2p</li>
                </ul>
                <ul>
                   <li class='first'>Learn</li>
                   <li>blog</li>
                   <li>center</li>
                </ul>
                <ul>
                    <li class='first'>contact</li>
                    <li>hello@tradexpress@gmail.com </li>
                    <li>support@tradexpress@gmail.com</li>
                </ul>
                <ul>
                    <li class='first'>company</li>
                    <li>about</li>
                    <li>careers</li>
                    <li>rates</li>
                    <li>mobile</li>
                </ul>
                <ul>
                    <li class='first'>legal</li>
                    <li>privacy policy</li>
                    <li>anti-money laundering</li>
                    <li>terms and conditions</li> 
                </ul>
            </section>
        </section>
    )
}

export default Home