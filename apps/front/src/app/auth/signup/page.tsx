import Link from "next/link";
import SignUpForm from "./_components/signUpForm";

const SignUpPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4 sm:p-6 lg:p-8">
      <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-xl flex flex-col items-center gap-6 border border-gray-100">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-2">
          Create Your Account
        </h2>
        <p className="text-gray-600 text-center -mt-4">
          Join us and start exploring amazing content!
        </p>

        {/* Sign Up form here */}
        <SignUpForm />

        {/* Already have an account? */}
        <div className="text-center text-sm text-gray-600 mt-2">
          Already have an account?{" "}
          <Link
            className="text-indigo-600 hover:text-indigo-800 transition-colors duration-200 font-medium"
            href={"/auth/signin"}
          >
            Sign In
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
