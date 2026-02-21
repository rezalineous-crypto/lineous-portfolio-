import Logo from "../Logo";
import lineousLogo from "../../assets/logos/lineous_logo_v3.png";

export function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-[var(--border-primary)]">
      <div className="max-w-7xl mx-auto">
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-[var(--text-muted)] uppercase tracking-widest font-mono">
          <Logo variant="full" type="image" imageSrc={lineousLogo} />
          <div>© 2026 Lineous Technologies. All rights reserved.</div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
