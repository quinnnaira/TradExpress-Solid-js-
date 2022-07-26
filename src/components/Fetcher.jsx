import '../styles/fetcher.css';
import { BiArrowToTop, BiArrowToBottom } from 'solid-icons/bi';
import loading from '../assets/images/loading.jpg';

const Fetcher = (props) => {
  console.log(props.my_data);
  const myData = props.my_data || [];
  const my_arrows = [
    <BiArrowToBottom class="arrow-d" />,
    <BiArrowToTop className="arrow-d up" />,
  ];
  if (myData.length < 1) {
    return (
      <section class="fetcher">
        <img alt="loading" src={loading} className="img_loading" />
      </section>
    );
  } else {
    return (
      <section class="fetcher">
        {myData.map((d) => {
          return (
            <div class="crypto-div" key={d.id}>
              <div class="crypto">
                <p class="cryptop">{d.id}</p>
                <p class="percentage">{d.market_cap_dominance}</p>
                {my_arrows[Math.floor(Math.random() * my_arrows.length)]}
              </div>
              <p class="cryptop">{d.price}</p>
            </div>
          );
        })}
      </section>
    );
  }
};

export default Fetcher;
