/* eslint-disable jsx-a11y/alt-text */
import Image from 'next/image';
import React from 'react';
import { signIn } from 'next-auth/react';

function Login({ providers }) {
  return (
    <div className="flex flex-col items-center space-y-20 mt-40">
      <Image
        src="/twitter-logo-4.png"
        width={300}
        height={300}
        objectFit="contain"
      />

      <div>
        {Object.values(providers).map((provider) => (
          <div key={provider.name}>
            <button
              onClick={() => signIn(provider.id, { callbackUrl: '/' })}
              className="relative inline-flex items-center justify-center px-6 py-3 text-lg font-bold tracking-tighter text-white bg-gray-800 rounded-md group"
            >
              <span className="absolute inset-0 w-full h-full mt-1 ml-1 transition-all duration-300 ease-in-out bg-[#87ceeb] rounded-md group-hover:mt-0 group-hover:ml-0"></span>
              <span className="absolute inset-0 w-full h-full bg-white rounded-md "></span>
              <span className="absolute inset-0 w-full h-full transition-all duration-200 ease-in-out delay-100 bg-[#87ceeb] rounded-md opacity-0 group-hover:opacity-100 "></span>
              <span className="relative text-[#87ceeb] transition-colors duration-200 ease-in-out delay-100 group-hover:text-white">
                Sign in with {provider.name}
              </span>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Login;
