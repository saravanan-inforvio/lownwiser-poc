
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ShieldCheck, Zap, Users, Heart } from "lucide-react";

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

const values = [
    {
        icon: <ShieldCheck className="w-8 h-8 text-primary" />,
        title: "Trust & Safety",
        desc: "RBI-registered NBFC ensuring full compliance and secure lending practices.",
    },
    {
        icon: <Zap className="w-8 h-8 text-primary" />,
        title: "Quick Approvals",
        desc: "Fast, minimal documentation process with rapid disbursal directly to your account.",
    },
    {
        icon: <Users className="w-8 h-8 text-primary" />,
        title: "Customer First",
        desc: "We place our customers at the heart of every decision we make.",
    },
    {
        icon: <Heart className="w-8 h-8 text-primary" />,
        title: "Responsible Lending",
        desc: "We only offer loans that we know will be easy for you to repay, at ethical fees.",
    },
];

const AboutUs = () => {
    return (
        <div className="min-h-screen flex flex-col font-sans">
            <Header />

            {/* Hero Banner */}
            <section className="relative h-56 md:h-72 flex items-center overflow-hidden">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage: "url('/about-hero.png')",
                        filter: "brightness(0.45)",
                    }}
                />
                <div className="container mx-auto px-10 relative z-10">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-white drop-shadow-lg">
                        About Us
                    </h1>
                </div>
            </section>

            {/* Quick Overview Section */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
                        {/* Image */}
                        <div className="rounded-2xl overflow-hidden shadow-lg">
                            <img
                                src="/about-team.png"
                                alt="Our Team"
                                className="w-full h-80 object-cover"
                            />
                        </div>

                        {/* Text */}
                        <div>
                            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-6 leading-tight">
                                A Quick Overview Of Our Company
                            </h2>
                            <p className="text-gray-500 text-sm leading-relaxed mb-4">
                                Find a solution for your financial emergencies with us. Explore our diverse loan options designed for immediate needs and personal endeavors. Our loans serve various purposes, from covering rent and bills to facilitating purchases, education expenses, personal use, and beyond.
                            </p>
                            <p className="text-gray-500 text-sm leading-relaxed mb-8">
                                At Ardent Capital, we go beyond finance—we build relationships founded on trust, transparency, and unwavering support. Our tagline, "RISE AGAIN," embodies our mission to help you overcome financial challenges and move forward with confidence. Whether you need emergency funds, personal loans, or fast credit solutions, we stand by you every step of the way, providing reliable financial assistance when you need it most.
                            </p>
                            <Link
                                to="/apply-now"
                                className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-md font-bold text-sm inline-block transition-all shadow-lg"
                            >
                                Apply Now
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Values */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-3">
                        Our Core Values
                    </h2>
                    <p className="text-gray-500 text-sm mb-12 max-w-xl mx-auto">
                        Built on a foundation of integrity, we strive to deliver the best financial solutions to every customer.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
                        {values.map((v, i) => (
                            <div
                                key={i}
                                className="bg-white border border-gray-100 rounded-xl p-8 hover:shadow-xl hover:border-primary/30 transition-all text-center"
                            >
                                <div className="flex justify-center mb-4">{v.icon}</div>
                                <h3 className="font-bold text-gray-800 mb-2">{v.title}</h3>
                                <p className="text-xs text-gray-500 leading-relaxed">{v.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* What We Offer */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 text-center mb-12">
                        What We Offer
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {offerCards.map((card, i) => (
                            <div
                                key={i}
                                className="bg-gray-50 border border-gray-100 rounded-xl p-6 hover:shadow-xl hover:border-primary/30 transition-all"
                            >
                                <h3 className="text-base font-bold text-gray-900 mb-3">
                                    {card.title}
                                </h3>
                                <p className="text-sm text-gray-500 leading-relaxed">{card.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-14 bg-primary text-white text-center">
                <div className="container mx-auto px-4">
                    <h2 className="text-2xl font-extrabold mb-4">
                        Ready to Get Started?
                    </h2>
                    <p className="text-white/80 mb-8 text-sm max-w-md mx-auto">
                        Apply today and experience seamless, transparent, and quick loan solutions tailored for you.
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

export default AboutUs;
