import NotificationDropdown from "@/components/NotificationDropdown";
import Sidebar from "@/components/sidebar";
import UserDropdown from "@/components/UserDropdown";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div>
        <div className="flex justify-center lg:justify-between">
          <div className="hidden lg:block"></div>
          <div className=" flex gap-2">
            <NotificationDropdown />
            <UserDropdown />
          </div>
        </div>
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <p className="mt-4 text-gray-600">
          This area expands to full width next to the sidebar 🚀
        </p>
      </div>
    </>
  );
}
