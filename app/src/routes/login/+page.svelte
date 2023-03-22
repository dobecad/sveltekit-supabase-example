<div class="w-96">
    <form action="?/login" method="POST">
        <div class="mb-8">
            <label for="email" class="label">
                <span>Email:</span>
                <input type="text" id="email" name="email" class="input">
            </label>
        </div>

        <div class="mb-8">
            <label for="password" class="label">
                <span>Password:</span>
                <input type="password" id="password" name="password" class="input">
            </label>
        </div>

        <div class="flex justify-center gap-4 mb-8">
            <button type="submit" class="btn variant-filled-primary w-48">Login</button>
        </div>

        <hr class="mb-4"/>

        <h1 class="mb-8">OAuth Providers</h1>
        <div class="flex justify-center">
            <button type="submit" class="btn variant-ghost-primary w-48" formaction="?/login&provider=google">Google</button>
        </div>
    </form>
</div>