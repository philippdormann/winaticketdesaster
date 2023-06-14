<script>
	import { onMount } from 'svelte';
	import '../app.postcss';
	//
	import trainImage from '../train.avif';
	import logoBlack from '../db-sncf-logo-black.svg';
	import logoWhite from '../db-sncf-logo-white.svg';
	import { language } from '../store';
	import { Toaster } from 'svelte-french-toast';
	//
	onMount(() => {
		const localStorageLang = localStorage.getItem('language') || undefined;
		const userLang = localStorageLang || navigator.language || navigator.userLanguage;
		if (['de-DE', 'fr-FR'].includes(userLang)) {
			language.set(userLang);
		}
	});
</script>

<main class="jsx-3252720345 flex flex-col font-sans __variable_e14bb7">
	<div
		class="fixed right-0 z-40 flex bg-transparent px-6 py-5 xl:top-0 xl:px-10 xl:py-8 2xl:px-16 2xl:py-10 top-0"
		style="transform:none"
	>
		<div class="flex h-fit gap-x-2 xl:gap-x-9">
			<div class="flex items-center gap-x-4">
				<button
					on:click={() => {
						language.set('fr-FR');
						localStorage.setItem('language', 'fr-FR');
					}}
					class:!ring-2={$language === 'fr-FR'}
					class="block h-fit rounded-full p-0.5 outline-none ring-blue-500 transition-shadow hover:ring-1 focus:ring-1"
					><span class="block overflow-hidden rounded-full"
						><svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="none"
							><g clip-path="url(#a)"
								><rect width="35.75" height="26" x="-5.375" fill="#fff" rx="1.625" /><path
									fill="#002654"
									fill-rule="evenodd"
									d="M-5.532 0h13.42v26h-13.42V0Z"
									clip-rule="evenodd"
								/><path
									fill="#F93939"
									fill-rule="evenodd"
									d="M17.113 0h13.42v26h-13.42V0Z"
									clip-rule="evenodd"
								/></g
							><defs
								><clipPath id="a"
									><rect width="35.75" height="26" x="-5.375" fill="#fff" rx="1.625" /></clipPath
								></defs
							></svg
						></span
					></button
				><button
					on:click={() => {
						language.set('de-DE');
						localStorage.setItem('language', 'de-DE');
					}}
					class:!ring-2={$language === 'de-DE'}
					class="block h-fit rounded-full p-0.5 outline-none ring-blue-500 transition-shadow hover:ring-1 focus:ring-1"
					><span class="block overflow-hidden rounded-full"
						><svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="none"
							><g clip-path="url(#a)"
								><rect width="35.75" height="26" x="-5" fill="#F93939" rx="1.625" /><path
									fill="#FFDA2C"
									fill-rule="evenodd"
									d="M-4.633 17.613H32.27V26H-4.633v-8.387Z"
									clip-rule="evenodd"
								/><path
									fill="#151515"
									fill-rule="evenodd"
									d="M-4.633 0H32.27v8.387H-4.633V0Z"
									clip-rule="evenodd"
								/></g
							><defs
								><clipPath id="a"
									><rect width="35.75" height="26" x="-5" fill="#fff" rx="1.625" /></clipPath
								></defs
							></svg
						></span
					></button
				>
			</div>
		</div>
	</div>
	<div class="grid min-h-screen grid-cols-1 lg:grid-cols-[1fr_2fr]">
		<div class="sticky top-0 hidden h-screen lg:!block">
			<div class="relative h-full w-full">
				<img
					alt="Deutschebahn SNCF"
					loading="lazy"
					decoding="async"
					data-nimg="fill"
					style="position:absolute;height:100%;width:100%;left:0;top:0;right:0;bottom:0;object-fit:cover;color:transparent"
					src={trainImage}
				/>
			</div>
			<a
				class="absolute left-6 top-5 h-20 w-40 rounded-lg outline-none ring-offset-1 transition-shadow focus:ring-1 focus:ring-blue-500 xl:!h-36 xl:!w-64"
				href="/"
				><img
					alt="Deutschebahn-SNCF"
					fetchpriority="high"
					decoding="async"
					data-nimg="fill"
					style="position:absolute;height:100%;width:100%;left:0;top:0;right:0;bottom:0;color:transparent"
					src={logoWhite}
				/></a
			>
		</div>
		<div
			class="grid grid-rows-[1fr_max-content] px-6 md:!pr-32 lg:!items-center lg:!pl-20 xl:!pr-52"
		>
			<div class="flex flex-col gap-y-6 pb-16 pt-6 lg:gap-y-10 lg:!py-24">
				<div
					class="relative mb-6 block h-20 w-40 rounded-lg outline-none ring-offset-1 transition-shadow focus:ring-1 focus:ring-blue-500 lg:!hidden xl:!h-36 xl:!w-64"
				>
					<img
						alt="Deutschebahn-SNCF"
						fetchpriority="high"
						decoding="async"
						data-nimg="fill"
						style="position:absolute;height:100%;width:100%;left:0;top:0;right:0;bottom:0;color:transparent"
						src={logoBlack}
					/>
				</div>
				<slot>404</slot>
			</div>
			<div class="flex w-full justify-end gap-x-4 border-t border-black py-3">
				<a href="/" class="text-xs text-grey-dark hover:underline focus:underline">Startseite</a>
				<div class="h-5 w-px bg-black" />
				<a
					href="https://support.deutsch-franzoesischer-freundschaftspass.de/de/support/solutions/articles/103000129346-impressum"
					target="_blank"
					class="text-xs text-grey-dark hover:underline focus:underline">Impressum</a
				>
				<div class="h-5 w-px bg-black" />
				<a
					href="https://dbsncf.s3.eu-central-1.amazonaws.com/2023/06/DE_Privacy-Policy.pdf"
					download=""
					target="_blank"
					class="text-xs text-grey-dark hover:underline focus:underline">Datenschutzerklärung</a
				>
			</div>
		</div>
	</div>
</main>
<Toaster position="top-right" />
