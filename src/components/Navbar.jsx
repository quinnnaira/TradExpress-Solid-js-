import { createSignal } from 'solid-js';
import { Link } from 'solid-app-router';
import trad from '../assets/images/trad.png';
import '../styles/navbar.css';
import { AiOutlineMenu } from 'solid-icons/ai';

const Navbar = () => {
  const [toggle, setToggle] = createSignal(true);

  // switch the mobile menu on and off
  const flip = () => {
    let moby = document.getElementById('mob');
    if (toggle) {
      moby.style.display = 'block';
      setToggle(!toggle);
    } else {
      moby.style.display = 'none';
      setToggle(!toggle);
    }
  };

  // remove the menu from the screen when a link is clicked on mobile
  const flipy = () => {
    let moby = document.getElementById('mob');
    moby.style.display = 'none';
  };
  return (
    <nav>
      <Link href="/">
        <img alt="logo" src={trad} />
      </Link>
      <div class="navy">
        <Link href="/trade">
          <span class="instant">Instant Buy/Sell</span>
        </Link>
        <Link href="/dashboard">
          <span class="dashboard">Dashboard</span>
        </Link>
        <Link href="/login">
          <button class="login">Log in</button>
        </Link>
        <Link href="/getstarted">
          <button class="getstarted">Get Started</button>
        </Link>
      </div>
      <div class="navymobile">
        <AiOutlineMenu onClick={flip} />
        <div class="mobile" id="mob">
          <Link href="/trade" class="ml">
            <li onClick={flipy}>Instant Buy/Sell</li>
          </Link>
          <Link href="/dashboard" class="ml">
            <li class="" onClick={flipy}>
              Dashboard
            </li>
          </Link>
          <Link href="/login" class="ml">
            <li class="" onClick={flipy}>
              Log in
            </li>
          </Link>
          <Link href="/getstarted" class="ml">
            <li class="" onClick={flipy}>
              Get Started
            </li>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
