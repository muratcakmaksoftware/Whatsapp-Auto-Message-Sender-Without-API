//Example URL: https://web.whatsapp.com/send?phone=phone_number&text=message

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

var time = new Date();
async function timer(hours, minutes){
	console.log("Zamanlayıcı bekleniyor: "+hours+":"+minutes+" mesaj gönderimi gerçekleşecektir.");
	do{
		await sleep(100); // bilgisayarı yavaşlatmamak için döngü hızını yavaşlatmak.
		time = new Date(); //time update
	}while(!(time.getHours() >= hours && time.getMinutes() >= minutes));
	console.log("Zamanlayıcı tamamlandı! Mesajı gönderme işlemi başlıyor.");
}

var win = null;
var processing = true;
var sendButton = null;
var _hours = 0, _minutes = 0;
async function sendMessage(number, message, hours, minutes){
	
	//Mesajın gönderilmesi için zaman kontrolü
	if(hours != null && minutes != null){
		await timer(hours, minutes);
	}
	
	//win = window.open("https://web.whatsapp.com/send?phone="+number+"&text="+message+"", "Whatsapp Toplu Mesaj Gönderme", "width=300,height=300"); //rahatsız edilmeden işlemin gerçekleşmesini istiyorsak pencere şeklinde açmak için bunu kullanabiliriz.
	win = window.open("https://web.whatsapp.com/send?phone="+number+"&text="+message+""); //rahatsız edilerek göndermek istiyorsak bunu kullanabiliriz. :)
	
	processing = true;
	sendButton = null;
	do{
		sendButton = win.document.querySelectorAll('._4sWnG')[0]; //Whatsapp gönderme butonu
		if (typeof sendButton !== 'undefined'){ //Whatsapp gönderme butonu bulundu mu ?
			sendButton.click(); //Gönderme butonuna basılması.
			console.log("Mesaj başarıyla gönderildi!");
			processing = false; //sonsuz döngünün sonlandırılması.
		} //else Hayır ise sayfanın yüklenmesini bekleyip tekrar deneyecek.
		await sleep(100); //bilgisayarı yavaşlatmaması için döngü hızını yavaşlatmak amaçlıdır.
	}while(processing); //window open'ın yüklenmesini bekler ve queryselector daki whatsapp send butonu bulduktan sonra click yapar ve döngü sonlanır.
	
	await sleep(300); //mesaj gönderme butonuna bastığından gönderme işlemi için bekleme süresi.
	win.close();
	await sleep(100); //win close yapılması pencerenin kapatılması / ram den silinme için bekletilme.
}

var numbers = [
	{
		number: "905553332211",
		text: "whatsap oto mesaj 1",
	},
	{
		number: "905553332211",
		text: "whatsap oto mesaj 2",
		hours: 11,
		minutes: 39
	},
	{
		number: "905553332211",
		text: "whatsap oto mesaj 3",
		hours: 11,
		minutes: 50
	}
];

for (const index in numbers) {
	console.log("Numara: "+numbers[index].number);
	console.log("Mesaj: "+numbers[index].text);
	_hours = numbers[index].hasOwnProperty("hours") ? numbers[index].hours : null;
	_minutes = numbers[index].hasOwnProperty("minutes") ? numbers[index].minutes : null;
	
	await sendMessage(numbers[index].number, numbers[index].text, _hours, _minutes);
}

console.log("Tüm mesajlar başarıyla gönderildi");