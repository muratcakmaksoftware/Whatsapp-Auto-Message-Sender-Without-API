//Example URL: https://web.whatsapp.com/send?phone=phone_number&text=message
			
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function sendMessage(number, message){
	
	//var win = window.open("https://web.whatsapp.com/send?phone="+number+"&text="+message+"", "Whatsapp Toplu Mesaj Gönderme", "width=300,height=300"); //rahatsız edilmeden işlemin gerçekleşmesini istiyorsak pencere şeklinde açmak için bunu kullanabiliriz.
	var win = window.open("https://web.whatsapp.com/send?phone="+number+"&text="+message+""); //rahatsız edilerek göndermek istiyorsak bunu kullanabiliriz. :)
	
	var processing = true;
	var sendButton = null;
	while(processing){ //window open 'ın yüklenmesini bekler ve queryselector daki butonu bulduktan sonra click yapar ve döngü sonlanır.
		sendButton = win.document.querySelectorAll('._4sWnG')[0]; //Whatsapp gönderme butonu
		if (typeof sendButton !== 'undefined'){ //Whatsapp gönderme butonu bulundu mu ?
			sendButton.click(); //Gönderme butonuna basılması.
			console.log("Mesaj başarıyla gönderildi!");
			processing = false; //sonsuz döngünün sonlandırılması.
		} //Hayır ise sayfanın yüklenmesini bekleyip tekrar deneyecek.
		await sleep(100); //bilgisayarı yavaşlatmaması için döngü hızını yavaşlatmak amaçlıdır.
	}
	await sleep(500); //mesaj gönderme butonuna bastığından gönderme işlemi için bekleme süresi.
	win.close();
	await sleep(100); //win close için kapatılması süresi nolur nolmaz :)
}

var numbers = [
	{
		number: "905553332211",
		text: "whatsap oto mesaj 1"
	},
	{
		number: "905553332211",
		text: "whatsap oto mesaj 2"
	},
	{
		number: "905553332211",
		text: "whatsap oto mesaj 3"
	}
];

for (const index in numbers) {
	console.log("Numara: "+numbers[index].number);
	console.log("Mesaj: "+numbers[index].text);
	await sendMessage(numbers[index].number, numbers[index].text);
}