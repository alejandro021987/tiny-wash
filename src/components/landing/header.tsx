import { Button } from '@/components/ui/button';
import { ShoppingCart, CreditCard } from 'lucide-react';
import Link from 'next/link';

export default function Header() {
  return (
    <div className="sticky top-0 z-50 w-full">
      <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <span className="text-2xl font-black tracking-tighter">
                  <span className="text-foreground">Tiny</span>
                  <span className="text-primary">Wash</span>
              </span>
            </Link>
          </div>
          <div className="flex items-center gap-x-4">
            <nav className="items-center space-x-6 hidden md:flex">
              <Link href="/#features" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">Características</Link>
              <Link href="/#how-it-works" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">Cómo Funciona</Link>
              <Link href="/#testimonials" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">Testimonios</Link>
              <Link href="/#faq" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">Preguntas Frecuentes</Link>
              <Link href="/#contact" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground shrink-0">Contacto</Link>
            </nav>
            <Button asChild variant="accent" className="flex-shrink-0">
              <Link href="/checkout">
                <ShoppingCart /> Comprar Ahora
              </Link>
            </Button>
          </div>
        </div>
      </header>
      <div className="bg-primary text-primary-foreground py-2 text-center text-sm font-medium">
        <div className="container mx-auto flex items-center justify-center gap-2">
            <CreditCard className="h-4 w-4" />
            <span>¡Hasta 6 cuotas sin interés con todas las tarjetas!</span>
        </div>
      </div>
    </div>
  );
}
