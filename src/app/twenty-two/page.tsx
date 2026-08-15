/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import styles from './twenty-two.module.css';

export const metadata = {
  title: 'Twenty Two × Hans im Club | Altstadtfest Special',
  description: 'Als Gast des Twenty Two bekommst du heute einen exklusiven Vorteil für die Stadtfest Aftershow im Hans im Club.',
};

export default function TwentyTwoCampaign() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        
        {/* HERO */}
        <div className={styles.logos}>
          <img 
            src="https://twentytwo-dresden.de/images/logo2026w.svg" 
            alt="Twenty Two Dresden" 
            className={styles.logoTwentyTwo}
          />
          <span className={styles.cross}>×</span>
          <img 
            src="/logo.png" 
            alt="Hans im Club" 
            className={styles.logo} 
            style={{ filter: 'brightness(0) invert(1)' }} 
          />
        </div>

        <div className={styles.eyebrow}>Altstadtfest Special</div>
        <h1 className={styles.headline}>YOUR NIGHT CONTINUES.</h1>
        <p className={styles.subheadline}>Vom Twenty Two direkt weiter ins Hans.</p>
        <p className={styles.description}>
          Als Gast des Twenty Two bekommst du heute einen exklusiven Vorteil für die Stadtfest Aftershow im Hans im Club.
        </p>

        {/* GOLD VOUCHER */}
        <div className={styles.voucherWrapper}>
          <div className={styles.voucher}>
            <div className={styles.voucherTop}>
              <span>Twenty Two × Hans im Club</span>
            </div>
            
            <div className={styles.voucherMiddle}>
              <div className={styles.voucherAmount}>5 €</div>
              <div className={styles.voucherDiscount}>Rabatt</div>
              <div className={styles.voucherSub}>auf den Abendkassenpreis</div>
            </div>

            <div className={styles.voucherBottom}>
              <span>Altstadtfest Special</span>
              <span>15.08.2026</span>
            </div>
          </div>
        </div>

        {/* INSTRUCTIONS */}
        <h2 className={styles.instructionTitle}>SCREENSHOT. SHOW IT. SAVE 5 €.</h2>
        <p className={styles.instructionText}>
          Mach einen Screenshot von diesem Gutschein und zeige ihn heute beim Einlass im Hans im Club vor. Du erhältst zur Stadtfest Aftershow 5 € Rabatt auf den Abendkassenpreis.
        </p>
        <p className={styles.instructionSmall}>
          Nur gültig am 15.08.2026 &middot; nur an der Abendkasse &middot; nicht mit anderen Aktionen kombinierbar.
        </p>

        {/* CTA */}
        <Link href="https://hansimclub.de" className={styles.button}>
          SEE YOU AT HANS &rarr;
        </Link>

        {/* FOOTER */}
        <div className={styles.footer}>
          Hans im Club &middot; Wallstraße 11 &middot; Dresden
        </div>

      </div>
    </div>
  );
}
