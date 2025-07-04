'use client';

import { Suspense } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { CheckCircle } from 'lucide-react';
import Link from 'next/link';

function PaymentStatusContent() {
    return (
        <div className="flex min-h-screen flex-col items-center justify-center bg-background px-4">
            <Card className="w-full max-w-md text-center shadow-lg animate-in fade-in zoom-in-95">
                <CardHeader>
                    <div className="mx-auto flex items-center justify-center">
                        <CheckCircle className="h-16 w-16 text-green-500" />
                    </div>
                </CardHeader>
                <CardContent className="space-y-6">
                    <div className='space-y-2'>
                        <CardTitle className="text-3xl font-bold">¡Gracias por tu Compra!</CardTitle>
                        <CardDescription className="text-muted-foreground text-base">
                            Recibirás una confirmación por correo electrónico en breve.
                        </CardDescription>
                    </div>
                    <Button asChild size="lg">
                        <Link href="/">Volver a la Tienda</Link>
                    </Button>
                </CardContent>
            </Card>
        </div>
    );
}

export default function PaymentStatusPage() {
    return (
        <Suspense fallback={<div>Cargando...</div>}>
            <PaymentStatusContent />
        </Suspense>
    );
}
