import Image from "next/image";
import logo from "../../logo.png";
import { eventContent } from "@/data/content";

export function BrandHeader({ compact = false }: { compact?: boolean }) {
  return (
    <header className={compact ? "brand brand--compact" : "brand"}>
      <Image
        className="brand__logo"
        src={logo}
        alt="Groomed Gent Co. crest"
        priority
        sizes={compact ? "120px" : "(max-width: 700px) 126px, 180px"}
      />
      <div className="brand__copy">
        <p className="brand__name">{eventContent.brand}</p>
        <p className="brand__statement">{eventContent.statement}</p>
      </div>
    </header>
  );
}
