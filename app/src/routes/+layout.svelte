<script lang="ts">
	// The ordering of these imports is critical to your app working properly
	import '@skeletonlabs/skeleton/themes/theme-skeleton.css';
	// If you have source.organizeImports set to true in VSCode, then it will auto change this ordering
	import '@skeletonlabs/skeleton/styles/all.css';
	// Most of your app wide CSS should be put in this file
	import '../app.postcss';

	import { AppBar, AppShell } from '@skeletonlabs/skeleton';
	import type { LayoutData } from './$types';

	export let data: LayoutData;

	import { onMount } from 'svelte';
	import { invalidateAll } from '$app/navigation';

	$: ({ supabase } = data);

	onMount(() => {
		const { data } = supabase.auth.onAuthStateChange(() => {
			invalidateAll();
		});

		return () => data.subscription.unsubscribe();
	});
</script>

<AppShell>
	<svelte:fragment slot="header">
		<AppBar padding="p-6">
			<svelte:fragment slot="lead">Example App</svelte:fragment>
			<svelte:fragment slot="trail">
				{#if !data.session}
					<a href="/login"><button class="btn variant-filled">Login</button></a>
					<a href="/register"><button class="btn variant-filled">Register</button></a>
				{:else}
					<form action="/logout" method="POST">
						<button type="submit" class="btn variant-filled">Logout</button>
					</form>
				{/if}
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>
	<div class="flex justify-center pt-24">
		<slot />
	</div>
</AppShell>
