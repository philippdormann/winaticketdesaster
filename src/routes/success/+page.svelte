<script>
	import { onMount } from 'svelte';
	import { language, registrationInfo } from '../../store';
	//
	let status = 'loading';
	onMount(() => {
		try {
			registrationInfo.set(JSON.parse(localStorage.getItem('registrationinfo')));
			status = 'loaded';
		} catch (error) {
			status = 'loaded';
		}
	});
</script>

<div class="flex flex-col border rounded-xl p-4 sm:p-6 lg:p-8 dark:border-gray-700">
	{#if $language === 'de-DE'}
		{#if $registrationInfo?.firstName}
			<h1 class="text-xl xl:text-6xl mb-8">
				Geschafft, <b class="font-bold">{$registrationInfo.firstName}</b> 🎉
			</h1>
			<div>
				<p>
					Du bist registriert!<br /><br />Alle weiteren Informationen und deinen mPass schicken wir
					dir innerhalb von 24 Stunden per E-Mail an
					<b class="font-bold">{$registrationInfo.email}</b>.<br />Die E-Mail kommt von
					<b class="font-bold">service@interrail.eu</b>
					und hat den Betreff
					<b class="font-bold">"Interrail: Dein Freundschaftspass ist da"</b>.<br /><br />Bitte
					überprüfe auch deinen Spam-Ordner.<br />Dein Interrail-Team
				</p>
			</div>
		{:else if status === 'loaded'}
			Der Link ist ungültig.
		{:else}
			Seite wird geladen
		{/if}
	{/if}
	{#if $language === 'fr-FR'}
		{#if $registrationInfo?.firstName}
			<h1 class="text-xl xl:text-6xl mb-8">
				Tu as réussi, <b class="font-bold">{$registrationInfo.firstName}</b> 🎉
			</h1>
			<div>
				<p>
					Tu es inscrit(e) !<br /><br />
					Nous t'enverrons toutes les autres informations et ton mPass dans les 24 heures par e-mail
					à <b class="font-bold">{$registrationInfo.email}</b>.<br />L'e-mail vient de
					<b class="font-bold">service@interrail.eu</b> et a pour objet
					<b class="font-bold"> "Interrail : ton passeport est arrivé" </b>.<br /><br />Merci de
					vérifier également ton dossier spam.<br />Ton équipe Interrail
				</p>
			</div>
		{:else if status === 'loaded'}
			Le lien est invalide.
		{:else}
			loading
		{/if}
	{/if}
</div>
