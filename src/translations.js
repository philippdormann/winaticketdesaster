import { language } from "./store";
let langCache = "de-DE";
// 
const translations = {
    "de-DE": {
        "title": "Der deutsch-französische Freundschaftspass",
        "register": "Registrieren",
        "all_gone": 'Alle Pässe wurden verteilt! Zur Erinnerung: Die Anmeldung wurde nach dem Prinzip "Wer zuerst kommt, mahlt zuerst" durchgeführt. Wenn du dich angemeldet hast, wirst du bald eine Bestätigungs-E-Mail erhalten. Vielen Dank für dein Interesse und deine Geduld.',
        "pass_info": "Der deutsch-französische Freundschaftspass ist eine besondere Initiative von Deutschland und Frankreich, die zur Feier des 60. Jahrestages der Unterzeichnung des Élysée-Vertrags geschaffen wurde. Diese Initiative verkörpert die Freundschaft zwischen den beiden Ländern. Mit dem deutsch-französischen Freundschaftspass können junge Erwachsene im Alter von 18 bis 27 Jahren das jeweilige Nachbarland bereisen, kennenlernen und so die Beziehungen zwischen Deutschland und Frankreich stärken.",
        "tips": "Suchst du nach kostengünstigen Reisemöglichkeiten, die nicht dein Budget sprengen? Wir haben dich mit einigen vorgeschlagenen Routen und hilfreichen Tipps abgedeckt.",
        "tips_routes": "Vorgeschlagene Routen",
        "tips_budget": "Budgetfreundliches Reisen",
        "form_label_firstname": "Vorname",
        "form_label_lastname": "Nachname",
        "form_label_email": "E-Mail Adresse",
        "form_label_id": "Ausweis-Nr./ Reisepass-Nr.",
        "form_info": "Bitte fülle das Formular aus",
    }
    , "fr-FR": {
        "title": "Le Passe France Allemagne",
        "register": "Enregistrer",
        "all_gone": 'Tous les passes ont été distribués ! Pour rappel, l’inscription s’est faite selon le principe "premier arrivé, premier servi". Si vous vous êtes inscrit, vous recevrez un e-mail de confirmation rapidement',
        "pass_info": "Le Passe France Allemagne célébre 60 ans d’amitié franco-allemande et le Traité de l’Elysée. 60 000 Passes sont distribués gratuitement : 30 000 pour les jeunes de France et 30 000 pour les jeunes d’Allemagne.",
        "tips": "A la recherche d’options de voyage à petits prix ? Voici quelques itinéraires économiques recommandés et des conseils utiles.",
        "tips_routes": "Itinéraires recommandés",
        "tips_budget": "Voyager à petits prix",
        "form_label_firstname": "Prénom",
        "form_label_lastname": "Nom de famille",
        "form_label_email": "adresse e-mail",
        "form_label_id": "N° d'identité/N° de passeport",
        "form_info": "Veuillez remplir le formulaire",
    }
}
// 
language.subscribe((val) => {
    langCache = val
})
// 
export const getTranslation = (key, lang = "auto") => {
    if (lang === "auto") {
        lang = langCache;
    }
    return translations[`${lang}`][`${key}`] ?? key ?? "";
}