import { stripe } from '@/app/lib/stripe'
import { redirect } from 'next/navigation'
import Link from 'next/link'
import { createdSubscription } from '@/app/lib/action/subscriptions'

export default async function Success({ searchParams }) {
  const { session_id } = await searchParams

  if (!session_id)
    // throw new Error('Please provide a valid session_id (`cs_test_...`)')
      return <h1>Session Id is not founded</h1>

  const {
    status,
    customer_details: { email: customerEmail },
    metadata
  } = await stripe.checkout.sessions.retrieve(session_id, {
    expand: ['line_items', 'payment_intent']
  })

  if (status === 'open') {
    return redirect('/')
  }

  if (status === 'complete') {
    const subsInfo = {
      email : customerEmail,
      planId : metadata.planId
    }
    const result = await createdSubscription(subsInfo);
    console.log(result);
    return (
      <main className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center p-4 antialiased">
        <div className="max-w-md w-full bg-white rounded-2xl shadow-xl shadow-slate-200/80 p-8 text-center border border-slate-100 transition-all">
          
          {/* Animated Success Icon */}
          <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-emerald-50 mb-6">
            <svg 
              className="h-8 w-8 text-emerald-500 animate-bounce" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor" 
              strokeWidth="2.5"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>

          {/* Header */}
          <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight mb-2">
            Thank you!
          </h1>
          <p className="text-emerald-600 font-medium text-sm mb-6">
            Payment Processed Successfully
          </p>

          <hr className="border-slate-100 my-4" />

          {/* Order Details Body */}
          <div className="text-slate-600 space-y-4 text-sm leading-relaxed my-6">
            <p>
              We appreciate your business! A confirmation email and receipt have been sent to:
            </p>
            <p className="font-semibold text-slate-800 bg-slate-50 py-2 px-3 rounded-lg inline-block break-all border border-slate-100">
              {customerEmail}
            </p>
            <p className="text-xs text-slate-400 mt-2">
              If you have any questions, please contact our support team at{' '}
              <a 
                href="mailto:orders@example.com" 
                className="text-indigo-600 hover:text-indigo-500 underline font-medium underline-offset-2"
              >
                orders@example.com
              </a>.
            </p>
          </div>

          <hr className="border-slate-100 my-4" />

          {/* Action Buttons */}
          <div className="mt-8 space-y-3">
            <Link
              href="/"
              className="w-full inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-xl text-white bg-indigo-600 hover:bg-indigo-700 shadow-sm shadow-indigo-200 transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Return to Home
            </Link>
          </div>
          
        </div>
      </main>
    )   
  }
}