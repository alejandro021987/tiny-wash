import Link from 'next/link';
import { Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-muted/50 border-t">
      <div className="container mx-auto px-4 md:px-6 py-8 flex flex-col md:flex-row items-center justify-between">
        <div className="flex items-center gap-2">
            <Link href="/" className="flex items-center">
                <span className="text-2xl font-black tracking-tighter">
                    <span className="text-foreground">Tiny</span>
                    <span className="text-primary">Wash</span>
                </span>
            </Link>
        </div>
        <div className="flex flex-col-reverse md:flex-row items-center gap-6 mt-4 md:mt-0">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} TinyWash. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-4">
            <a href="https://www.instagram.com/tinywash.ar" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-muted-foreground hover:text-primary transition-colors">
              <Instagram className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
