"use client";

import {FC, FormEvent, useState} from "react";
import {CardDataItem} from "@/src/components/card";

const RegistrationForm: FC<{ event: CardDataItem }> = ({event}) => {
  const [email, setEmail] = useState("");

  const register = (e: FormEvent) => {
    e.preventDefault();
    console.log(`Registering email: ${email} for event: ${event.id}`);
  };

  return (
    <form className="mt-4 w-full max-w-lg flex items-center space-x-2" onSubmit={register}>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
        className="flex-grow px-4 py-2 bg-gray-800 text-white placeholder-gray-500 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        required
      />
      <button
        type="submit"
        className="px-4 py-2 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        Register
      </button>
    </form>
  );
};

export default RegistrationForm;
