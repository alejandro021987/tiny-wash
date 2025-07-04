
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";
import type { Order } from "@/lib/database";

const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('es-AR', { style: 'currency', currency: 'ARS' }).format(amount);
}

export default function RecentSales({ orders }: { orders: Order[] }) {
  return (
    <div className="space-y-8">
      {orders.map((sale) => (
        <div className="flex items-center" key={sale.id}>
            <Avatar className="h-9 w-9 flex-shrink-0">
            <AvatarImage src={`https://avatar.vercel.sh/${sale.email}.png`} alt="Avatar" data-ai-hint="person" />
            <AvatarFallback>{sale.customer.substring(0, 2).toUpperCase()}</AvatarFallback>
            </Avatar>
            <div className="ml-4 flex-1 min-w-0 space-y-1">
            <p className="truncate text-sm font-medium leading-none">{sale.customer}</p>
            <p className="truncate text-sm text-muted-foreground">
                {sale.email}
            </p>
            </div>
            <div className="ml-auto pl-4 font-medium text-right whitespace-nowrap">+{formatCurrency(sale.amount)}</div>
        </div>
      ))}
    </div>
  )
}
