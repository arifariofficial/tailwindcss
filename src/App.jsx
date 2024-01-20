import RocketDab from "./assets/rocketdab.png";
import RocketMan from "./assets/rocketman.png";
import RocketRide from "./assets/rocketride.png";
import RocketLunch from "./assets/rocketlaunch.png";
import { useState } from "react";

function App() {
  const [isActive, setIsActive] = useState(true);

  const toggleClass = () => {
    setIsActive(!isActive);
  };

  return (
    <>
      <header className="sticky top-0 z-10 bg-teal-700 text-white">
        <section className="mx-auto flex max-w-4xl items-center justify-between p-4">
          <h1 className="text-3xl font-medium">
            <a href="#hero">🚀 Achme Rockets</a>
          </h1>
          <div>
            <button
              id="hamburger-button"
              className={`relative h-8 w-8 cursor-pointer text-3xl md:hidden ${
                isActive ? "" : "toggle-btn"
              }`}
              onClick={toggleClass}
            >
              {/* &#9776; */}
              <div className="hamburger"></div>
            </button>
            <nav
              className="hidden space-x-8 text-xl md:block"
              aria-level="main"
            >
              <a href="#rockets" className="hover:opacity-90">
                Our Rockets
              </a>
              <a href="#testomonials" className="hover:opacity-90">
                Testimonials
              </a>
              <a href="#contact" className="hover:opacity-90">
                Contact Us
              </a>
            </nav>
          </div>
        </section>
        <section
          id="mobile-menu"
          className={`top-68  absolute w-full origin-top animate-open-menu flex-col
          justify-center bg-black text-5xl ${isActive ? "hidden" : "flex"}`}
          onClick={toggleClass}
        >
          {/* <button className="text-8xl self-end px-6" onClick={toggleClass}>
            &times;
          </button> */}

          <nav
            className="flex min-h-screen flex-col items-center py-8"
            aria-label="mobile"
          >
            <a
              href="#hero"
              className="w-full py-6 text-center hover:opacity-90"
            >
              Home
            </a>
            <a
              href="#rockets"
              className="w-full py-6 text-center hover:opacity-90"
            >
              Rockets
            </a>
            <a
              href="#testomonials"
              className="w-full py-6 text-center hover:opacity-90"
            >
              Testimonials
            </a>
            <a
              href="#contact"
              className="w-full py-6 text-center hover:opacity-90"
            >
              Contact Us
            </a>
            <a
              href="#footer"
              className="w-full py-6 text-center hover:opacity-90"
            >
              Legal
            </a>
          </nav>
        </section>
      </header>
      <main className="mx-auto max-w-4xl">
        <section
          id="hero"
          className="widescreen:section-min-height tallscreen:section-min-height mb-12 flex scroll-mt-40 flex-col-reverse items-center justify-center gap-8 p-6 sm:flex-row"
        >
          <article className="sm:w-1/2">
            <h2
              className="max-w-md text-center text-4xl font-bold text-slate-900 sm:text-left
             sm:text-5xl dark:text-white"
            >
              We Boldy Go
              <span className="text-indigo-300"> Where No Rocket </span> Has
              Gone Before...
            </h2>
            <p className="mt-4 max-w-md text-center text-xl text-slate-700 sm:text-left dark:text-slate-400">
              We&apos;re building rockets for the next century today. From the
              moon to Mars, Jupiter and beyond...
            </p>
            <p className="mt-4 max-w-md text-center text-xl text-slate-700 sm:text-left dark:text-slate-400">
              Think Achme Rockets
            </p>
          </article>
          <img className="w-1/2 " src={RocketDab} alt="Rocket Dab" />
        </section>

        <hr className="mx-auto w-1/2 bg-black dark:bg-white" />

        <section
          id="rockets"
          className="widescreen:section-min-height tallscreen:section-min-height my-12 scroll-mt-20 p-6"
        >
          <h2 className="mb-6 text-center text-4xl font-bold text-slate-900 sm:text-5xl dark:text-white">
            Our Rockets
          </h2>
          <ul className="mx-auto my-12 flex list-none flex-col items-center gap-8 sm:flex-row">
            <li className=" flex w-2/3 flex-col items-center rounded-3xl border border-solid border-slate-900 bg-white px-2 py-6 shadow-xl sm:w-5/6 dark:border-gray-100 dark:bg-black">
              <img src={RocketMan} alt="Rocket man" className="mb-6 w-1/2" />
              <h3 className="text-center text-3xl text-slate-900 dark:text-white">
                Explorer
              </h3>
              <p className="mt-2 hidden text-center text-3xl text-slate-500 sm:block dark:text-slate-400">
                $
              </p>
              <p className="mt-2 text-center text-2xl text-slate-500 sm:hidden  dark:text-slate-400">
                Affordable Exploration
              </p>
            </li>

            <li className=" flex w-2/3 flex-col items-center rounded-3xl border border-solid border-slate-900 bg-white px-2 py-6 shadow-xl sm:w-5/6 dark:border-gray-100 dark:bg-black">
              <img src={RocketRide} alt="Rocket Ride" className="mb-6 w-1/2" />
              <h3 className="text-center text-3xl text-slate-900 dark:text-white">
                Adventurer
              </h3>
              <p className="mt-2 hidden text-center text-3xl text-slate-500 sm:block dark:text-slate-400">
                $$
              </p>
              <p className="mt-2 text-center text-2xl text-slate-500 sm:hidden  dark:text-slate-400">
                Best Selling Rocket
              </p>
            </li>

            <li className=" flex w-2/3 flex-col items-center rounded-3xl border border-solid border-slate-900 bg-white px-2 py-6 shadow-xl sm:w-5/6 dark:border-gray-100 dark:bg-black">
              <img src={RocketLunch} alt="Infinity" className="mb-6 w-1/2" />
              <h3 className="text-center text-3xl text-slate-900 dark:text-white">
                Infinity
              </h3>
              <p className="mt-2 hidden text-center text-3xl text-slate-500 sm:block dark:text-slate-400">
                $$$
              </p>
              <p className="mt-2 text-center text-2xl text-slate-500 sm:hidden  dark:text-slate-400">
                Luxury Starship
              </p>
            </li>
          </ul>
        </section>

        <hr className="mx-auto w-1/2 bg-black dark:bg-white " />

        <section
          id="testomonials"
          className="widescreen:section-min-height tallscreen:section-min-height my-12 p-6"
        >
          <h2 className="mb-6 text-center text-4xl font-bold text-slate-900 sm:text-5xl dark:text-white">
            Testimonials
          </h2>

          <figure className="my-12">
            <blockquote className="relative rounded-3xl bg-teal-600 py-12 pl-14 pr-8 dark:bg-black">
              <p
                className="mt-2 text-left text-2xl text-white before:absolute before:left-0 
              before:top-0 before:translate-x-2 before:translate-y-2 before:font-serif before:text-9xl before:text-white
              before:opacity-25 before:content-['\201C'] after:absolute after:-bottom-20 
              after:right-0 after:-translate-x-2 after:-translate-y-2 after:font-serif after:text-9xl after:text-white
              after:opacity-25 after:content-['\201D'] sm:text-3xl dark:text-slate-400"
              >
                Acme has always been there for me. Their Explorer rocket arrived
                in a wooden create as expected. Life-long customer! A++ shopping
                experince
              </p>
            </blockquote>
            <figcaption className="mt-2 text-right text-xl italic text-slate-500 sm:text-2xl dark:text-slate-400">
              &#8212;While E. Coyote, Genius
            </figcaption>
          </figure>

          <figure className="my-12">
            <blockquote className="relative rounded-3xl bg-teal-600 py-12 pl-14 pr-8 dark:bg-black">
              <p
                className="mt-2 text-left text-2xl text-white before:absolute before:left-0 
              before:top-0 before:translate-x-2 before:translate-y-2 before:font-serif before:text-9xl before:text-white
              before:opacity-25 before:content-['\201C'] after:absolute after:-bottom-20 
              after:right-0 after:-translate-x-2 after:-translate-y-2 after:font-serif after:text-9xl after:text-white
              after:opacity-25 after:content-['\201D'] sm:text-3xl dark:text-slate-400"
              >
                The Acme Adventurer Rocket has thwarted my Illudium Q-36
                Explosive Space Modulator on several occasions.
                <span className="italic">
                  {" "}
                  This makes me very very angry!
                </span>{" "}
                Nevertheless, K-9 and I ahve awarded Ache the Martian contract
                for space exploration rockets base on Acme&apos;s quality and
                sturdy designs.
              </p>
            </blockquote>
            <figcaption className="mt-2 text-right text-xl italic text-slate-500 sm:text-2xl dark:text-slate-400">
              &#8212;Marvin The martian &amp; K-9
            </figcaption>
          </figure>

          <figure className="my-12">
            <blockquote className="relative rounded-3xl bg-teal-600 py-12 pl-14 pr-8 dark:bg-black">
              <p
                className="mt-2 text-left text-2xl text-white before:absolute before:left-0 
              before:top-0 before:translate-x-2 before:translate-y-2 before:font-serif before:text-9xl before:text-white
              before:opacity-25 before:content-['\201C'] after:absolute after:-bottom-20 
              after:right-0 after:-translate-x-2 after:-translate-y-2 after:font-serif after:text-9xl after:text-white
              after:opacity-25 after:content-['\201D'] sm:text-3xl dark:text-slate-400"
              >
                I knew I not only wanted &#8212;{" "}
                <span className="italic">I needed</span> &#8212; Acme&apos;s
                Infinity Rocket for my mission in space. Acme delivered in one
                day! Nothing says <q>Take me to your leader </q>
                Like Acme&apos;s Infinity Rocket! 💯
              </p>
            </blockquote>
            <figcaption className="mt-2 text-right text-xl italic text-slate-500 sm:text-2xl dark:text-slate-400">
              &#8212;Buzz Lightyear
            </figcaption>
          </figure>
        </section>

        <hr className="mx-auto w-1/2 bg-black dark:bg-white" />

        <section
          id="contact"
          className="widescreen:section-min-height tallscreen:section-min-height my-12 scroll-mt-16 p-6"
        >
          <h2 className="mb-6 text-center text-4xl font-bold text-slate-900 sm:text-5xl dark:text-white">
            Contact Us
          </h2>
          <form
            action=""
            className="mx-auto flex max-w-4xl flex-col items-start gap-4 text-xl sm:text-2xl"
          >
            <label htmlFor="subject">Subject</label>
            <input
              type="text"
              id="subject"
              name="subject"
              required
              minLength="3"
              maxLength="60"
              placeholder=" Your Subject"
              className="w-full border border-solid  border-slate-900 text-sm text-black dark:border-none"
            />
            <label htmlFor="message">Message</label>
            <textarea
              name="message"
              id="message"
              cols="30"
              rows="10"
              placeholder=" Your Message"
              required
              className="w-full border border-solid border-slate-900 text-sm text-black sm:text-base dark:border-none"
            ></textarea>
            <button className="w-48 rounded-xl border border-solid border-slate-900 bg-teal-700 p-3 text-white hover:bg-teal-600 active:bg-teal-500 dark:border-none">
              Submit
            </button>
          </form>
        </section>
      </main>
      <footer id="footer" className="bg-teal-700 text-base text-white">
        <section className="mx-auto flex max-w-4xl flex-col p-4 sm:flex-row sm:justify-between">
          <address>
            <h2>Acme Rocket-Powered Products, Inc</h2>
            555 Astro Way <br />
            Fairfield, New Jersey 12345-5555
            <br />
            Email:{" "}
            <a href="mailto:inquiries@acmerockets.com">
              Inquires@AcmeRockets.com
            </a>
            <br />
            Phone: <a href="tel:+15555555555">(555) 555-5555</a>
          </address>
          <nav className="hidden flex-col gap-2 md:flex" aria-label="fotter">
            <a href="#rockets" className="hover:opacity-90">
              Rockets
            </a>
            <a href="#testomonials" className="hover:opacity-90">
              Testimonials
            </a>
            <a href="#contact" className="hover:opacity-90">
              Contact Us
            </a>
          </nav>
          <div className="flex flex-col sm:gap-2">
            <p className="text-right">
              Copyright &copy; <span id="year">2022</span>
            </p>
            <p className="text-right">All Rights Reserved</p>
          </div>
        </section>
      </footer>
    </>
  );
}

export default App;
