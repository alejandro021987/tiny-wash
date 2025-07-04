
'use server';

// NOTA: Esta es una simple base de datos en memoria para fines de demostración.
// Los datos se perderán cuando el servidor se reinicie. En una aplicación real,
// usarías una base de datos persistente como Firestore.

export interface Order {
    id: string;
    customer: string;
    email: string;
    address: string;
    date: string;
    amount: number;
    status: 'Pendiente' | 'Enviado' | 'Entregado';
}

// Para evitar que los datos se reinicien con el hot-reload en desarrollo,
// usamos el objeto global de Node.js para persistir el estado.
declare global {
  var _orders: Order[];
  var _orderCounter: number;
}

const initialOrders: Order[] = [
    {
      id: "ORD001",
      customer: "Juan Pérez",
      email: "juan.perez@example.com",
      address: "Av. Corrientes 1234, 5B, CABA, C1043AAS",
      date: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toISOString(),
      amount: 119990,
      status: "Entregado",
    },
    {
      id: "ORD002",
      customer: "Maria García",
      email: "maria.garcia@example.com",
      address: "Bv. San Juan 567, 3A, Córdoba, X5000AAS",
      date: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
      amount: 119990,
      status: "Enviado",
    },
    {
      id: "ORD003",
      customer: "Carlos López",
      email: "c.lopez@example.com",
      address: "Av. Pellegrini 890, Rosario, S2000BDI",
      date: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
      amount: 119990,
      status: "Pendiente",
    },
];

if (!global._orders) {
  global._orders = initialOrders;
}
if (global._orderCounter === undefined) {
  global._orderCounter = initialOrders.length;
}

const orders: Order[] = global._orders;

export async function getOrders(): Promise<Order[]> {
    // Crea una copia antes de ordenar para no mutar el array original.
    return Promise.resolve([...orders].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()));
}

export async function addOrder(order: Omit<Order, 'id' | 'date' | 'status'>): Promise<Order> {
    global._orderCounter++;
    const newOrder: Order = {
        ...order,
        id: `ORD${String(global._orderCounter).padStart(3, '0')}`,
        date: new Date().toISOString(),
        status: 'Pendiente',
    };
    orders.unshift(newOrder); // Agrega al principio del array global
    return Promise.resolve(newOrder);
}
