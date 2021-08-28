# Whatsapp-Auto-Message-Sender-Without-API

Whatsapp tek sekmede çalıştığından çoklu sekme açıp bir anda mesajları gönderememekteyiz bu yüzden tek tek sekmeleri açıp gönderme işlemi yapılmaktadır.
Tek tek göndersekte bir çoklu pop up gibi algılanacak bu yüzden pop up lara izin vermemiz gerekiyor.

Bunu yapabilmek için Chrome ayarlardan > gizlilik ve güvenlik > Site ayarları > Pop up ve yönlendirmeler. Giriyoruz ister tüm sitelere açabiliriz yada
"Pop-up'lar gönderip yönlendirmeler kullanmasına izin verilen siteler" kısmındaki Ekle tıklayıp

````https://web.whatsapp.com:443````

domaini ekleyip web.whatsapp.com sitesi için pop up iznini vermiş oluyoruz.

Sonrasında kodu çalıştırmak için web.whatsapp.com girelim.

CTRL + ALT + I basıp yani öğe denetliyiçisini açıp console sekmesine javascripti yapıştırıyoruz mesaj ve numara bilgilerini kendinize göre ayarlıyorsunuz.
Daha sonrasında entere basıp arkanıza yaslanabilirsiniz :D 

Kod içerisinde rahatsız edecek ve rahatsız etmeyecek şekilde ayarlı 2 adet "win = window.open" kısmı mevcut burada rahatsız etmeyecek olanı aktif ederseniz.
popuplar yeni sekmede görünecek ve siz işlerinize devam edebileceksiniz. Tabi bunu çok daha gizli hala getirebilirsiniz ben sadece temel kodu yazmış bulunmaktayım.

## Konu hakkında detay
Öncelikle bunu en iyi yolu tabi API üzerinden yapmak olacaktır zaten bunu vermekte whatsapp.

Bunu alternatif olarak masaüstü yazılım düşünürsek bir yol olarak selenium sayılabilir ancak selenium da Auth işlemleriyle uğraşmanız gerekcektir.

Whatsapp da bilindiği üzere socket kullanarak mesajları göndermekte ve tabi bunları gönderirkende olabildiğince client tarafında gizlemeye çalışmakta.

Python da hazır kütüphanelerin yardımı olmasa yapması daha zor olacağını düşünüyorum. Python ile yazsaydım yine Auth kısmından dolayı zaman kaybı yaşanacaktı.

Bu yüzden en hızlı ve kolay performans sayılabilecek javascript olduğunu düşündüğümden javascript ile yaptım tabi uygulama tarzı bir şey istenirse bunu yapmak için "chrome extensions" yapılabilir.

Tabi chrome extensions google mağazasına gönderemeyiz illegal olarak görecektir. Manuel chrome un extension kısmından ekleyip sadece kendiniz kullanılabilir.
