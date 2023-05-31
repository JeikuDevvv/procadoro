import Header from "@/components/header/Header";
import { Pomodoro } from "@/function/pomodoro";

export default function Home() {
    return (
        <main>
            <Header />
            {/* BODY */}
            <Pomodoro styles="flex flex-col justify-center items-center p-5 bg-customColor30/10 rounded-[20px] m-[20px] lg:ml-[500px] lg:mr-[500px]" />
        </main>
    );
}
