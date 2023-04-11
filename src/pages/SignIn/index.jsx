export default function SignIn() {
  return (
    <>
      <div className="h-screen flex justify-center items-center bg-gray-200">
        <div className="artboard-demo phone-2 p-6">
          <h1 className="text-2xl">Sign in with email</h1>
          <p className="mt-6 text-gray-900 font-light">
            Enter the email address associated with your account.
          </p>
          <form action="" className="mt-10 w-full">
            <div>
              <input
                type="email"
                placeholder="Type your email"
                className="border border-gray-300 rounded-lg p-3 w-full bg-gray-50"
              />
            </div>
            <div className="mt-6">
              <input
                type="password"
                placeholder="Type your password"
                className="border border-gray-300 rounded-lg p-3 w-full bg-gray-50"
              />
            </div>
            <div className="mt-6">
              <button className="btn btn-primary w-full">Sign in</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
