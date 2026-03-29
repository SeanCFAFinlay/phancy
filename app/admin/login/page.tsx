"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function LoginPage() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    // Check if already logged in
    async function checkAuth() {
      try {
        const res = await fetch("/api/auth/check");
        const data = await res.json();
        if (data.authenticated) {
          router.push("/admin");
        }
      } catch (err) {
        console.error(err);
      } finally {
        setChecking(false);
      }
    }
    checkAuth();
  }, [router]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      const data = await res.json();

      if (data.success) {
        router.push("/admin");
      } else {
        setError(data.error || "Login failed");
      }
    } catch (err) {
      setError("An error occurred. Please try again.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  if (checking) {
    return (
      <div className="min-h-screen bg-[var(--cream)] flex items-center justify-center">
        <div className="animate-pulse text-[var(--muted)]">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[var(--cream)] flex items-center justify-center p-6">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-10 animate-fade-in">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-[var(--forest)] text-white text-2xl font-bold mb-4 shadow-lg">
            P
          </div>
          <h1 className="font-[var(--font-display)] text-2xl font-bold text-[var(--off-black)]">
            Phancy Admin
          </h1>
          <p className="text-[var(--muted)] mt-2">
            Sign in to manage your collection
          </p>
        </div>

        {/* Login Card */}
        <div className="bg-[var(--warm-white)] rounded-[var(--radius-xl)] shadow-xl p-8 border border-[var(--line)] animate-slide-up">
          {error && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl text-red-600 text-sm animate-shake">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="phancy-label">Username</label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                autoComplete="username"
                className="phancy-input phancy-input-lg"
                placeholder="Enter username"
              />
            </div>

            <div>
              <label className="phancy-label">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                autoComplete="current-password"
                className="phancy-input phancy-input-lg"
                placeholder="Enter password"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="phancy-btn phancy-btn-primary phancy-btn-lg w-full"
            >
              {loading ? (
                <span className="flex items-center justify-center gap-2">
                  <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                      fill="none"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    />
                  </svg>
                  Signing in...
                </span>
              ) : (
                "Sign In"
              )}
            </button>
          </form>

          <div className="mt-8 pt-6 border-t border-[var(--line)] text-center">
            <p className="text-sm text-[var(--muted)]">
              Default credentials: <code className="bg-[var(--cream-dark)] px-2 py-1 rounded">admin</code> / <code className="bg-[var(--cream-dark)] px-2 py-1 rounded">phancy2024</code>
            </p>
          </div>
        </div>

        {/* Back to site */}
        <div className="text-center mt-8">
          <Link
            href="/"
            className="text-[var(--muted)] hover:text-[var(--forest)] text-sm transition-colors"
          >
            ← Back to Phancy
          </Link>
        </div>
      </div>
    </div>
  );
}
