<script>
	import isEmail from 'validator/lib/isEmail';
	import isPassportNumber from 'validator/lib/isPassportNumber';
	import { getTranslation } from '../../translations';
	import { language, registrationInfo } from '../../store';
	import { goto } from '$app/navigation';
	import toast from 'svelte-french-toast';
	let data = {
		country: '',
		firstName: '',
		lastName: '',
		email: '',
		birthday: '',
		passportNr: ''
	};
	const maxAgeTimestamp = new Date('1996-06-12').getTime() / 1000;
	const minAgeTimestamp = new Date('2005-06-12').getTime() / 1000;
	function isBirthdayValid(bday) {
		if (bday.length === 10) {
			const bdayTimestamp = new Date(bday).getTime() / 1000;
			console.log({ bdayTimestamp });
			if (bdayTimestamp <= minAgeTimestamp && bdayTimestamp >= maxAgeTimestamp) {
				return true;
			}
		}
		return false;
	}
	let status = '';
</script>

<div class="flex flex-col border rounded-xl p-4 sm:p-6 lg:p-8 dark:border-gray-700">
	<h2 class="mb-8 text-xl font-semibold text-gray-800 dark:text-gray-200">
		{getTranslation('form_info', $language)}
	</h2>

	<form
		on:submit|preventDefault={() => {
			if (['', 'invalidData'].includes(status)) {
				if (
					(isPassportNumber(data.passportNr, 'DE') || isPassportNumber(data.passportNr, 'FR')) &&
					isEmail(data.email) &&
					isBirthdayValid(data.birthday) &&
					data.firstName.trim() &&
					data.lastName.trim()
				) {
					data.country = 'DE';
					if (isPassportNumber(data.passportNr, 'FR')) {
						data.country = 'FR';
					}
					toast?.dismiss();
					toast.loading('Registrierung läuft...');
					status = 'submitting';
					setTimeout(() => {
						toast?.dismiss();
						toast.success('Registriert');
						status = 'success';
						registrationInfo.set(data);
						localStorage.setItem('registrationinfo', JSON.stringify(data));
						goto('/success');
					}, 1500);
				} else {
					toast?.dismiss();
					// toast.error('unvollständige/ falsche Daten');
					status = 'invalidData';
				}
			}
		}}
	>
		{#if status === 'invalidData'}
			<div
				class="mt-2 bg-red-500 text-sm text-white rounded-md p-4 mb-4 selection:bg-white selection:text-black"
				role="alert"
			>
				Deine Daten sind unvollständig/ falsch.<br />Bitte überprüfe die markierten Felder.
			</div>
		{/if}
		<div class="grid gap-4 lg:gap-6">
			<div class="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
				<div>
					<label
						for="hs-firstname-contacts-1"
						class="block text-sm text-gray-700 font-medium dark:text-white"
						>{getTranslation('form_label_firstname', $language)}</label
					>
					<input
						placeholder={getTranslation('form_label_firstname', $language)}
						class:border-red-500={status === 'invalidData' && !data.firstName.trim()}
						bind:value={data.firstName}
						required
						type="text"
						name="hs-firstname-contacts-1"
						id="hs-firstname-contacts-1"
						class="py-3 px-4 block w-full border-gray-200 border rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
					/>
				</div>

				<div>
					<label
						for="hs-lastname-contacts-1"
						class="block text-sm text-gray-700 font-medium dark:text-white"
						>{getTranslation('form_label_lastname', $language)}</label
					>
					<input
						placeholder={getTranslation('form_label_lastname', $language)}
						class:border-red-500={status === 'invalidData' && !data.lastName.trim()}
						bind:value={data.lastName}
						required
						type="text"
						name="hs-lastname-contacts-1"
						id="hs-lastname-contacts-1"
						class="py-3 px-4 block w-full border-gray-200 border rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
					/>
				</div>
			</div>
			<!-- End Grid -->

			<!-- Grid -->
			<div class="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
				<div>
					<label
						for="hs-email-contacts-1"
						class="block text-sm text-gray-700 font-medium dark:text-white"
						>{getTranslation('form_label_email', $language)}</label
					>
					<input
						class:border-red-500={status === 'invalidData' && !isEmail(data.email)}
						placeholder={getTranslation('form_label_email', $language)}
						bind:value={data.email}
						required
						type="email"
						name="hs-email-contacts-1"
						id="hs-email-contacts-1"
						autocomplete="email"
						class="py-3 px-4 block w-full border-gray-200 border rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
					/>
				</div>
				<div>
					<label for="hs-bday" class="block text-sm text-gray-700 font-medium dark:text-white"
						>Geburtstag</label
					>
					<input
						required
						type="date"
						class:border-red-500={status === 'invalidData' && !isBirthdayValid(data.birthday)}
						bind:value={data.birthday}
						autocomplete="birthday"
						name="hs-bday"
						id="hs-bday"
						class="py-3 px-4 block w-full border-gray-200 border rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 uppercase"
					/>
				</div>
				<div>
					<label
						for="hs-phone-number-1"
						class="block text-sm text-gray-700 font-medium dark:text-white"
						>{getTranslation('form_label_id', $language)}</label
					>
					<input
						class:border-red-500={status === 'invalidData' &&
							!(isPassportNumber(data.passportNr, 'DE') || isPassportNumber(data.passportNr, 'FR'))}
						bind:value={data.passportNr}
						placeholder="z.B. L01X00T47"
						required
						type="text"
						autocomplete="ausweisnummer"
						name="hs-phone-number-1"
						id="hs-phone-number-1"
						class="py-3 px-4 block w-full border-gray-200 border rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 uppercase"
					/>
				</div>
			</div>
			<!-- End Grid -->
			<!-- 
			<div>
				<label
					for="hs-about-contacts-1"
					class="block text-sm text-gray-700 font-medium dark:text-white">Details</label
				>
				<textarea
					id="hs-about-contacts-1"
					name="hs-about-contacts-1"
					rows="4"
					class="py-3 px-4 block w-full border-gray-200 border rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
				/>
			</div> -->
		</div>
		<!-- End Grid -->

		<div class="mt-6 grid">
			<button
				type="submit"
				class="inline-flex justify-center items-center gap-x-3 text-center bg-blue-600 hover:bg-blue-700 border border-transparent text-sm lg:text-base text-white font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white transition py-3 px-4 dark:focus:ring-offset-gray-800"
				>{getTranslation('register', $language)}</button
			>
		</div>

		<!-- <div class="mt-3 text-center">
			<p class="text-sm text-gray-500">We'll get back to you in 1-2 business days.</p>
		</div> -->
	</form>
</div>
