'use client';

import { useState } from 'react';
import { cn } from '@/lib/utils';

export function Newsletter() {
  const [email, setEmail] = useState('');
  const [consent, setConsent] = useState(false);
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!email || !consent) {
      setStatus('error');
      setMessage('Please provide an email and consent.');
      return;
    }

    setStatus('loading');
    setMessage('');

    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) {
        throw new Error('Subscription failed');
      }

      setStatus('success');
      setMessage('Thanks for subscribing!');
      setEmail('');
      setConsent(false);
    } catch (error) {
      setStatus('error');
      setMessage(
        error instanceof Error ? error.message : 'An error occurred. Please try again.'
      );
    }
  };

  return (
    <section className="bg-[#f8f8f8] py-24 md:py-24">
      <div className="mx-auto max-w-3xl px-6 md:px-8 text-center">
        {/* Pretitle */}
        <p className="mb-4 text-base font-normal tracking-[1px] text-black uppercase">
          STAY INFORMED
        </p>

        {/* Heading */}
        <h2 className="mb-6 text-5xl md:text-[43px] font-normal tracking-[1px] text-black uppercase">
          MARKET UPDATES
        </h2>

        {/* Description */}
        <p className="mb-8 text-base font-normal text-black">
          Subscribe to receive the latest real estate news and market updates.
        </p>

        {/* Success/Error Message */}
        {status === 'success' && (
          <div className="mb-8 p-4 bg-green-50 border border-green-200 text-green-700 text-center">
            {message}
          </div>
        )}
        {status === 'error' && (
          <div className="mb-8 p-4 bg-red-50 border border-red-200 text-red-700 text-center">
            {message}
          </div>
        )}

        {/* Form */}
        {status !== 'success' && (
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            {/* Email Input */}
            <div className="flex flex-col gap-4">
              <input
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className={cn(
                  'w-full border-b-2 border-black bg-transparent px-0 py-3 text-base font-normal placeholder-gray-600 outline-none transition-colors duration-300',
                  'focus:border-black focus:placeholder-gray-400'
                )}
              />

              {/* Consent Checkbox */}
              <label className="flex items-start gap-3 text-left">
                <input
                  type="checkbox"
                  checked={consent}
                  onChange={(e) => setConsent(e.target.checked)}
                  className="mt-1 h-4 w-4"
                  required
                />
                <span className="text-sm font-normal text-black">
                  I consent to receive email updates about market trends and real estate news.
                </span>
              </label>
            </div>

            {/* Submit Button */}
            <div className="flex justify-center">
              <button
                type="submit"
                disabled={status === 'loading'}
                className={cn(
                  'lp-btn lp-btn-dark',
                  'border-2 border-black bg-black px-12 py-5 text-center text-sm font-bold uppercase text-white tracking-[1.5px] transition-all duration-200',
                  'hover:bg-gray-800 hover:border-gray-800',
                  'disabled:opacity-50 disabled:cursor-not-allowed'
                )}
              >
                {status === 'loading' ? 'SUBSCRIBING...' : 'SUBSCRIBE'}
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}
