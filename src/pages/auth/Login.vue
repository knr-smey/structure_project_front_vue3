<template>
	<div class="min-h-screen bg-slate-100">
		<div class="mx-auto flex min-h-screen max-w-md items-center px-4">
			<div class="w-full rounded-none bg-white p-8 shadow-xl">
				<div class="mb-6 text-center">
					<h1 class="text-2xl font-semibold text-slate-900">Welcome back</h1>
					<p class="mt-1 text-sm text-slate-500">Login to continue</p>
				</div>
				<form class="space-y-4" @submit.prevent="onSubmit">
					<div class="space-y-2">
						<label class="text-sm font-medium text-slate-700" for="login-email">Email</label>
						<BaseInput
							id="login-email"
							v-model="form.email"
							type="email"
							placeholder="you@example.com"
							autocomplete="email"
							required
						/>
					</div>
					<div class="space-y-2">
						<label class="text-sm font-medium text-slate-700" for="login-password">Password</label>
						<BaseInput
							id="login-password"
							v-model="form.password"
							type="password"
							placeholder="Your password"
							autocomplete="current-password"
							required
						/>
					</div>
					<BaseButton text="Login" color="primary" />
				</form>
				<p class="mt-6 text-center text-sm text-slate-600">
					Don't have an account?
					<RouterLink class="font-semibold text-blue-600 hover:text-blue-700" to="/register">
						Create one
					</RouterLink>
				</p>
			</div>
		</div>
	</div>
</template>

<script setup>
import { reactive } from 'vue'
import BaseInput from '@/components/base/BaseInput.vue'
import BaseButton from '@/components/base/BaseButton.vue'

// Local form state for login.
const form = reactive({
	email: '',
	password: ''
})

// Demo submit handler.
const onSubmit = () => {
	console.log('Login submit', { ...form })
}
</script>