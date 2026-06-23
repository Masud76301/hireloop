import 'server-only'

import Stripe from 'stripe'

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)

export const PLAN_PRICE_ID = {
    'seeker_pro':'price_1Tk2VLHBbD1KRUOk9SoWmMKg',
    'seeker_premium':'price_1Tk44HHBbD1KRUOk1pC0ACYT',
    'recruiter_growth':'price_1Tk46JHBbD1KRUOkQKdIHaez',
    'recruiter_enterprise':'price_1Tk477HBbD1KRUOkU3NfYp14',
    

}