
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ClipboardList, FileCheck, BadgeCheck } from "lucide-react";

const steps = [
    {
        number: "01",
        icon: <ClipboardList className="w-10 h-10 text-primary" />,
        title: "Apply Online with Ease",
        desc: "Getting started with Ardent Capital is simple! Fill out a quick online application form with your basic details, desired loan amount, and monthly income. Our seamless digital process ensures that this step takes just a few minutes of your time.",
    },
    {
        number: "02",
        icon: <FileCheck className="w-10 h-10 text-primary" />,
        title: "Eligibility & Documentation",
        desc: "Once you submit your application, our team will assess your eligibility based on our lending criteria. You'll receive an email requesting any additional documents required to process your loan smoothly.",
    },
    {
        number: "03",
        icon: <BadgeCheck className="w-10 h-10 text-primary" />,
        title: "Quick Approval & Disbursal",
        desc: "After verifying your details, our representative will contact you to finalize the process. Upon approval, your loan amount will be disbursed swiftly, ensuring you get the funds you need—right when you need them!",
    },
];

const HowItWorks = () => {
    return (
        <div className="min-h-screen flex flex-col font-sans">
            <Header />

            {/* Hero Banner */}
            <section className="relative h-56 md:h-64 flex items-center overflow-hidden">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage: "url('/hero-bg.png')",
                        filter: "brightness(0.45)",
                    }}
                />
                <div className="container mx-auto px-10 relative z-10">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-white drop-shadow-lg">
                        How It Works
                    </h1>
                </div>
            </section>

            {/* Steps Section */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4 max-w-4xl">
                    <h2 className="text-2xl font-bold text-gray-800 mb-10">How It Works</h2>

                    {/* Steps List */}
                    <div className="space-y-0">
                        {steps.map((step, i) => (
                            <div key={i} className="relative flex gap-6 pb-12 last:pb-0">
                                {/* Left: Number + Connector Line */}
                                <div className="flex flex-col items-center">
                                    <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-extrabold text-lg shrink-0 z-10 shadow-md">
                                        {step.number}
                                    </div>
                                    {i < steps.length - 1 && (
                                        <div className="w-0.5 flex-1 bg-primary/20 mt-2" />
                                    )}
                                </div>

                                {/* Right: Content */}
                                <div className="pb-2 flex-1">
                                    <div className="flex items-center gap-3 mb-3">
                                        {step.icon}
                                        <h3 className="text-lg font-bold text-gray-800">
                                            Step {i + 1}: {step.title}
                                        </h3>
                                    </div>
                                    <p className="text-sm text-gray-500 leading-relaxed max-w-2xl">
                                        {step.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Visual Cards */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-3">
                        Simple. Fast. Reliable.
                    </h2>
                    <p className="text-gray-500 text-sm mb-12 max-w-xl mx-auto">
                        Our entire loan process is designed to be transparent and hassle-free, getting you the funds you need in the shortest time possible.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                        {steps.map((step, i) => (
                            <div
                                key={i}
                                className="bg-white border border-gray-100 rounded-2xl p-8 hover:shadow-xl hover:border-primary/30 transition-all text-center"
                            >
                                <div className="flex justify-center mb-5">
                                    <div className="bg-primary/10 p-4 rounded-full">
                                        {step.icon}
                                    </div>
                                </div>
                                <div className="text-4xl font-extrabold text-primary/20 mb-2">
                                    {step.number}
                                </div>
                                <h3 className="font-bold text-gray-800 mb-3 text-base">
                                    {step.title}
                                </h3>
                                <p className="text-xs text-gray-500 leading-relaxed">
                                    {step.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-14 bg-primary text-white text-center">
                <div className="container mx-auto px-4">
                    <h2 className="text-2xl font-extrabold mb-4">
                        Ready to Apply? It Only Takes Minutes!
                    </h2>
                    <p className="text-white/80 mb-8 text-sm max-w-md mx-auto">
                        Start your loan application today and get funds disbursed quickly with minimal hassle.
                    </p>
                    <Link
                        to="/apply-now"
                        className="bg-white text-primary hover:bg-gray-100 px-10 py-3 rounded-md font-bold text-sm inline-block transition-all shadow-xl"
                    >
                        Apply Now
                    </Link>
                </div>
            </section>

            <Footer />

            {/* WhatsApp Floating Button */}
            <a
                href="https://wa.me/919728186555"
                target="_blank"
                rel="noopener noreferrer"
                className="fixed bottom-6 right-6 bg-[#25D366] p-3 rounded-full shadow-2xl hover:scale-110 transition-transform z-50"
            >
                <svg viewBox="0 0 24 24" className="w-8 h-8 text-white fill-current">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
            </a>
        </div>
    );
};

export default HowItWorks;
