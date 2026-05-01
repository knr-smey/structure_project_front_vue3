<template>
	<div class="min-h-screen bg-slate-100">
		<div class="mx-auto flex min-h-screen max-w-md items-center px-4">
			<div class="w-full rounded-none bg-white p-8 shadow-xl">
				<div class="mb-6 text-center">
					<h1 class="text-2xl font-semibold text-slate-900">Create account</h1>
					<p class="mt-1 text-sm text-slate-500">Start your journey</p>
				</div>
				<form class="space-y-4" @submit.prevent="onSubmit">
					<div class="space-y-2">
						<label class="text-sm font-medium text-slate-700" for="register-name">Name</label>
						<BaseInput
							id="register-name"
							v-model="form.name"
							type="text"
							placeholder="Your name"
							autocomplete="name"
							required
						/>
					</div>
					<div class="space-y-2">
						<label class="text-sm font-medium text-slate-700" for="register-email">Email</label>
						<BaseInput
							id="register-email"
							v-model="form.email"
							type="email"
							placeholder="you@example.com"
							autocomplete="email"
							required
						/>
					</div>
					<div class="space-y-2">
						<label class="text-sm font-medium text-slate-700" for="register-password">Password</label>
						<BaseInput
							id="register-password"
							v-model="form.password"
							type="password"
							placeholder="Create a password"
							autocomplete="new-password"
							required
						/>
					</div>
					<BaseButton type="submit">Create Account</BaseButton>
				</form>
				<p class="mt-6 text-center text-sm text-slate-600">
					Already have an account?
					<RouterLink class="font-semibold text-blue-600 hover:text-blue-700" to="/login">
						Login
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

// Local form state for registration.
const form = reactive({
	name: '',
	email: '',
	password: ''
})

// Demo submit handler.
const onSubmit = () => {
	console.log('Register submit', { ...form })
}
</script>