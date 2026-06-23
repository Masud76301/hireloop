"use server"

import { serverMutation } from "../core/server"

export const createdSubscription = async (subInfo) =>{
    return serverMutation('/api/subscription', subInfo);
}