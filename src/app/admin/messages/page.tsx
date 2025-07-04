
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { AlertTriangle } from "lucide-react";

export default function MessagesPage() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Bandeja de Entrada</CardTitle>
        <CardDescription>Aquí se listan todos los mensajes recibidos desde el formulario de contacto.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col items-center justify-center text-center p-8 border-2 border-dashed rounded-lg">
            <AlertTriangle className="h-12 w-12 text-muted-foreground mb-4" />
            <h3 className="text-lg font-semibold text-muted-foreground">Funcionalidad Desactivada Temporalmente</h3>
            <p className="text-sm text-muted-foreground mt-1">La recepción de mensajes ha sido desactivada para depurar otros problemas.</p>
        </div>
      </CardContent>
    </Card>
  );
}
