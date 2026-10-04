import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'

const linkClassName =
  'flex items-center gap-2 rounded-md bg-chip px-3 py-1.5 text-base text-heading no-underline transition-shadow duration-300 hover:shadow-chip max-lg:w-full max-lg:justify-center max-lg:box-border'

const ticksClassName =
  "relative w-full before:absolute before:top-[-4.5px] before:left-0 before:border-[5px] before:border-transparent before:border-l-border before:content-[''] after:absolute after:top-[-4.5px] after:right-0 after:border-[5px] after:border-transparent after:border-r-border after:content-['']"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section className="flex grow flex-col place-content-center place-items-center gap-[25px] max-lg:gap-[18px] max-lg:px-5 max-lg:pt-8 max-lg:pb-6">
        <div className="relative">
          <img
            src={heroImg}
            className="relative z-0 mx-auto w-[170px]"
            width="170"
            height="179"
            alt=""
          />
          <img
            src={reactLogo}
            className="absolute inset-x-0 top-[34px] z-[1] mx-auto h-7 [transform:perspective(2000px)_rotateZ(300deg)_rotateX(44deg)_rotateY(39deg)_scale(1.4)]"
            alt="React logo"
          />
          <img
            src={viteLogo}
            className="absolute inset-x-0 top-[107px] z-0 mx-auto h-[26px] w-auto [transform:perspective(2000px)_rotateZ(300deg)_rotateX(40deg)_rotateY(39deg)_scale(0.8)]"
            alt="Vite logo"
          />
        </div>
        <div>
          <h1 className="my-8 font-heading text-[56px] font-medium tracking-[-1.68px] text-heading max-lg:my-5 max-lg:text-4xl">
            Get started
          </h1>
          <p className="m-0">
            Edit{' '}
            <code className="inline-flex rounded bg-code px-2 py-1 font-mono text-[15px] leading-[135%] text-heading">
              src/App.tsx
            </code>{' '}
            and save to test{' '}
            <code className="inline-flex rounded bg-code px-2 py-1 font-mono text-[15px] leading-[135%] text-heading">
              HMR
            </code>
          </p>
        </div>
        <button
          type="button"
          className="mb-6 inline-flex rounded-[5px] border-2 border-transparent bg-accent-soft px-2.5 py-[5px] font-mono text-base text-accent transition-[border-color] duration-300 hover:border-accent-ring focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          onClick={() => setCount((count) => count + 1)}
        >
          Count is {count}
        </button>
      </section>

      <div className={ticksClassName} />

      <section className="flex border-t border-border text-left max-lg:flex-col max-lg:text-center">
        <div className="flex-1 basis-0 border-r border-border p-8 max-lg:border-r-0 max-lg:border-b max-lg:border-border max-lg:px-5 max-lg:py-6">
          <svg
            className="mb-4 h-[22px] w-[22px] max-lg:mx-auto"
            role="presentation"
            aria-hidden="true"
          >
            <use href="/icons.svg#documentation-icon"></use>
          </svg>
          <h2 className="mb-2 font-heading text-2xl leading-[118%] font-medium tracking-[-0.24px] text-heading max-lg:text-xl">
            Documentation
          </h2>
          <p className="m-0">Your questions, answered</p>
          <ul className="mt-8 flex list-none gap-2 p-0 max-lg:mt-5 max-lg:flex-wrap max-lg:justify-center">
            <li className="max-lg:flex-1 max-lg:basis-[calc(50%-8px)]">
              <a
                href="https://vite.dev/"
                target="_blank"
                className={linkClassName}
              >
                <img className="h-[18px]" src={viteLogo} alt="" />
                Explore Vite
              </a>
            </li>
            <li className="max-lg:flex-1 max-lg:basis-[calc(50%-8px)]">
              <a
                href="https://react.dev/"
                target="_blank"
                className={linkClassName}
              >
                <img className="h-[18px] w-[18px]" src={reactLogo} alt="" />
                Learn more
              </a>
            </li>
          </ul>
        </div>
        <div className="flex-1 basis-0 p-8 max-lg:px-5 max-lg:py-6">
          <svg
            className="mb-4 h-[22px] w-[22px] max-lg:mx-auto"
            role="presentation"
            aria-hidden="true"
          >
            <use href="/icons.svg#social-icon"></use>
          </svg>
          <h2 className="mb-2 font-heading text-2xl leading-[118%] font-medium tracking-[-0.24px] text-heading max-lg:text-xl">
            Connect with us
          </h2>
          <p className="m-0">Join the Vite community</p>
          <ul className="mt-8 flex list-none gap-2 p-0 max-lg:mt-5 max-lg:flex-wrap max-lg:justify-center">
            <li className="max-lg:flex-1 max-lg:basis-[calc(50%-8px)]">
              <a
                href="https://github.com/vitejs/vite"
                target="_blank"
                className={linkClassName}
              >
                <svg
                  className="h-[18px] w-[18px] dark:invert dark:brightness-200"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#github-icon"></use>
                </svg>
                GitHub
              </a>
            </li>
            <li className="max-lg:flex-1 max-lg:basis-[calc(50%-8px)]">
              <a
                href="https://chat.vite.dev/"
                target="_blank"
                className={linkClassName}
              >
                <svg
                  className="h-[18px] w-[18px] dark:invert dark:brightness-200"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#discord-icon"></use>
                </svg>
                Discord
              </a>
            </li>
            <li className="max-lg:flex-1 max-lg:basis-[calc(50%-8px)]">
              <a
                href="https://x.com/vite_js"
                target="_blank"
                className={linkClassName}
              >
                <svg
                  className="h-[18px] w-[18px] dark:invert dark:brightness-200"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#x-icon"></use>
                </svg>
                X.com
              </a>
            </li>
            <li className="max-lg:flex-1 max-lg:basis-[calc(50%-8px)]">
              <a
                href="https://bsky.app/profile/vite.dev"
                target="_blank"
                className={linkClassName}
              >
                <svg
                  className="h-[18px] w-[18px] dark:invert dark:brightness-200"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#bluesky-icon"></use>
                </svg>
                Bluesky
              </a>
            </li>
          </ul>
        </div>
      </section>

      <div className={ticksClassName} />
      <section className="h-[88px] border-t border-border max-lg:h-12" />
    </>
  )
}

export default App
