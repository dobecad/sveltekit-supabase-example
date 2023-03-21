<script lang="ts">
    import type { PageData } from './$types';
    
    export let data: PageData;
</script>


<div>
    <form action="?/register" method="POST">
        <label for="email" class="label">
            <span>Email:</span>
            <input type="text" name="email" class="input">
        </label>
        <label for="password" class="label">
            <span>Password:</span>
            <input type="password" name="password" class="input">
        </label>
        <button type="submit" class="btn variant-filled">Register</button>
    </form>
</div>