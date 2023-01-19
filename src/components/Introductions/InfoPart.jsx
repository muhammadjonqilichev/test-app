import React from "react";
import styles from "./InfoPart.module.scss";
import WinRouterLogo from "../../images/WinRouter.jpg";
import NmapLogo from "../../images/Nmap.jpg";

export const InfoPart = () => {
  return (
    <div className={styles.infoPart}>
      <h2 className={styles.infoTitle}>Information about apps</h2>
      <div className={styles.infoBlockFirst}>
        <div className={styles.inFirstBlock}>
          <h4 className={styles.firstBlockTitle}>Nmap</h4>
          <p className={styles.firstBlockDescription}>
            NMAP. Nmap ("Tarmoq xaritasi") tarmoqni aniqlash va xavfsizlik
            auditi uchun bepul va ochiq manbali yordamchi dasturdir. Ko'pgina
            tizimlar va tarmoq ma'murlari uni tarmoq inventarizatsiyasi,
            xizmatlarni yangilash jadvallarini boshqarish va xost yoki xizmat
            vaqtini kuzatish kabi vazifalar uchun ham foydali deb bilishadi.
            Nmap tarmoqda qanday xostlar mavjudligini, ushbu xostlar qanday
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
          </p>
        </div>
        <img src={NmapLogo} alt="Nmap" width={200} />
      </div>
      <div className={styles.infoBlockSecond}>
        <img
          className={styles.secondBlockLogo}
          src={WinRouterLogo}
          alt="WinRouter"
          width={200}
        />
        <div className={styles.inSecondBlock}>
          <h4 className={styles.secondBlockTitle}>WinRIouter</h4>
          <p className={styles.secondBlockDescription}>
            WinRouter. WinRouter Restarter 1.0 ni ishlab chiqaruvchining
            veb-saytidan yuklab olish mumkin. WinRouter Restarter o'rnatuvchisi
            odatda WinRouter Restarter.exe deb ataladi. WinRouter Restarter
            Internet va tarmoq vositalariga kiritilgan. WinRouter Restarter
            Windows XP/7/8 ning 32-bitli versiyalari uchun javob beradi.
            Asbobning eng mashhur versiyasi 1.0. Ushbu bepul dastur Hari prasad
            mahsulotidir. Yuklab olingan fayllarni har qanday bepul antivirus
            bilan tekshirishni tavsiya etamiz. Ishlab chiquvchidan: WinRouter
            Restarter bepul yuklab olish soatlarida yuklab olish jarayonini
            avtomatlashtiradi. Xususiyatlari: - Kompyuteringizni avtomatik
            ravishda ishga tushiradi, Routerni qayta ishga tushiradi, yuklab
            olishni boshlaydi va kompyuteringizni o'chiradi - Telnet dasturini
            o'rnatishga hojat yo'q, o'rnatilgan qo'llab-quvvatlash mavjud -
            Yaxshi foydalanuvchi interfeysi -Resurslardan kam foydalanish -
            Bepul Kerio WinRoute Firewall Administration, System Uptime II yoki
            ShutdownTray kabi WinRouter Restarter-ga o'xshash bo'lishi mumkin
            bo'lgan qo'shimcha dasturlarni tekshirishni xohlashingiz mumkin.
          </p>
        </div>
      </div>
    </div>
  );
};
