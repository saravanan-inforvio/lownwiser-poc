
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ChevronLeft, ChevronRight, FileText, Zap, Handshake } from "lucide-react";

const slides = [
    {
        id: 1,
        title: "Get The Loan Effortlessly",
        subtitle: "Our Hassle-Free Approach!",
        desc: "Obtaining a loan is a quick process with our efficient loan solutions. If you've been stressed about a lingering issue for days or months, worry no more.",
    },
    {
        id: 2,
        title: "Simplifying Your Financial",
        subtitle: "Needs With Ease",
        desc: "Whether it's a medical emergency or an unexpected expense, Ardent Capital provides fast and reliable financial solutions with complete transparency and customer-first service.",
    },
    {
        id: 3,
        title: "Transparent, Trusted Loans",
        subtitle: "For Every Situation",
        desc: "With Ardent Capital, you can count on secure, hassle-free loan approvals, offering quick financial support for urgent needs, all with complete transparency and no hidden fees.",
    },
];

const features = [
    {
        icon: <FileText className="w-12 h-12 text-primary mx-auto mb-4" />,
        title: "Simplifying The Procedure For Seamless Experience",
    },
    {
        icon: <Zap className="w-12 h-12 text-primary mx-auto mb-4" />,
        title: "Address Urgent Loan Requirements",
    },
    {
        icon: <Handshake className="w-12 h-12 text-primary mx-auto mb-4" />,
        title: "Streamline The Loan Process For Simplicity",
    },
];

const offerCards = [
    {
        title: "Loan For Shopping",
        desc: "Don't let a cash crunch stop your shopping plans. With Ardent Capital's quick online loans, you can get instant funds to shop freely and manage expenses without stress. Whether it's festival shopping, gadgets, or lifestyle purchases, we've got you covered.",
    },
    {
        title: "Loan For Travel",
        desc: "Planning a trip but running short on funds? Our travel loans offer quick access to cash so you can cover flight tickets, hotel bookings, or other travel expenses. With minimal documentation and fast approval, your dream vacation is just a loan away.",
    },
    {
        title: "Loan To Clear Your Bills",
        desc: "Managing multiple bills? Consolidate and clear your credit card bills, utility payments, insurance premiums, and more with an easy personal loan from Ardent Capital. One quick application, fast disbursal, and you're back in control of your finances.",
    },
    {
        title: "Loan For Emergencies",
        desc: "Unexpected expenses can arise anytime — medical bills, urgent repairs, or family emergencies. Our emergency loans ensure immediate financial support, helping you handle the situation stress-free. Pan-India availability, even in remote areas.",
    },
];

const loanCategories = [
    { icon: "🏠", title: "Home Loan" },
    { icon: "💼", title: "Business Loan" },
    { icon: "🎓", title: "Education Loan" },
    { icon: "🏥", title: "Medical Loan" },
    { icon: "✈️", title: "Travel Loan" },
    { icon: "🛍️", title: "Personal Loan" },
];

const Index = () => {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent((prev) => (prev + 1) % slides.length);
        }, 4000);
        return () => clearInterval(timer);
    }, []);

    const prev = () => setCurrent((c) => (c - 1 + slides.length) % slides.length);
    const next = () => setCurrent((c) => (c + 1) % slides.length);

    return (
        <div className="min-h-screen flex flex-col font-sans">
            <Header />

            {/* Hero Slider */}
            <section className="relative overflow-hidden bg-white" style={{ minHeight: "460px" }}>
                <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 items-center min-h-[460px]">
                    {/* Text Side */}
                    <div className="py-12 z-10">
                        {slides.map((slide, i) => (
                            <div
                                key={slide.id}
                                className={`transition-all duration-700 ${i === current ? "opacity-100 translate-x-0" : "opacity-0 absolute"}`}
                                style={{ display: i === current ? "block" : "none" }}
                            >
                                <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-2 leading-tight">
                                    {slide.title}
                                </h1>
                                <h2 className="text-2xl md:text-3xl font-extrabold text-primary mb-4">
                                    {slide.subtitle}
                                </h2>
                                <p className="text-gray-500 text-sm md:text-base mb-8 max-w-md leading-relaxed">
                                    {slide.desc}
                                </p>
                                <Link
                                    to="/apply-now"
                                    className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-md font-bold text-sm inline-block transition-all shadow-lg"
                                >
                                    Apply Now
                                </Link>
                            </div>
                        ))}
                    </div>

                    {/* Image Side */}
                    <div className="relative flex justify-end items-end h-full">
                        <img
                            src="/hero-lady.png"
                            alt="Loan Hero"
                            className="object-contain max-h-[460px] w-auto ml-auto"
                        />
                    </div>
                </div>

                {/* Prev/Next Buttons */}
                <button
                    onClick={prev}
                    className="absolute left-2 top-1/2 -translate-y-1/2 bg-white border border-gray-200 shadow p-2 rounded-full hover:bg-primary hover:text-white transition-all z-20"
                >
                    <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                    onClick={next}
                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-white border border-gray-200 shadow p-2 rounded-full hover:bg-primary hover:text-white transition-all z-20"
                >
                    <ChevronRight className="w-5 h-5" />
                </button>

                {/* Dots */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-20">
                    {slides.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setCurrent(i)}
                            className={`w-3 h-3 rounded-full transition-all ${i === current ? "bg-primary scale-125" : "bg-gray-300"}`}
                        />
                    ))}
                </div>
            </section>

            {/* About Section */}
            <section className="py-0">
                <div className="grid grid-cols-1 md:grid-cols-2">
                    {/* Illustration */}
                    <div className="bg-primary/10 flex items-center justify-center p-10 min-h-[340px]">
                        <img
                            src="/about-illustration.png"
                            alt="About Ardent Capital"
                            className="max-h-72 object-contain"
                        />
                    </div>
                    {/* Text */}
                    <div className="flex flex-col justify-center p-10 md:p-16 bg-gray-50">
                        <h2 className="text-3xl font-extrabold text-gray-900 mb-4">
                            About Ardent Capital: A Quick Insight
                        </h2>
                        <p className="text-gray-500 leading-relaxed mb-8 text-sm">
                            Find a solution for your financial emergencies with us. Explore our diverse loan options designed for immediate needs and personal endeavors. Our loans serve various purposes, from covering rent and bills to facilitating purchases, education expenses, personal use, and beyond.
                        </p>
                        <Link
                            to="/apply-now"
                            className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-md font-bold text-sm inline-block transition-all shadow-lg w-fit"
                        >
                            Apply Now
                        </Link>
                    </div>
                </div>
            </section>

            {/* Trust Section */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-12">
                        Trust, Transparency &amp; Credibility
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {features.map((f, i) => (
                            <div key={i} className="border border-gray-100 rounded-xl p-8 hover:shadow-xl transition-shadow text-center">
                                {f.icon}
                                <h3 className="text-base font-bold text-gray-800">{f.title}</h3>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* What We Offer */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 text-center mb-12">
                        What We Offer
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {offerCards.map((card, i) => (
                            <div key={i} className="bg-white border border-gray-100 rounded-xl p-6 hover:shadow-xl hover:border-primary/30 transition-all">
                                <h3 className="text-base font-bold text-gray-900 mb-3">{card.title}</h3>
                                <p className="text-sm text-gray-500 leading-relaxed">{card.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Diverse Loan Categories */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-2xl md:text-4xl font-extrabold text-gray-900 leading-tight mb-6">
                                Explore Our Versatile Loans, For Diverse Financial Needs In Below Key Categories
                            </h2>
                            <Link
                                to="/apply-now"
                                className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-md font-bold text-sm inline-block transition-all shadow-lg"
                            >
                                Apply Now
                            </Link>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                            {loanCategories.map((cat, i) => (
                                <div key={i} className="border border-gray-100 rounded-xl p-5 text-center hover:shadow-lg hover:border-primary/30 transition-all">
                                    <div className="text-3xl mb-2">{cat.icon}</div>
                                    <p className="text-sm font-semibold text-gray-700">{cat.title}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Banner */}
            <section className="py-16 bg-secondary text-white text-center">
                <div className="container mx-auto px-4">
                    <h2 className="text-2xl md:text-3xl font-extrabold mb-4">
                        Ready to Get Your Loan? Apply Now!
                    </h2>
                    <p className="text-white/80 mb-8 max-w-xl mx-auto text-sm">
                        Quick approvals, minimal documentation, and funds directly in your account. Get started today.
                    </p>
                    <Link
                        to="/apply-now"
                        className="bg-primary text-white px-10 py-3 rounded-md font-bold text-sm inline-block transition-all shadow-xl"
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

export default Index;
