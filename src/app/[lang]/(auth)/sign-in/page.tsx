'use client'
import { useSignInMutation } from '@/store/services/auth'
import React from 'react'

export default function SignIn() {
    //demo rtk query
    const [signUp, {isLoading}] = useSignInMutation();
    return (
        <div>
            SIGN IN PAGE
        </div>
    )
}
