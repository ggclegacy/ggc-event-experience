import { QRCodeSVG } from "qrcode.react";
import { eventContent } from "@/data/content";

export function ScanPanel({ compact = false }: { compact?: boolean }) {
  return (
    <section className={compact ? "scan-panel scan-panel--compact" : "scan-panel"} aria-labelledby="scan-heading">
      <div className="scan-panel__heading">
        <p className="eyebrow">Your event exclusive</p>
        <h1 id="scan-heading">{eventContent.cta}</h1>
        <p className="offer">{eventContent.offer}</p>
      </div>
      <div className="qr-frame" data-testid="qr-frame" data-qr-value={eventContent.discountUrl}>
        <QRCodeSVG
          value={eventContent.discountUrl}
          title={`QR code for ${eventContent.discountUrl}`}
          size={512}
          level="H"
          marginSize={4}
          bgColor="#f1d49a"
          fgColor="#09090b"
          role="img"
          aria-label={`Scan to open ${eventContent.storeLabel} with coupon ${eventContent.coupon}`}
        />
      </div>
      <div className="scan-panel__details">
        <p className="coupon-label">Use code</p>
        <p className="coupon">{eventContent.coupon}</p>
        <a href={eventContent.storeUrl} className="fallback">{eventContent.storeLabel}</a>
      </div>
    </section>
  );
}
