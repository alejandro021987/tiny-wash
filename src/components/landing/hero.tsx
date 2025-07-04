"use client";

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ShoppingCart, Truck, CreditCard } from 'lucide-react';
import Link from 'next/link';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { useRef } from 'react';
import Autoplay from "embla-carousel-autoplay";

const images = [
  'https://storage.googleapis.com/tinywash-valenmarket/washing-machine/wash_1.png',
  'https://storage.googleapis.com/tinywash-valenmarket/washing-machine/wash_2.png',
  'https://storage.googleapis.com/tinywash-valenmarket/washing-machine/wash_3.1.png',
  'https://storage.googleapis.com/tinywash-valenmarket/washing-machine/wash_4.png',
];

export default function Hero() {
  const plugin = useRef(
    Autoplay({ delay: 4000, stopOnInteraction: true })
  );

  return (
    <section className="relative w-full h-auto min-h-[calc(100vh-4rem)] py-16 md:py-0 flex items-center justify-center text-white overflow-hidden">
      {/* Background Image and Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://storage.googleapis.com/tinywash-valenmarket/washing-machine/wash_4_clean.png"
          alt="Fondo de TinyWash en uso"
          fill
          style={{ objectFit: 'cover' }}
          quality={80}
          priority
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto grid lg:grid-cols-2 gap-12 items-center px-4 md:px-6">
        <div className="flex flex-col items-center lg:items-start space-y-6 text-center lg:text-left">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter font-headline drop-shadow-lg">
            Conocé TinyWash: El Futuro de la Limpieza, Donde Sea.
          </h1>
          <p className="max-w-[600px] text-gray-200 md:text-xl drop-shadow">
            Descubrí un revolucionario mini lavarropas portátil. Gracias a su batería recargable por USB, es perfecto para espacios reducidos, viajes y prendas delicadas. Dejá tu ropa impecable con la máxima comodidad.
          </p>
          <div className="w-full hidden lg:flex flex-col items-start gap-4">
             <Button asChild variant="accent" size="lg" className="shadow-lg hover:shadow-xl transition-shadow text-lg w-auto active:bg-accent/70">
                <Link href="/checkout">
                  <ShoppingCart className="h-5 w-5" /> Pedí el Tuyo Hoy
                </Link>
            </Button>
            <div className="flex items-center justify-start gap-4 mt-2 text-base">
                <div className="inline-flex items-center gap-2 rounded-full border border-primary/50 bg-primary/30 px-4 py-2 font-semibold text-white">
                    <Truck className="h-5 w-5" />
                    <span>¡Envío GRATIS a toda Argentina!</span>
                </div>
                <div className="inline-flex items-center gap-2 rounded-full border border-primary/50 bg-primary/30 px-4 py-2 font-semibold text-white">
                    <CreditCard className="h-5 w-5" />
                    <span>Hasta 6 cuotas sin interés</span>
                </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center gap-8">
            <div className="w-full flex justify-center items-center">
              <Carousel
                className="w-full max-w-md"
                opts={{ loop: true }}
                plugins={[plugin.current]}
                onMouseEnter={plugin.current.stop}
                onMouseLeave={plugin.current.reset}
              >
                <CarouselContent>
                  {images.map((src, index) => (
                    <CarouselItem key={index}>
                        <Image
                          src={src}
                          alt={`TinyWash producto - imagen ${index + 1}`}
                          width={500}
                          height={500}
                          className="rounded-lg shadow-2xl w-full h-auto"
                          priority={index === 0}
                        />
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-black/30 text-white hover:bg-black/50 border-none" />
                <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-black/30 text-white hover:bg-black/50 border-none" />
              </Carousel>
            </div>
            {/* Mobile Button */}
            <Button asChild variant="accent" size="lg" className="shadow-lg hover:shadow-xl transition-shadow text-lg w-full sm:w-auto active:bg-accent/70 flex lg:hidden">
                <Link href="/checkout">
                  <ShoppingCart className="h-5 w-5" /> Pedí el Tuyo Hoy
                </Link>
            </Button>
             {/* Mobile Badges */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-4 lg:hidden">
                <div className="inline-flex items-center gap-2 rounded-full border border-primary/50 bg-primary/30 px-4 py-2 text-sm font-semibold text-white">
                    <Truck className="h-5 w-5" />
                    <span>¡Envío GRATIS a toda Argentina!</span>
                </div>
                <div className="inline-flex items-center gap-2 rounded-full border border-primary/50 bg-primary/30 px-4 py-2 text-sm font-semibold text-white">
                    <CreditCard className="h-5 w-5" />
                    <span>Hasta 6 cuotas sin interés</span>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
}
