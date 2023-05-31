import Header from "@/components/header/Header";
import Buttons from "@/components/pomodoro/buttons";
import States from "@/components/pomodoro/states";
import Timer from "@/components/pomodoro/timer";

export default function Home() {
    return (
        <main>
            <Header />
            {/* BODY */}
            <div>
                <States />
                <Timer />
                <Buttons />
            </div>
        </main>
    );
}
