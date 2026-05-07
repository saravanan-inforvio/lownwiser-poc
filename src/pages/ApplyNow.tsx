
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
// import LoanForm from "@/components/LoanForm";
import LoanFormBl from "@/components/LoanFormBl";
import Footer from "@/components/Footer";

const ApplyNow = () => {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Header />

      <main className="flex-grow">
        <HeroSection />

        {/* Eligibility Banner */}
        <div className="bg-white py-8">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-xl md:text-2xl font-bold text-red-600">
              {/* Eligibility: Only for salaried persons with Monthly Salary of 45000 per month. */}
              Eligibility: For business owners and entrepreneurs with minimum 2 years of business operation and annual turnover of ₹10 lakhs.
            </h2>
          </div>
        </div>

        {/* <LoanForm /> */}
        <LoanFormBl />

        {/* Informational Sections */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 max-w-5xl space-y-16">

            {/* Eligibility Criteria */}
            <div>
              <h3 className="text-2xl font-bold mb-6 text-gray-800">Eligibility Criteria For Ardent Capital</h3>
              <p className="text-gray-600 mb-6">To ensure a smooth and hassle-free loan approval process, applicants must meet the following requirements:</p>
              <ul className="list-disc pl-6 space-y-3 text-gray-600 text-sm">
                <li>Employment Status: Only salaried professionals are eligible.</li>
                <li>Minimum Salary Requirement: A monthly take-home salary of at least ₹30,000 is required.</li>
                <li>Salary Credit: Your salary must be regularly credited to a bank account.</li>
                <li>Age Criteria: Applicants should be between 25 and 55 years old.</li>
                <li>Loan Limit: You can avail a loan of up to 80% of your monthly salary.</li>
              </ul>
              <p className="mt-6 text-gray-700 font-medium italic">If you meet these criteria, apply today and get the financial support you need—quick, easy, and hassle-free!</p>
            </div>

            {/* Required Documents */}
            <div>
              <h3 className="text-2xl font-bold mb-6 text-gray-800">Required Documents For Loan Approval</h3>
              <p className="text-gray-600 mb-6">To ensure a smooth and hassle-free loan application process, please provide the following KYC documents for verification:</p>
              <ul className="list-disc pl-6 space-y-3 text-gray-600 text-sm">
                <li>PAN Card – Mandatory for identity verification.</li>
                <li>Salary Slips – Last 3 months to assess income stability.</li>
                <li>Bank Statements – Salary account statement for the past 3 to 6 months for financial assessment.</li>
                <li>Address Proof – Any government-approved document to verify your residential address.</li>
              </ul>
              <p className="mt-6 text-gray-700 font-medium">Submit your documents today and get closer to quick loan approval!</p>
            </div>

            {/* Key Features */}
            <div>
              <h3 className="text-2xl font-bold mb-6 text-gray-800">Key Features Of Ardent Capital</h3>
              <ul className="list-disc pl-6 space-y-3 text-gray-600 text-sm">
                <li>Personal Loans Up to ₹1,00,000 – Get financial support when you need it most.</li>
                <li>No Collateral Required – Cash loans are provided without any security cover.</li>
                <li>No Guarantor Needed – Apply for a loan independently, without a co-borrower.</li>
                <li>Loan Amount Up to 80% of Your Take-Home Salary – Borrow as per your financial capacity.</li>
                <li>Competitive Interest Rates – Interest rates up to 32% APR.</li>
                <li>Minimal Fees – Processing fees up to 10% of the loan amount.</li>
                <li>No Preclosure Charges – Pay as you use without additional preclosure costs.</li>
              </ul>
            </div>

            {/* Loan Terms */}
            <div>
              <h3 className="text-2xl font-bold mb-6 text-gray-800">Loan Terms And Disclosure</h3>
              <ul className="list-disc pl-6 space-y-3 text-gray-600 text-sm">
                <li>Minimum Repayment Period: 12 months</li>
                <li>Maximum Repayment Period: 60 months</li>
                <li>Maximum Annual Percentage Rate (APR): 32% (including interest rate, processing fees, and other applicable charges)</li>
              </ul>
            </div>

            {/* Representative Example */}
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <h3 className="text-2xl font-bold mb-6 text-gray-800">Representative Example Of Total Cost Of Loan</h3>
              <ul className="space-y-3 text-gray-600 text-sm">
                <li className="flex justify-between border-b border-gray-100 pb-2"><span>Loan Amount:</span> <span className="font-bold">Rs. 2,00,000</span></li>
                <li className="flex justify-between border-b border-gray-100 pb-2"><span>Tenure:</span> <span className="font-bold">36 months</span></li>
                <li className="flex justify-between border-b border-gray-100 pb-2"><span>Interest Rate:</span> <span className="font-bold">18% per annum (reducing balance)</span></li>
                <li className="flex justify-between border-b border-gray-100 pb-2"><span>Processing Fee:</span> <span className="font-bold">2% of loan amount (₹4,000)</span></li>
                <li className="flex justify-between border-b border-gray-100 pb-2"><span>Total Interest Payable:</span> <span className="font-bold">Rs. 59,414</span></li>
                <li className="flex justify-between border-b border-gray-100 pb-2"><span>Total Processing Fee (one-time):</span> <span className="font-bold">Rs. 4,000</span></li>
                <li className="flex justify-between border-b border-gray-100 pb-2"><span>Total Amount Payable:</span> <span className="font-bold">Rs. 2,63,414</span></li>
                <li className="flex justify-between pt-2"><span>Effective APR:</span> <span className="font-bold text-primary">19.2%</span></li>
              </ul>
            </div>

            {/* Important Disclosures */}
            <div>
              <h3 className="text-2xl font-bold mb-6 text-gray-800">Important Disclosures</h3>
              <ul className="list-disc pl-6 space-y-3 text-gray-600 text-sm">
                <li>The above example is for illustrative purposes only. Actual rates and fees depend on the applicant's profile and NBFC policies.</li>
                <li>No hidden charges. Pre-closure charges (if any) will be disclosed during the loan agreement process.</li>
                <li>All loans are subject to eligibility, credit approval, and documentation.</li>
              </ul>
            </div>

          </div>
        </section>
      </main>

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

export default ApplyNow;
