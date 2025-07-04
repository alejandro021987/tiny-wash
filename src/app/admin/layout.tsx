"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, ShoppingCart, MessageSquare } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  SidebarProvider,
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarInset,
  SidebarTrigger,
} from "@/components/ui/sidebar";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const isActive = (path: string) => {
    return pathname === path;
  };

  return (
    <SidebarProvider>
      <Sidebar collapsible="icon">
        <SidebarHeader>
           <div className="flex w-full items-center justify-start p-2 group-data-[collapsible=icon]:justify-center">
                <div className="flex items-center gap-2 group-data-[collapsible=icon]:hidden">
                    <span className="text-2xl font-black tracking-tighter">
                        <span className="text-foreground">Tiny</span>
                        <span className="text-primary">Wash</span>
                    </span>
                    <span className="text-sm font-medium text-muted-foreground mt-1">Admin</span>
                </div>
                <div className="hidden items-center gap-2 group-data-[collapsible=icon]:flex">
                    <span className="text-xl font-black tracking-tighter">
                        <span className="text-foreground">T</span>
                        <span className="text-primary">W</span>
                    </span>
                </div>
           </div>
        </SidebarHeader>
        <SidebarContent>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton asChild isActive={isActive("/admin")} tooltip="Dashboard">
                <Link href="/admin">
                  <LayoutDashboard />
                  <span>Dashboard</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton asChild isActive={isActive("/admin/orders")} tooltip="Ventas">
                <Link href="/admin/orders">
                  <ShoppingCart />
                  <span>Ventas</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton asChild isActive={isActive("/admin/messages")} tooltip="Mensajes (desactivado)">
                <Link href="/admin/messages">
                  <MessageSquare />
                  <span>Mensajes</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarContent>
      </Sidebar>
      <SidebarInset>
        <header className="flex h-14 items-center gap-4 border-b bg-muted/40 px-6">
            <SidebarTrigger />
            <div className="flex-1">
                <h1 className="text-lg font-semibold">
                    {pathname === '/admin' && 'Dashboard'}
                    {pathname === '/admin/orders' && 'Ventas'}
                    {pathname === '/admin/messages' && 'Consultas y Mensajes'}
                </h1>
            </div>
            <div className="flex items-center gap-4">
                 <Button asChild size="sm" variant="outline">
                    <Link href="/" target="_blank">
                        Ver Tienda
                    </Link>
                </Button>
            </div>
        </header>
        <main className="flex-1 p-4 md:p-6 bg-muted/40">{children}</main>
      </SidebarInset>
    </SidebarProvider>
  );
}
