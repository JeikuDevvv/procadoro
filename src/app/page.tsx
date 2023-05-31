import Header from "@/components/header/Header";
import Pomodoro from "@/components/pomodoro/Pomodoro";

export default function Home() {
    return (
        <main>
            <Header />
            {/* BODY */}
            <Pomodoro styles="lg:flex justify-center w-full" />
        </main>
    );
}
