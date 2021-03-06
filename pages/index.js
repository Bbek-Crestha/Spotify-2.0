import Head from "next/head";
import Sidebar from "../components/Sidebar";

export default function Home() {
	return (
		<div className="h-screen overflow-hidden bg-black">
			<main className="">
				<Sidebar />
				{/* Content */}
			</main>

			<div>{/* Player */}</div>
		</div>
	);
}
