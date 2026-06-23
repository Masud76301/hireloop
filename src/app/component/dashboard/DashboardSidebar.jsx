


import { getUserSession } from "@/app/lib/core/session";
import { Briefcase, LayoutSideContent, Bell, Envelope, Gear, House, Magnifier, Person, Bookmark, FileText, CreditCard } from "@gravity-ui/icons";
import { Button, Drawer } from "@heroui/react";
import Link from "next/link";
import { BiBuilding } from "react-icons/bi";
import { CgLayoutGrid } from "react-icons/cg";
import { LuLayoutGrid } from "react-icons/lu";

export async function DashboardSidebar() {

    const user = await getUserSession();

    const recruiterNavLinks = [
        { icon: House, label: "Home", src: "/dashbord/recruiter" },
        { icon: Magnifier, label: "Job", src: "/dashbord/recruiter/job" },
        { icon: Briefcase, label: "Create A Job", src: "/dashbord/recruiter/job/new" },
        { icon: Bell, label: "Notifications", src: "/dashbord" },
        { icon: Envelope, label: "Messages", src: "/" },
        { icon: Person, label: "My Company", src: "/dashbord/recruiter/company" },
        { icon: Gear, label: "Settings", src: "/dashbord" },
    ];

    const seekerNavLinks = [

        { icon: House, label: "Home", src: "/dashbord/seeker" },
        { icon: Briefcase, label: "Jobs", src: "/dashbord/seeker/jobs" },
        { icon: Bookmark, label: "Saved Jobs", src: "/dashbord/seeker/saved" },
        { icon: FileText, label: "Applications", src: "/dashbord/seeker/applications" },
        { icon: CreditCard, label: "Billing", src: "/dashbord/seeker/billing" },

    ];
    const adminNavLinks = [
        { icon: LuLayoutGrid, label: "Dashboard", src: "/dashbord/admin" },
        { icon: Person, label: "Users", src: "/dashbord/admin/users" },
        { icon: BiBuilding, label: "Companies", src: "/dashbord/admin/companies" },
        { icon: Briefcase, label: "Jobs", src: "/dashbord/admin/jobs" },
        { icon: CreditCard, label: "Payments", src: "/dashbord/admin/payments" },
        { icon: Gear, label: "Settings", src: "/dashbord/admin/settings" },
    ];

    const navLinkMap = {
        seeker: seekerNavLinks,
        recruiter: recruiterNavLinks,
        admin:adminNavLinks,
    }
    const navItems = navLinkMap[user?.role || "seeker"];

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