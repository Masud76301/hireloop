


import { Briefcase,LayoutSideContent, Bell, Envelope, Gear, House, Magnifier, Person } from "@gravity-ui/icons";
import { Button, Drawer } from "@heroui/react";
import Link from "next/link";

export function DashboardSidebar() {
    const navItems = [
        { icon: House, label: "Home", src: "/dashbord/recruiter" },
        { icon: Magnifier, label: "Job",src: "/dashbord/recruiter/job" },
        { icon: Briefcase, label: "Create A Job" , src: "/dashbord/recruiter/job/new"},
        { icon: Bell, label: "Notifications" , src: "/dashbord"},
        { icon: Envelope, label: "Messages", src: "/" },
        { icon: Person, label: "My Company",src: "/dashbord/recruiter/company" },
        { icon: Gear, label: "Settings",src: "/dashbord" },
    ];

    const navContent = <nav className="flex flex-col gap-1">
        {navItems.map((item) => (
            <Link href={item.src} key={item.label}>
                <button 
                    className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-foreground transition-colors hover:bg-default"
                    type="button"
                >
                    <item.icon className="size-5 text-muted" />
                    {item.label}
                </button>
            </Link>

        ))}
    </nav>

    return (
        <>
            <aside className="hidden lg:block w-64 shrink-0 border-r border-default p-4">
                {navContent}
            </aside>


            <Drawer>
                <Button className="lg:hidden" variant="secondary">
                    <LayoutSideContent />
                    Menu
                </Button>
                <Drawer.Backdrop>
                    <Drawer.Content placement="left">
                        <Drawer.Dialog>
                            <Drawer.CloseTrigger />
                            <Drawer.Header>
                                <Drawer.Heading>Navigation</Drawer.Heading>
                            </Drawer.Header>
                            <Drawer.Body>
                                {navContent}
                            </Drawer.Body>
                        </Drawer.Dialog>
                    </Drawer.Content>
                </Drawer.Backdrop>
            </Drawer>
        </>

    );
}