<script>
	import { language } from '../store';
	import { getTranslation } from '../translations';
</script>

<h1 class="text-xl xl:text-6xl">{getTranslation('title', $language)}</h1>
<div class="font-semibold text-grey-black">
	<p>{getTranslation('pass_info', $language)}</p>
</div>
<a
	class="group text-button flex h-fit rounded-md overflow-hidden relative text-grey-white outline-none items-center justify-center disabled:pointer-events-none border disabled:opacity-25 bg-transparent !text-grey-black border-grey-black xl:hover:bg-red-700 xl:focus:bg-red-700 xl:hover:!text-white xl:focus:!text-white transition-colors ease-out duration-300 w-full px-2 md:!w-fit"
	href="./register/"
	><span
		class="flex items-center justify-center min-w-fit xl:min-w-[120px] xl:px-8 after:w-[120%] after:absolute after:inset-0 transition-transform duration-500 ease-out px-5 gap-x-4 h-14 relative text-base"
		><span class="flex items-center gap-x-4">{getTranslation('register', $language)}</span></span
	></a
>
<div
	class="border-l-8 rounded-lg text-grey-dark text-p !leading-6 border-blue-500 py-3 px-5 bg-white"
>
	<div class="mb-4 lg:!mb-8">
		<p>
			{getTranslation('tips', $language)}
		</p>
	</div>
	<div class="flex flex-col gap-4 2xl:!flex-row">
		<div class="flex flex-col gap-4 xl:!flex-row">
			<a
				class="group text-button flex h-fit rounded-md overflow-hidden relative text-grey-white outline-none items-center justify-center disabled:pointer-events-none border disabled:opacity-25 bg-transparent !text-grey-black border-grey-black xl:hover:bg-blue-700 xl:focus:bg-blue-700 xl:hover:!text-white xl:focus:!text-white transition-colors ease-out duration-300 w-full px-2 md:!w-fit"
				href="https://support.deutsch-franzoesischer-freundschaftspass.de/de/support/solutions/articles/103000127563-welche-sind-die-empfohlenen-reiserouten-"
				target="_blank"
				><span
					class="flex items-center justify-center min-w-fit xl:min-w-[120px] xl:px-8 after:w-[120%] after:absolute after:inset-0 transition-transform duration-500 ease-out px-5 gap-x-4 h-14 relative text-base"
					><span class="flex items-center gap-x-4">{getTranslation('tips_routes', $language)}</span
					></span
				></a
			><a
				class="group text-button flex h-fit rounded-md overflow-hidden relative text-grey-white outline-none items-center justify-center disabled:pointer-events-none border disabled:opacity-25 bg-transparent !text-grey-black border-grey-black xl:hover:bg-blue-700 xl:focus:bg-blue-700 xl:hover:!text-white xl:focus:!text-white transition-colors ease-out duration-300 w-full px-2 md:!w-fit"
				href="https://support.deutsch-franzoesischer-freundschaftspass.de/de/support/solutions/folders/103000462879"
				target="_blank"
				><span
					class="flex items-center justify-center min-w-fit xl:min-w-[120px] xl:px-8 after:w-[120%] after:absolute after:inset-0 transition-transform duration-500 ease-out px-5 gap-x-4 h-14 relative text-base"
					><span class="flex items-center gap-x-4">{getTranslation('tips_budget', $language)}</span
					></span
				></a
			>
		</div>
		<a
			class="group text-button flex h-fit rounded-md overflow-hidden relative text-grey-white outline-none items-center justify-center disabled:pointer-events-none border disabled:opacity-25 bg-transparent !text-grey-black border-grey-black xl:hover:bg-blue-700 xl:focus:bg-blue-700 xl:hover:!text-white xl:focus:!text-white transition-colors ease-out duration-300 w-full px-2 md:!w-fit"
			href="https://support.deutsch-franzoesischer-freundschaftspass.de/de/support/solutions/articles/103000129073-die-wichtigsten-fragen-und-antworten-zum-deutsch-franz%C3%B6sischen-freundschaftspass"
			target="_blank"
			><span
				class="flex items-center justify-center min-w-fit xl:min-w-[120px] xl:px-8 after:w-[120%] after:absolute after:inset-0 transition-transform duration-500 ease-out px-5 gap-x-4 h-14 relative text-base"
				><span class="flex items-center gap-x-4">FAQ</span></span
			></a
		>
	</div>
</div>
