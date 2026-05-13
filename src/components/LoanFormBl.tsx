import { useState } from "react";
import { useSubmitLoanRequestLeadCreation } from "../lib/api";

interface FormData {
  businessName: string;
  name: string;
  mobileNo: string;
  email: string;
  pincode: string;
  loanAmount: string;
  entityType: string;
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

// Mobile number validation regex (10 digits, starting with 6-9)
const MOBILE_REGEX = /^[6-9][0-9]{9}$/;

// Validate mobile number format
const validateMobile = (mobile: string): boolean => {
  return MOBILE_REGEX.test(mobile);
};

// Format mobile input (only digits, limit to 10)
const formatMobile = (value: string): string => {
  return value.replace(/[^\d]/g, "").slice(0, 10);
};

// Gmail validation regex
const GMAIL_REGEX = /^[a-zA-Z0-9._%-]+@gmail\.com$/;

// Validate Gmail format
const validateGmail = (email: string): boolean => {
  return GMAIL_REGEX.test(email);
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
    entity_type: form.entityType || "SOLE_PROPRIETOR",
    applicant_name: form.businessName,
    contact_name: form.name,
    status: 1,
    mobile: form.mobileNo,
    email: form.email,
    loan_amount: form.loanAmount,
    data: {
      sourced_by: "self"
    },
    territory_id: ""
  },
  primary: {
    applicant_type: "PRIMARY",
    applicant_category: "ENTITY",
    business: {
      entity_type: form.entityType || "SOLE_PROPRIETOR",
      external_id: "",
      legal_name: form.businessName,
      trade_name: form.businessName,
      nature_of_business: "",
      primary_id_type: "",
      primary_id_value: "",
      secondary_id_type: "",
      secondary_id_value: "",
      business_vintage: 0,
      incorporation_date: "",
      last_year_profit: 0,
      last_year_turnover: 0,
      annual_income: 0,
      monthly_emi: 0,
      monthly_sale: 0,
      industry_type_name: "",
      industry_product_name: "",
      shareholders: [
        {
          name: form.name,
          share_percentage: 0,
          gender: "",
          mobile: form.mobileNo,
          dob: "",
          email: form.email,
          primary_id_type: "",
          primary_id_value: "",
          secondary_id_type: "",
          secondary_id_value: "",
          maiden_type: "",
          maiden_name: "",
          is_applicant: 0,
          aadhaar_kyc: 0,
          addresses: null,
          profession: "",
          qualification: "",
          data: null,
          work_info: null
        }
      ],
      addresses: [
        {
          address_type: "",
          address_line: "",
          locality: "",
          landmark: "",
          city: "",
          state: "",
          latitude: 0,
          longitude: 0,
          pincode: form.pincode,
          residing_in_month: 0,
          area_id: 0,
          residence_type: "",
          premise: "",
          proof_document_id: "",
          same_as_type: ""
        }
      ],
      company_bank_account: null,
      data: null
    }
  },
  "execute_workflow": "TRUE",
});

const INIT = {
  businessName: "",
  name: "",
  mobileNo: "",
  email: "",
  pincode: "",
  loanAmount: "",
  entityType: "",
};

export default function LoanFormBl() {
  const [form, setForm] = useState(INIT);
  const [displayAmount, setDisplayAmount] = useState("");
  const [mobileError, setMobileError] = useState("");
  const [emailError, setEmailError] = useState("");
  const { mutate, isPending, isSuccess, isError, data, error, reset } = useSubmitLoanRequestLeadCreation();

  const set = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm((p) => ({ ...p, [name]: value }));
  };

  const handleMobileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formattedValue = formatMobile(e.target.value);
    setForm((p) => ({ ...p, mobileNo: formattedValue }));
    
    // Validate mobile format
    if (formattedValue.length === 0) {
      setMobileError("");
    } else if (formattedValue.length < 10) {
      setMobileError("Mobile number must be 10 digits long");
    } else if (!validateMobile(formattedValue)) {
      setMobileError("Invalid mobile number. Must start with 6-9 and be 10 digits");
    } else {
      setMobileError("");
    }
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setForm((p) => ({ ...p, email: value }));
    
    // Validate Gmail format
    if (value.length === 0) {
      setEmailError("");
    } else if (!validateGmail(value)) {
      setEmailError("Please enter a valid Gmail address (e.g., name@gmail.com)");
    } else {
      setEmailError("");
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
    
    // Check for validation errors before submitting
    if (mobileError || emailError) {
      return;
    }
    
    reset();
    mutate(buildPayload(form), {
      onSuccess: () => {
        setForm(INIT);
        setDisplayAmount("");
        setMobileError("");
        setEmailError("");
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

              {/* Entity Type - Full width */}
              <div className="col-span-2">
                <select
                  name="entityType"
                  value={form.entityType}
                  onChange={set}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent bg-white"
                >
                  <option value="">Select Entity Type *</option>
                  <option value="SOLE_PROPRIETOR">Sole Proprietor</option>
                  <option value="PARTNERSHIP">Partnership</option>
                  <option value="PRIVATE_LIMITED">Private Limited</option>
                  <option value="PUBLIC_LIMITED">Public Limited</option>
                  <option value="LIMITED_LIABILITY_PARTNERSHIP">Limited Liability Partnership</option>
                  <option value="ONE_PERSON_COMPANY">One Person Company</option>
                </select>
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
                    onChange={handleMobileChange}
                    required
                    maxLength={10}
                    className={`w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent ${
                      mobileError ? 'border-red-500' : 'border-gray-300'
                    }`}
                  />
                  {mobileError && (
                    <p className="mt-1 text-sm text-red-600">{mobileError}</p>
                  )}
                </div>

                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email *"
                    value={form.email}
                    onChange={handleEmailChange}
                    required
                    className={`w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent ${
                      emailError ? 'border-red-500' : 'border-gray-300'
                    }`}
                  />
                  {emailError && (
                    <p className="mt-1 text-sm text-red-600">{emailError}</p>
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