import { useState } from "react";
import { useSubmitLoanRequestLeadCreation } from "../lib/api";

interface FormData {
  businessName: string;
  name: string;
  mobileNo: string;
  email: string;
  pincode: string;
  loanAmount: string;
  gender: string;
  dob: string;
  panCard: string;
}

// Format number with Indian comma separator
const formatAmount = (value: string): string => {
  if (!value) return "";
  const number = value.replace(/[^\d]/g, "");
  if (!number) return "";
  return new Intl.NumberFormat("en-IN").format(parseInt(number));
};

// Remove formatting to get raw number
const parseAmount = (value: string): string => {
  return value.replace(/[^\d]/g, "");
};

// PAN validation regex
const PAN_REGEX = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/;

// Validate PAN number format
const validatePAN = (pan: string): boolean => {
  return PAN_REGEX.test(pan);
};

// Format PAN input (convert to uppercase and limit to 10 chars)
const formatPAN = (value: string): string => {
  return value.toUpperCase().replace(/[^A-Z0-9]/g, "").slice(0, 10);
};

// Build payload for business loan
const buildPayload = (form: FormData) => ({
  application: {
    type: "ENQUIRY_APPLICATION",
    loan_type_code: "BL",
    loan_info: [
      {
        sub_loan_type: "BLNEW",
        facility_type: ""
      }
    ],
    apply_capacity: "ENTITY",
    entity_type: "SOLE_PROPRIETOR",
    applicant_name: form.businessName,
    contact_name: form.name,
    status: 1,
    mobile: form.mobileNo,
    email: form.email,
    loan_amount: form.loanAmount,
    data: {
      sourced_by: "self"
    },
    territory_id: "1742820979107"
  },
  primary: {
    applicant_type: "PRIMARY",
    applicant_category: "ENTITY",
    business: {
      trade_name: form.businessName,
      legal_name: form.businessName,
      entity_type: "SOLE_PROPRIETOR",
      shareholders: [
        {
          name: form.name,
          email: form.email,
          gender: form.gender,
          dob: form.dob,
          pan_card: form.panCard
        }
      ],
      addresses: [
        {
          pincode: form.pincode,
          city: "",
          state: ""
        }
      ]
    }
  }
});

const INIT = {
  businessName: "",
  name: "",
  mobileNo: "",
  email: "",
  pincode: "",
  loanAmount: "",
  gender: "",
  dob: "",
  panCard: "",
};

export default function LoanFormBl() {
  const [form, setForm] = useState(INIT);
  const [displayAmount, setDisplayAmount] = useState("");
  const [panError, setPanError] = useState("");
  const { mutate, isPending, isSuccess, isError, data, error, reset } = useSubmitLoanRequestLeadCreation();

  const set = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm((p) => ({ ...p, [name]: value }));
  };

  const handlePanChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formattedValue = formatPAN(e.target.value);
    setForm((p) => ({ ...p, panCard: formattedValue }));
    
    // Validate PAN format
    if (formattedValue.length === 0) {
      setPanError("");
    } else if (formattedValue.length < 10) {
      setPanError("PAN must be 10 characters long");
    } else if (!validatePAN(formattedValue)) {
      setPanError("Invalid PAN format. Use format: ABCDE1234F");
    } else {
      setPanError("");
    }
  };

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const rawValue = parseAmount(e.target.value);
    const formattedValue = formatAmount(rawValue);
    
    setDisplayAmount(formattedValue);
    setForm((p) => ({ ...p, loanAmount: rawValue }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Check for PAN validation before submitting
    if (panError) {
      return;
    }
    
    reset();
    mutate(buildPayload(form), {
      onSuccess: () => {
        setForm(INIT);
        setDisplayAmount("");
        setPanError("");
      },
    });
  };

  const application_code = data?.result?.application?.application_code;

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl w-full flex bg-white rounded-lg shadow-xl overflow-hidden">
        {/* Left side - Image */}
        <div className="hidden lg:block lg:w-1/2">
          <div className="h-full bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center">
            <div className="text-center text-white p-8">
              <div className="w-64 h-64 mx-auto mb-6 bg-white/20 rounded-full flex items-center justify-center">
                <div className="w-48 h-48 bg-white/30 rounded-full flex items-center justify-center">
                  <svg className="w-24 h-24 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z"/>
                  </svg>
                </div>
              </div>
              <h2 className="text-2xl font-bold mb-4">Transform Your Business Dreams</h2>
              <p className="text-lg opacity-90">Get the funding you need to grow your business</p>
            </div>
          </div>
        </div>

        {/* Right side - Form */}
        <div className="w-full lg:w-1/2 p-8">
          <div className="max-w-2xl mx-auto">
            {/* Header */}
            <div className="text-center mb-8">
              <h1 className="text-2xl font-bold text-gray-900 mb-2">Let's Change Your Life!</h1>
              <p className="text-gray-600">Apply for a business loan in minutes</p>
            </div>

            {/* Success Message */}
            {isSuccess && (
              <div className="mb-6 p-4 rounded-lg border bg-green-50 border-green-300 text-green-800 text-sm font-medium">
                Business loan application submitted successfully!
                {application_code && (
                  <p className="mt-1 font-bold">
                    Application Code: {application_code}
                  </p>
                )}
              </div>
            )}

            {/* Error Message */}
            {isError && (
              <div className="mb-6 p-4 rounded-lg border bg-red-50 border-red-300 text-red-800 text-sm font-medium">
                {error?.message || "Something went wrong. Please try again."}
              </div>
            )}

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Business Name - Full width */}
              <div className="col-span-2">
                <input
                  type="text"
                  name="businessName"
                  placeholder="Business Name *"
                  value={form.businessName}
                  onChange={set}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                />
              </div>

              {/* Two columns layout */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Contact Person Name *"
                    value={form.name}
                    onChange={set}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <input
                    type="tel"
                    name="mobileNo"
                    placeholder="Mobile No *"
                    value={form.mobileNo}
                    onChange={set}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email *"
                    value={form.email}
                    onChange={set}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <select
                    name="gender"
                    value={form.gender}
                    onChange={set}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent bg-white"
                  >
                    <option value="">Select Gender *</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div>
                  <input
                    type="date"
                    name="dob"
                    placeholder="Date of Birth *"
                    value={form.dob}
                    onChange={set}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <input
                    type="text"
                    name="panCard"
                    placeholder="PAN Card Number *"
                    value={form.panCard}
                    onChange={handlePanChange}
                    required
                    maxLength={10}
                    className={`w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent uppercase ${
                      panError ? 'border-red-500' : 'border-gray-300'
                    }`}
                  />
                  {panError && (
                    <p className="mt-1 text-sm text-red-600">{panError}</p>
                  )}
                </div>

                <div>
                  <input
                    type="text"
                    name="pincode"
                    placeholder="Pincode *"
                    value={form.pincode}
                    onChange={set}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <input
                    type="text"
                    name="loanAmount"
                    placeholder="Loan Amount *"
                    value={displayAmount}
                    onChange={handleAmountChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={isPending}
                className="w-full bg-orange-500 hover:bg-orange-600 disabled:bg-orange-300 text-white font-semibold py-3 px-4 rounded-md transition-colors duration-200 flex items-center justify-center gap-2"
              >
                {isPending ? (
                  <>
                    <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24" fill="none">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                    </svg>
                    Submitting...
                  </>
                ) : (
                  <>
                    Submit
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </>
                )}
              </button>
            </form>

            {/* Additional Info */}
            <div className="mt-6 text-center text-sm text-gray-500">
              <p>By submitting, you agree to our Terms & Conditions</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}