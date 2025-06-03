
"use client";
import SubmitButton from "@/components/SubmitButton";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { signIn } from "@/lib/actions/auth";
import { useActionState } from "react";

const SignInForm = () => {
  const [state, action] = useActionState(signIn, undefined);
  return (
    <form action={action} className="w-full flex flex-col gap-4">
      {!!state?.message && (
        <p className="text-red-600 text-sm font-medium text-center bg-red-50 p-2 rounded-md border border-red-200">
          {state.message}
        </p>
      )}
      <div className="space-y-2">
        <Label htmlFor="email" className="block text-sm font-medium text-gray-700">
          Email
        </Label>
        <Input
          id="email"
          name="email"
          placeholder="john@example.com"
          type="email"
          className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2.5 border"
          defaultValue={state?.data?.email} // Use optional chaining for state.data
        />
        {!!state?.errors?.email && (
          <p className="text-red-500 text-xs mt-1">{state.errors.email}</p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="password" className="block text-sm font-medium text-gray-700">
          Password
        </Label>
        <Input
          id="password"
          name="password"
          type="password"
          className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2.5 border"
          defaultValue={state?.data?.password} // Use optional chaining for state.data
        />
        {!!state?.errors?.password && (
          <p className="text-red-500 text-xs mt-1">{state.errors.password}</p>
        )}
      </div>

      <SubmitButton className="w-full py-2.5 px-4 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white font-semibold transition-colors duration-200">
        Sign In
      </SubmitButton>
    </form>
  );
};

export default SignInForm;
