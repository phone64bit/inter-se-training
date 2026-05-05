"use client";

import Link from "next/link";
import { authClient } from "@/lib/auth-client";

export function Navbar() {
  const { data: session } = authClient.useSession();

  return (
    <nav className="border-b border-gray-200 bg-white px-4 py-3">
      <div className="mx-auto flex max-w-5xl items-center justify-between">
        <Link href="/" className="text-lg font-semibold">
          Task Tracker
        </Link>
        <div className="flex items-center gap-4">
          <Link href="/tasks" className="text-gray-700 hover:text-gray-900">
            Tasks
          </Link>
          {session ? (
            <button
              onClick={() => authClient.signOut()}
              className="rounded bg-gray-800 px-3 py-1.5 text-sm text-white hover:bg-gray-700"
            >
              Logout
            </button>
          ) : (
            <Link
              href="/login"
              className="rounded bg-blue-600 px-3 py-1.5 text-sm text-white hover:bg-blue-500"
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}
