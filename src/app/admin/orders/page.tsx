
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { getOrders } from "@/lib/database";

const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('es-AR', { style: 'currency', currency: 'ARS' }).format(amount);
}

export default async function OrdersPage() {
  const orders = await getOrders();
  
  return (
    <Card>
      <CardHeader>
        <CardTitle>Historial de Ventas</CardTitle>
        <CardDescription>Un registro de todas las compras realizadas en la tienda.</CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>ID Orden</TableHead>
              <TableHead>Cliente</TableHead>
              <TableHead>Contacto</TableHead>
              <TableHead>Dirección de Envío</TableHead>
              <TableHead>Fecha</TableHead>
              <TableHead className="text-right">Monto</TableHead>
              <TableHead className="text-center">Estado</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {orders.map((order) => (
              <TableRow key={order.id}>
                <TableCell className="font-medium">{order.id}</TableCell>
                <TableCell>{order.customer}</TableCell>
                <TableCell>{order.email}</TableCell>
                <TableCell>{order.address}</TableCell>
                <TableCell>{new Date(order.date).toLocaleDateString('es-AR')}</TableCell>
                <TableCell className="text-right">{formatCurrency(order.amount)}</TableCell>
                <TableCell className="text-center">
                  <Badge
                    variant={
                      order.status === "Entregado"
                        ? "default"
                        : order.status === "Enviado"
                        ? "secondary"
                        : "destructive"
                    }
                    className={
                        order.status === "Entregado" ? "bg-green-600 hover:bg-green-700" :
                        order.status === "Enviado" ? "bg-blue-500 hover:bg-blue-600 text-white" :
                        "bg-yellow-500 hover:bg-yellow-600 text-black"
                    }
                  >
                    {order.status}
                  </Badge>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
