export const lang: {
    de: { [key: string]: string }
} = {
    de: {
        copyDone: 'Kopiert!',
        shareTitle: 'Schicke diesen Link zu deinen Freund*innen:',
        createTitle: 'Rätsel erstellen',
        createDescription: 'Gib ein Wort ein und lasse deine Freund*innen raten!',
        errorInvalidWordTitle: 'Hoppala!',
        errorInvalidWord: 'Leider funktioniert der Link nicht. Bitte lass dir ein neues Rätsel schicken oder erstelle selber eines für deine Freund*innen.',
        createYourOwn: 'Erstelle ein Rästel!',
        errorStartFailed: 'Irgendwas ist schief gelaufen! Bitte lass dir einen neuen Link schicken.',
        playTitle: 'Rätsel',
        failureTitle: '😟 Verloren!',
        failureText: 'Das gesuchte Wort war:',
        successTitle: 'Geschafft 🎉',
        share: 'Teilen',
        resultCopied: 'Ergebnis kopiert!',
        tries: 'Versuche',
        tryYourself: 'Versuch es selber:',
        supportMe: 'Gefällt es dir? Dann lade mich doch auf einen ☕️  ein!',
        createYourOwnButton: 'Wordle erstellen',
        copy: 'Kopieren',
    }
};

export function t(key: string): string {
    return lang.de[key] || key;
}
