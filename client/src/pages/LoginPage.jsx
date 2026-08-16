import { useState } from 'react'
import { ArrowRight, Eye, EyeOff, Lock, Mail } from 'lucide-react'

const initialValues = {
  email: '',
  password: '',
}

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function validate(values) {
  const errors = {}

  if (!values.email.trim()) {
    errors.email = 'Email is required.'
  } else if (!emailPattern.test(values.email.trim())) {
    errors.email = 'Enter a valid email address.'
  }

  if (!values.password) {
    errors.password = 'Password is required.'
  } else if (values.password.length < 6) {
    errors.password = 'Password must be at least 6 characters.'
  }

  return errors
}

function GoogleMark() {
  return (
    <svg
      viewBox="0 0 48 48"
      aria-hidden="true"
      focusable="false"
      className="h-5 w-5 shrink-0 max-[560px]:h-[18px] max-[560px]:w-[18px]"
    >
      <path
        fill="#FFC107"
        d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
      />
      <path
        fill="#FF3D00"
        d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
      />
      <path
        fill="#4CAF50"
        d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
      />
      <path
        fill="#1976D2"
        d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
      />
    </svg>
  )
}

const pageClassName =
  'relative min-h-screen overflow-x-hidden px-[18px] py-2 text-[#111] max-[1100px]:px-4 max-[1100px]:py-4 max-[720px]:px-3 max-[720px]:py-3 max-[560px]:px-[10px] max-[560px]:py-[10px]'

const shellClassName =
  'relative z-10 mx-auto flex w-full max-w-[1180px] min-h-[calc(100vh-20px)] flex-col justify-center max-[1100px]:max-w-[900px] max-[1100px]:min-h-0'

const brandMarkClassName =
  'grid h-[58px] w-[58px] place-items-center border-[3px] border-[#111] bg-gradient-to-b from-[#f6e54a] to-[#ffd93b] shadow-[6px_6px_0_#111] text-[1.6rem] font-black tracking-[-0.08em] max-[1100px]:h-[52px] max-[1100px]:w-[52px] max-[1100px]:text-[1.15rem] max-[720px]:h-[46px] max-[720px]:w-[46px] max-[720px]:text-[1rem] max-[720px]:shadow-[5px_5px_0_#111] max-[560px]:shadow-[4px_4px_0_#111]'

const cardFrameClassName =
  'relative border-[4px] border-[#111] shadow-[14px_14px_0_#111]'

const panelBaseClassName =
  'relative flex min-h-[430px] overflow-hidden bg-gradient-to-b from-[#8f6fff] via-[#8a6bf6] to-[#916cf3] p-7 shadow-[14px_14px_0_#111] max-[1100px]:h-[430px] max-[1100px]:min-h-[430px] max-[1100px]:p-7 max-[720px]:hidden max-[560px]:shadow-[7px_7px_0_#111]'

const panelCopyClassName = 'relative z-10 max-w-[400px]'

const heroTitleClassName =
  'm-0 text-[clamp(2.7rem,3.2vw,3.9rem)] font-black leading-[0.92] tracking-[-0.09em] text-[#111] uppercase max-[1100px]:text-[clamp(3rem,7vw,4.8rem)]'

const heroHighlightClassName =
  'mt-1.5 w-fit bg-white px-[0.2em] py-[0.03em] shadow-[6px_6px_0_#111] max-[560px]:mt-1 max-[560px]:shadow-[4px_4px_0_#111]'

const authPanelClassName =
  'relative flex h-full min-h-0 flex-col bg-gradient-to-b from-[#fffefb] to-[#fbf8f2] p-6 shadow-[14px_14px_0_#111] max-[1100px]:p-7 max-[720px]:w-full max-[720px]:p-[22px] max-[560px]:p-[18px] max-[560px]:shadow-[7px_7px_0_#111]'

const inputShellClassName =
  'flex min-h-[54px] items-center gap-3.5 border-[3px] border-[#111] bg-white px-[11px] shadow-[4px_4px_0_rgba(17,17,17,0.1)] transition-all duration-150 focus-within:-translate-x-px focus-within:-translate-y-px focus-within:shadow-[6px_6px_0_rgba(17,17,17,0.18)] max-[720px]:min-h-[52px] max-[720px]:gap-[10px] max-[560px]:min-h-[48px] max-[560px]:border-[2px] max-[560px]:px-[10px]'

const primaryButtonClassName =
  'mt-0 flex min-h-[54px] w-full items-center justify-center gap-3.5 border-[3px] border-[#111] bg-gradient-to-r from-[#5fdc98] to-[#77efad] text-[1rem] font-black tracking-[-0.05em] text-[#111] shadow-[5px_5px_0_#111] transition-all duration-150 hover:-translate-x-px hover:-translate-y-px hover:shadow-[10px_10px_0_#111] active:translate-x-[5px] active:translate-y-[5px] active:shadow-[3px_3px_0_#111] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-black/20 max-[720px]:min-h-[52px] max-[720px]:text-[0.95rem] max-[560px]:min-h-[48px] max-[560px]:border-[2px] max-[560px]:text-[0.9rem] max-[560px]:shadow-[4px_4px_0_#111]'

const secondaryButtonClassName =
  'flex min-h-[54px] w-full items-center justify-center gap-3.5 border-[3px] border-[#111] bg-white text-[0.94rem] font-extrabold text-[#111] shadow-[5px_5px_0_#111] transition-all duration-150 hover:-translate-x-px hover:-translate-y-px hover:shadow-[10px_10px_0_#111] active:translate-x-[5px] active:translate-y-[5px] active:shadow-[3px_3px_0_#111] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-black/20 max-[720px]:min-h-[52px] max-[720px]:text-[0.88rem] max-[560px]:min-h-[48px] max-[560px]:border-[2px] max-[560px]:text-[0.82rem] max-[560px]:shadow-[4px_4px_0_#111]'

export default function LoginPage() {
  const [values, setValues] = useState(initialValues)
  const [touched, setTouched] = useState({
    email: false,
    password: false,
  })
  const [attemptedSubmit, setAttemptedSubmit] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [statusMessage, setStatusMessage] = useState('')

  const errors = validate(values)
  const showEmailError = (attemptedSubmit || touched.email) && errors.email
  const showPasswordError = (attemptedSubmit || touched.password) && errors.password

  const handleChange = (event) => {
    const { name, value } = event.target

    setValues((current) => ({
      ...current,
      [name]: value,
    }))

    if (statusMessage) {
      setStatusMessage('')
    }
  }

  const handleBlur = (event) => {
    const { name } = event.target

    setTouched((current) => ({
      ...current,
      [name]: true,
    }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    setAttemptedSubmit(true)

    if (Object.keys(errors).length > 0) {
      setStatusMessage('')
      return
    }

    setStatusMessage('Form validated. Connect this page to your auth flow next.')
  }

  const handlePlaceholderAction = (message) => (event) => {
    event.preventDefault()
    setStatusMessage(message)
  }

  return (
    <div className={pageClassName}>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-0 h-[95px] w-[95px] bg-gradient-to-b from-[#b290ff] to-[#8f6fff] shadow-[-8px_8px_0_#111] [clip-path:polygon(30%_0,100%_0,100%_100%,0_100%,0_30%,15%_30%,15%_15%,30%_15%)] max-[720px]:h-[82px] max-[720px]:w-[82px] max-[560px]:h-[64px] max-[560px]:w-[64px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-0 h-[100px] w-[100px] bg-[#111] [clip-path:polygon(0_0,100%_0,100%_38%,76%_38%,76%_62%,52%_62%,52%_86%,28%_86%,28%_100%,0_100%)] max-[720px]:h-[82px] max-[720px]:w-[82px] max-[560px]:h-[64px] max-[560px]:w-[64px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[28px] top-[150px] h-[44px] w-[44px] border-[4px] border-[#111] bg-[#ff7f93] shadow-[6px_6px_0_#111] max-[1100px]:hidden"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-3 left-[210px] h-[58px] w-[58px] rounded-full border-[4px] border-[#111] bg-gradient-to-b from-[#ffe45c] to-[#ffd93b] shadow-[6px_6px_0_rgba(17,17,17,0.35)] max-[720px]:bottom-2 max-[720px]:left-[40%] max-[720px]:h-[44px] max-[720px]:w-[44px] max-[560px]:left-[42%] max-[560px]:h-[36px] max-[560px]:w-[36px]"
      />

      <main className={shellClassName}>
        <header className="mb-2.5 flex items-center gap-2.5 max-[1100px]:mb-3.5 max-[720px]:gap-2 max-[560px]:mb-3">
          <div className={brandMarkClassName} aria-hidden="true">
            AI
          </div>
          <div>
            <p className="m-0 text-[clamp(1.4rem,2vw,2rem)] font-black tracking-[-0.07em] uppercase text-[#111] max-[1100px]:text-[1.2rem] max-[720px]:text-[1rem] max-[560px]:tracking-[-0.05em]">
              AI INTERVIEW
            </p>
            <span className="mt-1 block text-[0.88rem] font-extrabold tracking-[0.02em] uppercase text-[#111] max-[1100px]:text-[0.7rem] max-[560px]:mt-0.5 max-[560px]:text-[0.62rem]">
              PRACTICE. IMPROVE. SUCCEED.
            </span>
          </div>
        </header>

        <section
          className="grid grid-cols-[minmax(0,1fr)_460px] gap-4 max-[1100px]:grid-cols-1 max-[1100px]:gap-[18px] max-[720px]:gap-[14px] max-[560px]:gap-3"
          aria-label="Login area"
        >
          <aside className={`${cardFrameClassName} ${panelBaseClassName}`}>
            <span
              aria-hidden="true"
              className="absolute right-[50px] top-[82px] h-5 w-5 rotate-45 border-[4px] border-[#111] bg-[#ffe13a] shadow-[4px_4px_0_rgba(17,17,17,0.35)] max-[1100px]:right-[50px] max-[1100px]:top-[82px] max-[720px]:right-6 max-[720px]:top-[26px] max-[720px]:h-[18px] max-[720px]:w-[18px] max-[560px]:right-[18px] max-[560px]:top-5 max-[560px]:h-4 max-[560px]:w-4 max-[560px]:border-[3px]"
            />

            <div className={panelCopyClassName}>
              <h1 className={heroTitleClassName}>
                <span className="block w-fit">PRACTICE.</span>
                <span className="mt-[6px] block w-fit bg-white px-[0.2em] py-[0.03em] shadow-[6px_6px_0_#111] max-[560px]:mt-1 max-[560px]:shadow-[4px_4px_0_#111]">
                  IMPROVE.
                </span>
                <span className={`${heroHighlightClassName} block`}>SUCCEED.</span>
              </h1>

              <p className="mt-4 max-w-[330px] text-[0.92rem] leading-[1.45] text-[#111] max-[1100px]:mt-[18px] max-[1100px]:max-w-[380px] max-[1100px]:text-[1rem] max-[720px]:mt-3.5 max-[720px]:max-w-[320px] max-[720px]:text-[0.9rem] max-[720px]:leading-[1.35] max-[560px]:mt-3 max-[560px]:max-w-[270px] max-[560px]:text-[0.82rem]">
                AI-powered resume review and interview prep to help you build
                confidence, spot gaps, and move faster.
              </p>
            </div>

            <div
              aria-hidden="true"
              className="absolute bottom-[22px] left-[20px] h-[90px] w-[82px] bg-[radial-gradient(circle,_#111_2.4px,_transparent_2.4px)] [background-size:18px_18px] opacity-95 max-[720px]:bottom-[18px] max-[720px]:left-[18px] max-[720px]:h-[78px] max-[720px]:w-[70px] max-[720px]:[background-size:16px_16px] max-[560px]:bottom-3.5 max-[560px]:left-3.5 max-[560px]:h-[64px] max-[560px]:w-[58px] max-[560px]:[background-size:14px_14px]"
            />

            <div
              aria-hidden="true"
              className="absolute bottom-0 right-0 flex items-end justify-end"
            >
              <span className="block h-[46px] w-[104px] border-l-[4px] border-t-[4px] border-[#111] bg-gradient-to-b from-[#6fe7a0] to-[#4edb8e] shadow-[8px_8px_0_rgba(17,17,17,0.28)] max-[720px]:h-[38px] max-[720px]:w-[82px] max-[560px]:h-8 max-[560px]:w-[68px]" />
              <span className="-ml-px block h-[92px] w-[72px] border-l-[4px] border-t-[4px] border-[#111] bg-gradient-to-b from-[#6fe7a0] to-[#4edb8e] shadow-[8px_8px_0_rgba(17,17,17,0.28)] max-[720px]:h-[74px] max-[720px]:w-[58px] max-[560px]:h-[62px] max-[560px]:w-[48px]" />
              <span className="-ml-px block h-[138px] w-[44px] border-l-[4px] border-t-[4px] border-[#111] bg-gradient-to-b from-[#6fe7a0] to-[#4edb8e] shadow-[8px_8px_0_rgba(17,17,17,0.28)] max-[720px]:h-[108px] max-[720px]:w-[38px] max-[560px]:h-[90px] max-[560px]:w-8" />
            </div>
          </aside>

          <section className={`${cardFrameClassName} ${authPanelClassName}`} aria-labelledby="login-title">
            <div
              aria-hidden="true"
              className="absolute right-4 top-4 h-[52px] w-[52px] border-[4px] border-[#111] bg-gradient-to-b from-[#b388ff] to-[#8f6fff] shadow-[6px_6px_0_#111] max-[1100px]:h-[52px] max-[1100px]:w-[52px]"
            />
            <div
              aria-hidden="true"
              className="absolute right-[-10px] top-[146px] h-[68px] w-[68px] border-[4px] border-[#111] bg-gradient-to-b from-[#ff778c] to-[#ff6a80] shadow-[6px_6px_0_rgba(17,17,17,0.35)] max-[1100px]:hidden"
            />

            <h2
              id="login-title"
              className="relative z-10 mt-1 mb-2.5 w-fit border-[3px] border-[#111] bg-gradient-to-b from-[#a88cff] to-[#8f6fff] px-[14px] py-[9px] text-[1.7rem] font-black leading-none tracking-[-0.08em] text-[#111] shadow-[5px_5px_0_#111] max-[720px]:mt-[2px] max-[720px]:mb-[9px] max-[720px]:px-[13px] max-[720px]:py-2 max-[720px]:text-[1.45rem] max-[720px]:shadow-[5px_5px_0_#111] max-[560px]:text-[1.25rem] max-[560px]:shadow-[4px_4px_0_#111]"
            >
              WELCOME BACK
            </h2>
            <p className="relative z-10 mb-[15px] mt-[7px] text-[clamp(0.92rem,0.98vw,1.05rem)] leading-[1.45] text-[#111] max-[720px]:mb-4 max-[720px]:mt-[7px] max-[720px]:text-[0.9rem] max-[560px]:mb-3.5 max-[560px]:mt-[6px] max-[560px]:text-[0.84rem]">
              Log in to continue your journey
            </p>

            <form className="relative z-10 flex flex-1 flex-col" onSubmit={handleSubmit} noValidate>
              <div className="mb-[11px] max-[560px]:mb-2.5">
                <label htmlFor="email" className="mb-[5px] block text-[0.94rem] font-black max-[720px]:text-[0.88rem] max-[560px]:mb-1 max-[560px]:text-[0.82rem]">
                  Email
                </label>
                <div
                  className={`${inputShellClassName} ${
                    showEmailError ? 'border-[#e11d48]' : 'border-[#111]'
                  }`}
                >
                  <Mail className="h-5 w-5 shrink-0 text-[#111] max-[560px]:h-[17px] max-[560px]:w-[17px]" aria-hidden="true" />
                  <input
                    id="email"
                    name="email"
                    type="email"
                    inputMode="email"
                    autoComplete="email"
                    placeholder="Enter your email"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    aria-invalid={Boolean(showEmailError)}
                    aria-describedby={showEmailError ? 'email-error' : undefined}
                    className="w-full min-w-0 border-0 bg-transparent text-[0.94rem] text-[#111] outline-none placeholder:text-[rgba(17,17,17,0.45)] max-[560px]:text-[0.86rem]"
                  />
                </div>
                {showEmailError ? (
                  <p id="email-error" className="mt-[6px] text-[0.84rem] font-bold text-[#d01445] max-[560px]:mt-1 max-[560px]:text-[0.78rem]">
                    {errors.email}
                  </p>
                ) : null}
              </div>

              <div className="mb-[11px] max-[560px]:mb-2.5">
                <label htmlFor="password" className="mb-[5px] block text-[0.94rem] font-black max-[720px]:text-[0.88rem] max-[560px]:mb-1 max-[560px]:text-[0.82rem]">
                  Password
                </label>
                <div
                  className={`${inputShellClassName} ${
                    showPasswordError ? 'border-[#e11d48]' : 'border-[#111]'
                  }`}
                >
                  <Lock className="h-5 w-5 shrink-0 text-[#111] max-[560px]:h-[17px] max-[560px]:w-[17px]" aria-hidden="true" />
                  <input
                    id="password"
                    name="password"
                    type={showPassword ? 'text' : 'password'}
                    autoComplete="current-password"
                    placeholder="Enter your password"
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    aria-invalid={Boolean(showPasswordError)}
                    aria-describedby={showPasswordError ? 'password-error' : undefined}
                    className="w-full min-w-0 border-0 bg-transparent pr-2 text-[0.94rem] text-[#111] outline-none placeholder:text-[rgba(17,17,17,0.45)] max-[560px]:pr-1 max-[560px]:text-[0.86rem]"
                  />
                  <button
                    type="button"
                    className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-transparent text-[#111] transition-all duration-150 hover:bg-black/5 active:translate-y-px focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-black/20 max-[720px]:h-8 max-[720px]:w-8 max-[560px]:h-[30px] max-[560px]:w-[30px]"
                    onClick={() => setShowPassword((current) => !current)}
                    aria-label={showPassword ? 'Hide password' : 'Show password'}
                    aria-pressed={showPassword}
                  >
                    {showPassword ? (
                      <EyeOff size={22} aria-hidden="true" />
                    ) : (
                      <Eye size={22} aria-hidden="true" />
                    )}
                  </button>
                </div>
                {showPasswordError ? (
                  <p id="password-error" className="mt-[6px] text-[0.84rem] font-bold text-[#d01445] max-[560px]:mt-1 max-[560px]:text-[0.78rem]">
                    {errors.password}
                  </p>
                ) : null}
              </div>

              <div className="mb-3 flex justify-end max-[720px]:mb-3 max-[560px]:mb-[10px]">
                <a
                  href="#forgot-password"
                  onClick={handlePlaceholderAction('Password reset is not wired up yet.')}
                  className="font-black text-[#111] underline decoration-current underline-offset-[3px] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-black/20"
                >
                  Forgot Password?
                </a>
              </div>

              <button type="submit" className={primaryButtonClassName}>
                <span>LOG IN</span>
                <ArrowRight size={32} aria-hidden="true" />
              </button>

              <div className="my-4 flex items-center gap-5 max-[720px]:my-[14px] max-[720px]:gap-3 max-[560px]:my-[12px] max-[560px]:gap-2.5">
                <span className="h-[2px] flex-1 bg-[rgba(17,17,17,0.55)]" />
                <strong className="text-[1.1rem] font-black max-[720px]:text-[0.9rem] max-[560px]:text-[0.8rem]">OR</strong>
                <span className="h-[2px] flex-1 bg-[rgba(17,17,17,0.55)]" />
              </div>

              <button type="button" className={secondaryButtonClassName}>
                <GoogleMark />
                <span>Continue with Google</span>
              </button>

              <p className="mt-3 text-center text-[0.88rem] max-[720px]:mt-[11px] max-[720px]:text-[0.86rem] max-[560px]:mt-[9px] max-[560px]:text-[0.8rem]">
                Don&apos;t have an account?{' '}
                <a
                  href="#signup"
                  onClick={handlePlaceholderAction('Signup flow is not wired up yet.')}
                  className="font-black text-[#111] underline decoration-current underline-offset-[3px] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-black/20"
                >
                  Sign up
                </a>
              </p>

              <p
                className="mt-2.5 min-h-[1.5em] text-center text-[0.86rem] font-bold text-[#111] max-[720px]:mt-2 max-[720px]:text-[0.8rem] max-[560px]:mt-1.5 max-[560px]:text-[0.75rem]"
                aria-live="polite"
              >
                {statusMessage}
              </p>
            </form>
          </section>
        </section>

        <span id="forgot-password" className="sr-only" aria-hidden="true">
          Forgot password placeholder
        </span>
        <span id="signup" className="sr-only" aria-hidden="true">
          Signup placeholder
        </span>
      </main>
    </div>
  )
}
