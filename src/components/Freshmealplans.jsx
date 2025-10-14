import React from "react";

const plans = [
  {
    duration: "12 MONTHS",
    originalPrice: "₹8999",
    discountedPrice: "₹5999",
    perMonth: "499 per month*",
    benefits: [
      { icon: "img/shopping_cart.svg", text: "Free ₹1500 Grocery Voucher" },
      { icon: "img/percent.svg", text: "Additional ₹2000 off applied" },
      { icon: "img/calendar.svg", text: "60 days of meal plan pause" },
      { icon: "img/chef_hat.svg", text: "Access 60 recipes in other cuisines" },
      { icon: "img/clinical_notes.svg", text: "5 nutritionist consultations" },
      {
        icon: "img/lefttoright.svg",
        text: "Free meal plan transfer within 90 days",
      },
      { icon: "img/star.svg", text: "3 more Offers" },
    ],
  },
  {
    duration: "06 MONTHS",
    originalPrice: "₹6999",
    discountedPrice: "₹4499",
    perMonth: "749 per month*",
    benefits: [
      { icon: "img/shopping_cart.svg", text: "Free ₹1500 Grocery Voucher" },
      { icon: "img/percent.svg", text: "Additional ₹2000 off applied" },
      { icon: "img/calendar.svg", text: "60 days of meal plan pause" },
      { icon: "img/chef_hat.svg", text: "Access 60 recipes in other cuisines" },
      { icon: "img/clinical_notes.svg", text: "5 nutritionist consultations" },
      {
        icon: "img/lefttoright.svg",
        text: "Free meal plan transfer within 90 days",
      },
      { icon: "img/star.svg", text: "3 more Offers" },
    ],
  },
  {
    duration: "03 MONTHS",
    originalPrice: "₹3999",
    discountedPrice: "₹2999",
    perMonth: "999 per month*",
    benefits: [
      { icon: "img/shopping_cart.svg", text: "Free ₹1500 Grocery Voucher" },
      { icon: "img/percent.svg", text: "Additional ₹2000 off applied" },
      { icon: "img/calendar.svg", text: "60 days of meal plan pause" },
      { icon: "img/chef_hat.svg", text: "Access 60 recipes in other cuisines" },
      { icon: "img/clinical_notes.svg", text: "5 nutritionist consultations" },
      {
        icon: "img/lefttoright.svg",
        text: "Free meal plan transfer within 90 days",
      },
      { icon: "img/star.svg", text: "3 more Offers" },
    ],
  },
];

const features = [
  {
    icon: (
      <img
        src="/img/grocery.svg"
        className="mx-auto mb-2 h-8 w-8"
        alt="Fresh Ingredients"
      />
    ),
    title: "Fresh Ingredients",
    desc: "sourced daily",
  },
  {
    icon: (
      <img
        src="/img/group_add.svg"
        className="mx-auto mb-2 h-8 w-8"
        alt="Custom Plans"
      />
    ),
    title: "Custom Plans",
    desc: "tailored for you",
  },
  {
    icon: (
      <img
        src="/img/pediatrics.svg"
        className="mx-auto mb-2 h-8 w-8"
        alt="Nutritionist"
      />
    ),
    title: "Nutritionist",
    desc: "expert guidance",
  },
  {
    icon: (
      <img
        src="/img/local_shipping.svg"
        className="mx-auto mb-2 h-8 w-8"
        alt="Free Delivery"
      />
    ),
    title: "Free Delivery",
    desc: "to your door",
  },
];

const Freshmealplans = () => {
  return (
    <div className="freshmealplan bg-white px-2 py-12">
      <h2 className="mb-2 text-center text-4xl font-bold text-green-700">
        Fresh Meal Plans
      </h2>
      <p className="mx-auto mb-8 max-w-2xl text-center text-gray-600">
        Transform Your Health Journey. Premium meal plans and personalized
        coaching to help you achieve your wellness goals.
      </p>

      {/* Features */}
      <div className="mx-auto mb-10 mt-10 grid max-w-4xl grid-cols-2 gap-4 text-center text-sm text-gray-600 md:grid-cols-4">
        {features.map((feature, index) => (
          <div className="grid gap-2" key={index}>
            {feature.icon}
            <div className="font-semibold text-green-700">{feature.title}</div>
            <div className="text-xs text-gray-500">{feature.desc}</div>
          </div>
        ))}
      </div>

      {/* Plans */}
      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3">
        {plans.map((plan, index) => (
          <div
            key={index}
            className="flex flex-col rounded-lg bg-gradient-to-b from-green-500 to-green-600 p-6 text-white shadow transition hover:shadow-lg"
          >
            <div className="flex justify-between">
              <h1 className="MONTHS mb-2 text-center text-xl font-semibold uppercase tracking-wider">
                {plan.duration}
              </h1>
              <div className="amount mb-2">
                <span className="text-gray-200 line-through">
                  {plan.originalPrice}
                </span>
                <span className="text-3xl font-bold">
                  {plan.discountedPrice}
                </span>
                <span className="mb-4 text-xs text-gray-200">
                  {plan.perMonth}
                </span>
              </div>
            </div>

            <ul className="mb-4 space-y-2 text-sm text-white">
              {plan.benefits.map((benefit, i) => (
                <li key={i} className="flex items-center gap-2 py-1">
                  {benefit.icon.endsWith(".svg") ||
                  benefit.icon.endsWith(".png") ? (
                    <img src={`/${benefit.icon}`} alt="" className="h-5 w-5" />
                  ) : (
                    <span className="text-lg">{benefit.icon}</span>
                  )}
                  {benefit.text}
                </li>
              ))}
            </ul>
            <button className="mt-2 mt-auto w-full rounded bg-orange-400 px-4 py-4 text-white transition hover:bg-orange-500">
              SUBSCRIBE NOW
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Freshmealplans;
