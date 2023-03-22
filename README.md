# sveltekit-supabase-example

Simple Sveltekit app that incorporates the Supabase library for authentication


## Features
- Email/password login
- OAuth login with Google

## Notes
- If you do not want/need users to verify their accounts when registering/logging in with email/password, make sure to disable the "Confirm account" setting in the Supabase project page for email authentication. Otherwise, when a users tries to registers or log in, the session they get back from Supabase will be `null`