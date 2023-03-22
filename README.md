# sveltekit-supabase-example

Simple Sveltekit demo application that incorporates the Supabase library for authentication.

## Prerequisites
- You have a Supabase project
- You have a Google Account 
  - This is not a hard requirement, as you can easily switch which OAuth provider you want in this demo application

## Setup
- `cd app/ && npm i`
- Copy the `.example.env` to `.env` and fill in the variables
- Enable the email provider on Supabase
- Enable and setup the  Google OAuth provider on Supabase
- `npm run dev`

## Features
- Email/password login
- OAuth login with Google

## Notes
- If you do not want/need users to verify their accounts when registering/logging in with email/password, make sure to disable the "Confirm account" setting in the Supabase project page for email authentication. Otherwise, when a users tries to registers or log in, the session they get back from Supabase will be `null`