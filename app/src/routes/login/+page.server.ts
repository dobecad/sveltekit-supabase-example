import type { Actions, PageServerLoad } from './$types';
import { supabase } from '$lib/supabase';
import { AuthApiError } from '@supabase/supabase-js';
import { fail, redirect } from '@sveltejs/kit';

export const load: PageServerLoad = async () => {
    supabase.auth.getSession();
    return {};
};

export const actions: Actions = {
    login: async ({locals, request}) => {
        const body = Object.fromEntries(await request.formData())
        
        const { data, error: err } = await locals.supabase.auth.signInWithPassword({
			email: body.email as string,
			password: body.password as string
		});

		if (err) {
			if (err instanceof AuthApiError) {
				return fail(400, {
					error: 'Invalid email or password'
				});
			}
			return fail(500, {
				error: 'Server encountered an error while registering user'
			});
		}

		throw redirect(303, '/');
    }
};