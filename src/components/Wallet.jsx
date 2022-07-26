import '../styles/wallet.css'
import income from '../assets/images/income.png'
import bank from  '../assets/images/bank.png'

const Wallet = () => {
    return (
        <section class='wallet'>
            <div class='wallet_place'>
                <h5>wallet balance</h5>
                <p class='wallet_money'>230,000 <span class='naija'>NGN</span></p>
            </div>
            <div class='bank_space'>
                <div class='income'>
                    <img alt="income" src={income} class='income_img'/>
                    <span>NGN Deposit</span>
                </div>
                <div class='bank'>
                    <img alt="bank" src={bank} class='bank_img'/>
                    <span>NGN Withdrawal</span>
                </div>
            </div>
        </section>
    )
}

export default Wallet