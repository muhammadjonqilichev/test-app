import React from "react";
import styles from "./InfoPart.module.scss";
import WinRouterLogo from "../../images/WinRouter.jpg";
import KerioLogo from "../../images/kerioconnect.png";
import NmapLogo from "../../images/Nmap.jpg";
import UserGateLogo from "../../images/userGate.png"

export const InfoPart = () => {
  return (
    <div className={styles.infoPart}>
      <h2 className={styles.infoTitle}>
        Web sayt ma’lumotlarining xavfsizligini ta’minlovchi dasturlarning
        xarakteristikasi
      </h2>
      <div className={styles.infoBlockFirst}>
        <div className={styles.inFirstBlock}>
          <div className={styles.firstBlockWrapper}>
            <h4 className={styles.firstBlockTitle}>Nmap</h4>
            <img
              className={styles.firstBlockLogo}
              src={NmapLogo}
              alt="Nmap"
              width={200}
            />
          </div>
          <p className={styles.firstBlockDescription}>
            Nmap ("Tarmoq xaritasi") tarmoqni aniqlash va xavfsizlik auditi
            uchun bepul va ochiq manbali yordamchi dasturdir. Ko'pgina tizimlar
            va tarmoq ma'murlari uni tarmoq inventarizatsiyasi, xizmatlarni
            yangilash jadvallarini boshqarish va xost yoki xizmat vaqtini
            kuzatish kabi vazifalar uchun ham foydali deb bilishadi. Nmap
            tarmoqda qanday xostlar mavjudligini, ushbu xostlar qanday
            xizmatlarni (dastur nomi va versiyasini), ular qanday operatsion
            tizimlar (va OT versiyalari) ishlayotganini, qanday paket
            filtrlari/xavfsizlik devori turini aniqlash uchun yangi usullarda
            xom IP-paketlardan foydalanadi. foydalanishda va boshqa o'nlab
            xususiyatlar mavjud. U katta tarmoqlarni tezda skanerlash uchun
            mo'ljallangan, lekin bitta xostlarga nisbatan yaxshi ishlaydi. Nmap
            barcha asosiy kompyuter operatsion tizimlarida ishlaydi va rasmiy
            ikkilik paketlar Linux, Windows va Mac OS X uchun mavjud. Klassik
            buyruq qatori Nmap bajariladigan faylga qo'shimcha ravishda, Nmap
            to'plami rivojlangan grafik interfeys va natijalarni ko'rish
            vositasini (Zenmap), moslashuvchan ma'lumotlarni uzatish, qayta
            yo'naltirish va disk raskadrovka vositasi (Ncat), skanerlash
            natijalarini taqqoslash uchun yordamchi dastur (Ndiff) va paketlarni
            yaratish va javoblarni tahlil qilish vositasi (Nping).
            Moslashuvchan: IP filtrlari, xavfsizlik devorlari, marshrutizatorlar
            va boshqa to'siqlar bilan to'ldirilgan tarmoqlarni xaritalashning
            o'nlab ilg'or usullarini qo'llab-quvvatlaydi. Bunga ko'plab
            portlarni skanerlash mexanizmlari (TCP va UDP), operatsion tizimni
            aniqlash, versiyani aniqlash, ping tekshiruvi va boshqalar kiradi.
            Hujjatlar sahifasiga qarang. Kuchli: Nmap tom ma'noda yuz minglab
            mashinalarning ulkan tarmoqlarini skanerlash uchun ishlatilgan.
            Portativ: Linux, Microsoft Windows, FreeBSD, OpenBSD, Solaris, IRIX,
            Mac OS X, HP-UX, NetBSD, Sun OS, Amiga va boshqalarni o'z ichiga
            olgan ko'pgina operatsion tizimlar qo'llab-quvvatlanadi. Oson: Nmap
            kuchli foydalanuvchilar uchun ilg'or xususiyatlarning boy to'plamini
            taklif qilsa-da, siz oddiygina "nmap -v -A targethost" kabi
            boshlashingiz mumkin. Sizning xohishingizga ko'ra an'anaviy buyruq
            qatori va grafik (GUI) versiyalari mavjud. Nmapni manbadan
            kompilyatsiya qilishni istamaganlar uchun ikkilik fayllar mavjud.
            Bepul: Nmap loyihasining asosiy maqsadlari Internetni biroz
            xavfsizroq qilishga yordam berish va ma'murlar/auditorlar/xakerlarni
            o'z tarmoqlarini o'rganish uchun ilg'or vosita bilan ta'minlashdan
            iborat. Nmap bepul yuklab olish mumkin, shuningdek, litsenziya
            shartlariga muvofiq o'zgartirishingiz va qayta tarqatishingiz mumkin
            bo'lgan to'liq manba kodi bilan birga keladi. Qo'llab-quvvatlanadi:
            Nmap hech qanday kafolatsiz ta'minlangan bo'lsa-da, uni ishlab
            chiquvchilar va foydalanuvchilarning jonli hamjamiyati yaxshi
            qo'llab-quvvatlaydi. Ushbu shovqinning aksariyati Nmap pochta
            ro'yxatlarida sodir bo'ladi. Lekin ko'rsatmalarni o'qib
            chiqqaningizdan keyin ko'pgina xato hisobotlari va savollar nmap-dev
            ro'yxatiga yuborilishi kerak. Biz barcha foydalanuvchilarga past
            trafikli nmap-xakerlar e'lonlari ro'yxatiga obuna bo'lishni tavsiya
            qilinadi. E’tirof etilgan: Nmap ko‘plab mukofotlarga sazovor bo‘ldi,
            jumladan, Linux Journal, Info World va Codetalker Digest tomonidan
            “Yilning axborot xavfsizligi mahsuloti”. U yuzlab jurnal
            maqolalarida, bir nechta filmlarda, o'nlab kitoblarda va bitta
            komikslar seriyasida tasvirlangan. Batafsil ma'lumot uchun matbuot
            sahifasiga tashrif buyuring. Mashhur: Har kuni minglab odamlar
            Nmap-ni yuklab olishadi va u ko'plab operatsion tizimlarga (Redhat
            Linux, Debian Linux, Gentoo, FreeBSD, OpenBSD va boshqalar)
            kiritilgan. U Freshmeat.Net omboridagi eng yaxshi o'nta (30 000 ta
            dasturdan) qatoriga kiradi. Nmap ("Tarmoq xaritasi") tarmoqni
            o'rganish va xavfsizlikni tekshirish uchun ochiq manbali vositadir.
            U katta tarmoqlarni tezkor skanerlash uchun ishlab chiqilgan, garchi
            u bitta xostlarga nisbatan yaxshi ishlaydi. Nmap tarmoqda qanday
            xostlar mavjudligini, ushbu xostlar qanday xizmatlarni (dastur nomi
            va versiyasini), ular qanday operatsion tizimlar (va OT versiyalari)
            ishlayotganini, qanday paket filtrlari/xavfsizlik devori turini
            aniqlash uchun yangi usullarda xom IP-paketlardan foydalanadi.
            foydalanishda va boshqa o'nlab xususiyatlar mavjud. Nmap odatda
            xavfsizlik tekshiruvlari uchun ishlatilsa-da, ko'plab tizimlar va
            tarmoq ma'murlari uni tarmoq inventarizatsiyasi, xizmatlarni
            yangilash jadvallarini boshqarish va xost yoki xizmat vaqtini
            kuzatish kabi muntazam vazifalar uchun foydali deb bilishadi.
            Nmap-dan olingan ma'lumotlar skanerlangan maqsadlar ro'yxati bo'lib,
            har birida foydalanilgan variantlarga qarab qo'shimcha ma'lumotlar
            mavjud. Ushbu ma'lumotlarning asosiy qismi "qiziqarli portlar
            jadvali" dir. Jadvalda port raqami va protokoli, xizmat nomi va
            holati keltirilgan. Holat ochiq, filtrlangan, yopiq yoki
            filtrlanmagan. Ochiq degani, maqsadli kompyuterdagi ilova ushbu
            portdagi ulanishlar/paketlarni tinglayotganini bildiradi.
            Filtrlangan degan ma'noni anglatadi, xavfsizlik devori, filtr yoki
            boshqa tarmoq to'siqlari portni to'sib qo'ygan, shuning uchun Nmap
            uning ochiq yoki yopiqligini aniqlay olmaydi. Yopiq portlar istalgan
            vaqtda ochilishi mumkin bo'lsa-da, ularni tinglaydigan dastur yo'q.
            Portlar Nmap zondlariga javob bersa, filtrlanmagan deb tasniflanadi,
            lekin Nmap ularning ochiq yoki yopiqligini aniqlay olmaydi. Nmap
            ikkala holatdan qaysi biri portni tavsiflashini aniqlay olmasa,
            ochiq|filtrlangan va yopiq|filtrlangan holat kombinatsiyalari haqida
            xabar beradi. Port jadvali versiyani aniqlash so'ralganda dasturiy
            ta'minot versiyasi ma'lumotlarini ham o'z ichiga olishi mumkin. IP
            protokolini skanerlash so'ralganda, Nmap tinglash portlari o'rniga
            qo'llab-quvvatlanadigan IP protokollari haqida ma'lumot beradi.
          </p>
        </div>
      </div>
      <br className={styles.br} />
      <div className={styles.infoBlockSecond}>
        <div className={styles.inSecondBlock}>
          <div className={styles.secondBlockWrapper}>
            <h4 className={styles.secondBlockTitle}>Kerio Connect</h4>
            <img
              className={styles.secondBlockLogo}
              src={KerioLogo}
              alt="WinRouter"
              width={200}
            />
          </div>
          <p className={styles.secondBlockDescription}>
            Cerio Connect. Keng tarqalgan va tasdiqlangan pochta serveri -
            Elektron pochta, kalendarlar, kontaktlar, vazifalar, chat va
            boshqalar - Ishonchli xavfsiz pochta serveri - Spam va viruslardan
            himoya qilish - Sanoatdagi yetakchi kontent va ilovalarni filtrlash
            Kerio Connect korporativ aloqalarga qulaylik qo'shadi va iOS va
            Android mobil telefonlarini qutidan tashqarida qo'llab-quvvatlaydi.
            Har qanday himoya mexanizmi tutilgan xabar bilan harakatlarni
            belgilashgacha sozlanishi mumkin. Har qanday platformani
            qo'llab-quvvatlash Kerio Connect nafaqat ishonchli pochta va
            moslashuvchan sozlamalar! Windows va Mac uchun mavjud Kerio Connect
            Client, shuningdek, veb-ilovasi xodimlarga onlayn bo'lgan
            hamkasblarini ko'rish, real vaqtda xabarlar yozish, uchrashuvlarni
            tashkil qilish va elektron pochta xabarlarini xavfsiz yuborish
            imkonini beradi. Xavfsiz va xavfsiz elektron pochta Sizning
            pochtangiz SSL/TLS, S/MIME shifrlash, spamga qarshi filtrlar,
            antivirus va ko'p qatlamli tekshiruvlar yordamida xakerlik va
            hujumlardan himoyalangan. Zaxiradan qisman tiklash qobiliyatiga ega
            avtomatik zaxiralash, hatto jiddiy nosozlik bo'lsa ham,
            ma'lumotlarni tezda tiklash imkonini beradi. Har qanday platformani
            qo'llab-quvvatlash Kerio Connect ishonchli pochta va pullik! Windows
            va Mac uchun mavjud Kerio Connect Client, veb-ilovasi ustiga bo'lgan
            hamkasblarini ko'rish, real vaqtda xabarlar, uchrashuvlarni tashkil
            qilish va elektron pochta xabarlarini yuboring. harorat va elektron
            pochta Sizning SSL/TLS, S/MIME shifrlash, spamga qarshi filtrlar,
            antivirus va ko'p qatlamli panellar orqali xakerlik va hujumlardan
            himoyalangan. Zaxiradan qisman tiklashga ega avtomatik tiklash,
            hatto jiddiy nosozlik bo'lsa ham, ma'lumotlarni tezda tiklash
            imkonini beradi. Kerio Connect GFI Unlimited paketiga kiritilgan
            Barcha GFI va Kerio xavfsizlik va tarmoqni avtomatlashtirish
            mahsulotlari bitta ajoyib obunaga birlashtirilgan - GFI Unlimited.
          </p>
        </div>
      </div>
      <div className={styles.infoBlockFirst}>
        <div className={styles.inFirstBlock}>
          <div className={styles.firstBlockWrapper}>
            <h4 className={styles.firstBlockTitle}>WInRouter</h4>
            <img
              className={styles.firstBlockLogo}
              src={WinRouterLogo}
              alt="WinRouter"
              width={200}
            />
          </div>
          <p className={styles.firstBlockDescription}>
            WinRouter Restarter 1.0 ni ishlab chiqaruvchining veb-saytidan
            yuklab olish mumkin. WinRouter Restarter o'rnatuvchisi odatda
            WinRouter Restarter.exe deb ataladi. WinRouter Restarter Internet va
            tarmoq vositalariga kiritilgan. WinRouter Restarter Windows XP/7/8
            ning 32-bitli versiyalari uchun javob beradi. Asbobning eng mashhur
            versiyasi 1.0. Ushbu bepul dastur Hari prasad mahsulotidir. Yuklab
            olingan fayllarni har qanday bepul antivirus bilan tekshirishni
            tavsiya etamiz. Ishlab chiquvchidan: WinRouter Restarter bepul
            yuklab olish soatlarida yuklab olish jarayonini avtomatlashtiradi.
            Xususiyatlari: - Kompyuteringizni avtomatik ravishda ishga
            tushiradi, Routerni qayta ishga tushiradi, yuklab olishni boshlaydi
            va kompyuteringizni o'chiradi - Telnet dasturini o'rnatishga hojat
            yo'q, o'rnatilgan qo'llab-quvvatlash mavjud - Yaxshi foydalanuvchi
            interfeysi -Resurslardan kam foydalanish - Bepul Kerio WinRoute
            Firewall Administration, System Uptime II yoki ShutdownTray kabi
            WinRouter Restarter-ga o'xshash bo'lishi mumkin bo'lgan qo'shimcha
            dasturlarni tekshirishni xohlashingiz mumkin.
          </p>
        </div>
      </div>
      <br className={styles.br} />
      <div className={styles.infoBlockSecond}>
        <div className={styles.inSecondBlock}>
          <div className={styles.secondBlockWrapper}>
            <h4 className={styles.secondBlockTitle}>User Gate</h4>
            <img
              className={styles.secondBlockLogo}
              src={UserGateLogo}
              alt="UserGateLogo"
              width={200}
            />
          </div>
          <p className={styles.secondBlockDescription}>
            Cerio Connect. Keng tarqalgan va tasdiqlangan pochta serveri -
            Elektron pochta, kalendarlar, kontaktlar, vazifalar, chat va
            boshqalar - Ishonchli xavfsiz pochta serveri - Spam va viruslardan
            himoya qilish - Sanoatdagi yetakchi kontent va ilovalarni filtrlash
            Kerio Connect korporativ aloqalarga qulaylik qo'shadi va iOS va
            Android mobil telefonlarini qutidan tashqarida qo'llab-quvvatlaydi.
            Har qanday himoya mexanizmi tutilgan xabar bilan harakatlarni
            belgilashgacha sozlanishi mumkin. Har qanday platformani
            qo'llab-quvvatlash Kerio Connect nafaqat ishonchli pochta va
            moslashuvchan sozlamalar! Windows va Mac uchun mavjud Kerio Connect
            Client, shuningdek, veb-ilovasi xodimlarga onlayn bo'lgan
            hamkasblarini ko'rish, real vaqtda xabarlar yozish, uchrashuvlarni
            tashkil qilish va elektron pochta xabarlarini xavfsiz yuborish
            imkonini beradi. Xavfsiz va xavfsiz elektron pochta Sizning
            pochtangiz SSL/TLS, S/MIME shifrlash, spamga qarshi filtrlar,
            antivirus va ko'p qatlamli tekshiruvlar yordamida xakerlik va
            hujumlardan himoyalangan. Zaxiradan qisman tiklash qobiliyatiga ega
            avtomatik zaxiralash, hatto jiddiy nosozlik bo'lsa ham,
            ma'lumotlarni tezda tiklash imkonini beradi. Har qanday platformani
            qo'llab-quvvatlash Kerio Connect ishonchli pochta va pullik! Windows
            va Mac uchun mavjud Kerio Connect Client, veb-ilovasi ustiga bo'lgan
            hamkasblarini ko'rish, real vaqtda xabarlar, uchrashuvlarni tashkil
            qilish va elektron pochta xabarlarini yuboring. harorat va elektron
            pochta Sizning SSL/TLS, S/MIME shifrlash, spamga qarshi filtrlar,
            antivirus va ko'p qatlamli panellar orqali xakerlik va hujumlardan
            himoyalangan. Zaxiradan qisman tiklashga ega avtomatik tiklash,
            hatto jiddiy nosozlik bo'lsa ham, ma'lumotlarni tezda tiklash
            imkonini beradi. Kerio Connect GFI Unlimited paketiga kiritilgan
            Barcha GFI va Kerio xavfsizlik va tarmoqni avtomatlashtirish
            mahsulotlari bitta ajoyib obunaga birlashtirilgan - GFI Unlimited.
          </p>
        </div>
      </div>
    </div>
  );
};
