import { createSignal } from 'solid-js';
import '../styles/getstarted.css';
import axios from 'axios';

const Getstarted = () => {
  const [state, setstate] = createSignal('individual');
  const [username, setusername] = createSignal('');
  const [businessname, setbusinessname] = createSignal('');
  const [fullname, setfullname] = createSignal('');
  const [email, setemail] = createSignal('');
  const [number, setnumber] = createSignal('');
  const [ref, setref] = createSignal('');
  const [password, setpassword] = createSignal('');
  const [password_repeat, setpassword_repeat] = createSignal('');

  // switch to individual
  const rebounce = () => {
    setstate('individual');
    console.log(state());
  };

  // switch to business
  const reboun = (e) => {
    setstate('business');
    console.log(state());
  };

  // post data to api
  const postData = async (e) => {
    e.preventDefault();

    if (state() === 'individual') {
      axios
        .post('http://localhost:8000/api/users/', {
          fullname: fullname(),
          username: username(),
          email: email(),
          phone_number: number(),
          individual: state(),
          password: password(),
        })
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error.response);
        });
    } else {
      await fetch('http://localhost:8000/api/users/', {
        fullname: fullname(),
        username: username(),
        email: email(),
        phone_number: number(),
        business: state(),
        password: password(),
      })
        .json((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error.response);
        });
    }

    setusername('');
  };
  if (state() === 'individual') {
    return (
      <section class="getstartedd">
        <div class="getstartedd_div">
          <p>welcome! {state()}</p>
          <div class="busandind">
            <button class="individual" id="individual" onClick={rebounce}>
              individual
            </button>
            <button class="business" id="business" onClick={reboun}>
              Business
            </button>
          </div>
          <form class="getstartedform">
            <input type="hidden" value={state()} />
            <input
              placeholder="username"
              type="text"
              value={username()}
              onInput={(e) => setusername(e.target.value)}
            />
            <input
              placeholder="full name"
              type="text"
              value={fullname()}
              onInput={(e) => setfullname(e.target.value)}
            />
            <input
              placeholder="email"
              type="email"
              value={email()}
              onInput={(e) => setemail(e.target.value)}
            />
            <input
              placeholder="phone number"
              type="text"
              value={number()}
              onInput={(e) => setnumber(e.target.value)}
            />
            <input
              placeholder="referral code(optional)"
              type="text"
              value={ref()}
              onInput={(e) => setref(e.target.value)}
            />
            <input
              placeholder="password"
              type="password"
              value={password()}
              onInput={(e) => setpassword(e.target.value)}
            />
            <input
              placeholder="re-enter password"
              type="password"
              value={password_repeat()}
              onInput={(e) => setpassword_repeat(e.target.value)}
            />
            <button
              type="submit"
              class="getstartedform_submit"
              onClick={postData}
            >
              Sign Up
            </button>
          </form>
        </div>
      </section>
    );
  } else if (state() === 'business') {
    return (
      <section class="getstartedd">
        <div class="getstartedd_div">
          <p>welcome! {state()}</p>
          <div class="busandind">
            <button class="individualtwo" id="individual" onClick={rebounce}>
              individual
            </button>
            <button class="businesstwo" id="business" onClick={reboun}>
              Business
            </button>
          </div>
          <form class="getstartedform">
            <input type="hidden" value={state()} />
            <input
              placeholder="username"
              type="text"
              value={username()}
              onInput={(e) => setusername(e.target.value)}
            />
            <input
              placeholder="business name"
              type="text"
              value={businessname()}
              onInput={(e) => setbusinessname(e.target.value)}
            />
            <input
              placeholder="email"
              type="email"
              value={email()}
              onInput={(e) => setemail(e.target.value)}
            />
            <input
              placeholder="phone number"
              type="text"
              value={number()}
              onInput={(e) => setnumber(e.target.value)}
            />
            <input
              placeholder="referral code(optional)"
              type="text"
              value={ref()}
              onInput={(e) => setref(e.target.value)}
            />
            <input
              placeholder="password"
              type="text"
              value={password()}
              onInput={(e) => setpassword(e.target.value)}
            />
            <input
              placeholder="re-enter password"
              type="text"
              value={password_repeat()}
              onInput={(e) => setpassword_repeat(e.target.value)}
            />
            <button type="submit" class="getstartedform_submit">
              Sign Up
            </button>
          </form>
        </div>
      </section>
    );
  }
};

export default Getstarted;
