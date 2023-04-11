import React from "react";
import Image from "next/image";
import { signIn } from "next-auth/react";
const Login = () => {
  return (
    <div className="flex flex-col p-2 items-center justify-center">
      <Image
        src="https://links.papareact.com/t4i"
        width={400}
        height={400}
        alt="Logo"
      />
      <button
        onClick={signIn}
        className="bg-blue-500 py-3 px-4 rounded-3xl text-white font-semibold"
      >
        Sign In with google
      </button>
    </div>
  );
};

export default Login;
