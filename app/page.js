import Sidebar from "@/components/sidebar";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div>
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <p className="mt-4 text-gray-600">
          This area expands to full width next to the sidebar 🚀
        </p>
      </div>
    </>
  );
}
