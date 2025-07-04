"use client";

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import Header from '@/components/landing/header';
import Footer from '@/components/landing/footer';
import Link from 'next/link';
import { Landmark, AlertTriangle } from 'lucide-react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export default function CheckoutPage() {
  const product = {
    name: 'TinyWash Mini Lavarropas',
    price: 119990,
    currency: 'ARS',
    image: 'https://storage.googleapis.com/tinywash-valenmarket/washing-machine/wash_1.png',
  };
  
  const formattedPrice = new Intl.NumberFormat('es-AR').format(product.price);

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1 py-20 md:py-28">
        <div className="container max-w-6xl mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold font-headline">Finalizar Compra</h1>
            <p className="mt-2 text-muted-foreground">Estás a un paso de tener tu TinyWash.</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            <div className="lg:col-span-3 space-y-8">
              {/* Shipping Details */}
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle>1. Datos de Envío</CardTitle>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Nombre y Apellido</Label>
                      <Input id="name" placeholder="Tu nombre completo" required />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="space-y-2 md:col-span-2">
                        <Label htmlFor="address">Calle y Número</Label>
                        <Input id="address" placeholder="Ej: Av. Corrientes 1234" required />
                      </div>
                      <div className="space-y-2">
                         <Label htmlFor="apartment">Piso, Depto (Opcional)</Label>
                        <Input id="apartment" placeholder="Ej: 5B" />
                      </div>
                    </div>
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="city">Ciudad</Label>
                        <Input id="city" placeholder="Ej: Buenos Aires" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="zip">Código Postal</Label>
                        <Input id="zip" placeholder="Ej: C1043AAS" required />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="province">Provincia</Label>
                      <Input id="province" placeholder="Ej: Ciudad Autónoma de Buenos Aires" required />
                    </div>
                  </form>
                </CardContent>
              </Card>

              {/* Payment Method */}
              <Card className="shadow-lg">
                 <CardHeader>
                  <CardTitle>2. Método de Pago</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="p-4 rounded-md bg-destructive/10 border border-destructive/20 text-center mb-6">
                      <div className="flex items-center justify-center text-destructive">
                          <AlertTriangle className="h-6 w-6 mr-2"/>
                          <p className="font-semibold">El pago con tarjeta está temporalmente desactivado.</p>
                      </div>
                  </div>
                   <div className="space-y-4">
                      <Button size="lg" className="w-full text-lg h-14" disabled>
                          Pagar con Tarjeta (No disponible)
                      </Button>
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button variant="outline" size="lg" className="w-full text-lg h-14">
                              <Landmark className="mr-2 h-6 w-6" />
                              Transferencia Bancaria
                          </Button>
                        </DialogTrigger>
                        <DialogContent>
                          <DialogHeader>
                            <DialogTitle>Datos para la Transferencia</DialogTitle>
                            <DialogDescription>
                                Una vez realizado el pago, por favor enviá el comprobante a nuestro email para confirmar tu compra.
                            </DialogDescription>
                          </DialogHeader>
                          <div className="space-y-2 py-4 text-sm">
                              <p><strong>Banco:</strong> Banco Digital de Argentina</p>
                              <p><strong>Alias:</strong> TINY.WASH.ARG</p>
                              <p><strong>CBU:</strong> 0000076500000015130923</p>
                              <p><strong>Titular:</strong> TinyWash S.A.</p>
                              <p><strong>CUIT:</strong> 20-32849224-6</p>
                              <p className="pt-2"><strong>Email para comprobantes:</strong><br/> ventas.tinywash@gmail.com</p>
                          </div>
                        </DialogContent>
                      </Dialog>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="lg:col-span-2">
              <Card className="sticky top-24 shadow-lg">
                <CardHeader>
                  <CardTitle>Resumen de tu compra</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="relative">
                      <Image
                        src={product.image}
                        alt={product.name}
                        width={80}
                        height={80}
                        className="rounded-lg border"
                      />
                       <span className="absolute -top-2 -right-2 flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-bold">1</span>
                    </div>
                    <div className="flex-1">
                      <p className="font-medium">{product.name}</p>
                    </div>
                    <p className="font-semibold">${formattedPrice}</p>
                  </div>
                  <Separator />
                  <div className="space-y-2">
                     <div className="flex justify-between items-center text-muted-foreground">
                          <span>Subtotal</span>
                          <span>${formattedPrice}</span>
                      </div>
                      <div className="flex justify-between items-center text-muted-foreground">
                          <span>Envío</span>
                          <span className="font-medium text-primary">Gratis</span>
                      </div>
                      <Separator />
                      <div className="flex justify-between items-center font-bold text-xl">
                          <span>Total</span>
                          <span>${formattedPrice} {product.currency}</span>
                      </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
          
           <div className="text-center mt-12">
                <Link href="/" className="text-sm text-primary hover:underline">
                    &larr; Volver a la tienda
                </Link>
            </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
