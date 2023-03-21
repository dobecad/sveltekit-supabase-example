<!-- YOU CAN DELETE EVERYTHING IN THIS PAGE -->

<script lang="ts">
	import type { PageData } from "./$types";

	export let data: PageData;
</script>

<div class="container h-full mx-auto">
	<div class="flex justify-center">
		<div class="justify-center">
			<h1>Welcome to Sveltekit and Supabase!</h1>
		</div>
	</div>
	<div class="flex justify-center pt-4">
		{#if data.session}
			 <h1>Hello, {data.session.user.email}!</h1>
		{:else}
			<h1>Login or Register</h1>
		{/if}
	</div>

</div>
