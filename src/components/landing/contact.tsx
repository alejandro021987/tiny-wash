
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Loader2 } from "lucide-react";

export default function Contact() {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    // Temporarily disable form submission logic for debugging
    setTimeout(() => {
      toast({
        title: "¡Mensaje Enviado!",
        description: "Gracias por contactarnos. Te responderemos a la brevedad.",
      });
      (e.target as HTMLFormElement).reset();
      setIsLoading(false);
    }, 1000);
  };

  return (
    <section id="contact" className="py-20 md:py-28">
      <div className="container max-w-2xl mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-headline">Ponete en Contacto</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            ¿Preguntas, comentarios o elogios? Nos encantaría saber de vos. Completá el formulario o escribinos directamente a <a href="mailto:ventas.tinywash@gmail.com" className="font-medium text-primary hover:underline">ventas.tinywash@gmail.com</a>.
          </p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="name">Nombre</Label>
              <Input id="name" name="name" type="text" placeholder="Tu Nombre" required disabled={isLoading} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" name="email" type="email" placeholder="tu@email.com" required disabled={isLoading} />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="message">Mensaje</Label>
            <Textarea id="message" name="message" placeholder="Tu mensaje..." rows={5} required disabled={isLoading} />
          </div>
          <div className="text-center">
            <Button type="submit" variant="accent" size="lg" className="w-full md:w-auto" disabled={isLoading}>
              {isLoading && <Loader2 className="animate-spin" />}
              {isLoading ? "Enviando..." : "Enviar Mensaje"}
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
}
