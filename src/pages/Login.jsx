import { createSignal } from 'solid-js';
import '../styles/getstarted.css';
import '../styles/login.css';

const Getstartedtwo = () => {
  const [username, setusername] = createSignal('');
  const [password, setpassword] = createSignal('');
  return (
    <section class="getstartedd">
      <div class="getstartedd_div">
        <p>welcome back!</p>
        <form class="getstartedform">
          <input
            placeholder="username"
            type="text"
            value={username()}
            onInput={(e) => setusername(e.target.value)}
          />
          <input
            placeholder="password"
            type="password"
            value={password()}
            onInput={(e) => setpassword(e.target.value)}
          />
          <div class="remandforg">
            <span>remember password</span>
            <span class="forgot">forgot password?</span>
          </div>
          <button type="submit" class="getstartedform_submit loginn">
            Login
          </button>
        </form>
      </div>
    </section>
  );
};

export default Getstartedtwo;
