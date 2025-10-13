import React from "react";

const plans = [
  {
    duration: "12 Months Plan",
    originalPrice: "₹8999",
    discountedPrice: "₹5999",
    benefits: [
      "Free ₹1500 Grocery Voucher",
      "₹2000 Off Applied",
      "12 Months of Meal Plans",
      "60+ Recipes Access",
      "Personalized Nutrition Consultation",
      "Free Dietitian Follow-ups",
      "3+ More Offers",
    ],
  },
  {
    duration: "06 Months Plan",
    originalPrice: "₹6999",
    discountedPrice: "₹4499",
    benefits: [
      "Free ₹1000 Grocery Voucher",
      "₹2000 Off Applied",
      "6 Months of Meal Plans",
      "60+ Recipes Access",
      "Personalized Nutrition Consultation",
      "Free Dietitian Follow-ups",
      "3+ More Offers",
    ],
  },
  {
    duration: "03 Months Plan",
    originalPrice: "₹4999",
    discountedPrice: "₹2999",
    benefits: [
      "Free ₹500 Grocery Voucher",
      "₹2000 Off Applied",
      "3 Months of Meal Plans",
      "60+ Recipes Access",
      "Personalized Nutrition Consultation",
      "Free Dietitian Follow-ups (within 90 days)",
      "2+ More Offers",
    ],
  },
];

const features = [
  "🌿 Fresh Ingredients Daily",
  "📝 Custom Plans for Your Goals",
  "👩‍⚕️ Expert Nutritionist Guidance",
  "🚚 Free Delivery to Your Door",
];

const Freshmealplans = () => {
  return (
    <div className="freshmealplan p-6">
      <h2 className="mb-2 text-center text-3xl font-bold text-green-700">
        Fresh Meal Plans
      </h2>
      <p className="mb-8 text-center text-gray-600">
        Transform Your Health Journey. Premium meal plans and personalized
        coaching to help you achieve your wellness goals.
      </p>

      <div className="mb-10 grid grid-cols-2 gap-4 text-center text-sm text-gray-600 md:grid-cols-4">
        {features.map((feature, index) => (
          <div key={index}>{feature}</div>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {plans.map((plan, index) => (
          <div
            key={index}
            className="rounded-lg border p-6 shadow transition hover:shadow-lg"
          >
            <h3 className="mb-2 text-xl font-semibold text-green-600">
              {plan.duration}
            </h3>
            <p className="text-gray-500 line-through">{plan.originalPrice}</p>
            <p className="mb-4 text-2xl font-bold text-green-700">
              {plan.discountedPrice}
            </p>
            <ul className="mb-4 space-y-2 text-sm text-gray-700">
              {plan.benefits.map((benefit, i) => (
                <li key={i}>✅ {benefit}</li>
              ))}
            </ul>
            <button className="w-full rounded bg-green-600 px-4 py-2 text-white hover:bg-green-700">
              SUBSCRIBE NOW
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Freshmealplans;
