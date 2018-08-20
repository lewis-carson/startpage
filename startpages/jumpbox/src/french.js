var hour = ["minuit", "une heure", "deux heures", "trois heures", "quatre heures", "cinq heures", "six heures", "sept heures", "huit heures", "neuf heures", "dix heures", "onze heures", "midi", "treize heures", "quatorze heures", "quinze heures", "seize heures", "dix-sept heures", "dix-huit heures", "dix-neuf heures", "vingt heures", "vingt-et-une heures", "vingt-deux heures", "vingt-trois heures"]

var minute = [
	"", "une", "deux", "trois", "quatre", "cinq", "six", "sept", "huit", "neuf", "dix", "onze", "douze", "treize", "quatorze", "quinze", "seize", "dix-sept", "dix-huit", "dix-neuf", "vingt", "vingt-et-une", "vingt-deux", "vingt-trois", "vingt-quatre", "vingt-cinq", "vingt-six", "vingt-sept", "vingt-huit", "vingt-neuf", "trente", "trente-et-une", "trente-deux", "trente-trois", "trente-quatre", "trente-cinq", "trente-six", "trente-sept", "trente-huit", "trente-neuf", "quarante", "quarante-et-une", "quarante-deux", "quarante-trois", "quarante-quatre", "quarante-cinq", "quarante-six", "quarante-sept", "quarante-huit", "quarante-neuf", "cinquante", "cinquante-et-une", "cinquante-deux", "cinquante-trois", "cinquante-quatre", "cinquante-cinq", "cinquante-six", "cinquante-sept", "cinquante-huit", "cinquante-neuf"
]

function get_time() {
	var d = new Date();
	var m = d.getMinutes();
	var h = d.getHours();

	return hour[h] + " " + minute[m]
}