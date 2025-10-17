import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";

const MENU = [
  {
    id: 1,
    label: "Cheese Volcano BBQ Chicken",
    img: "/menuimg/menu.avif",
    price: 369,
    tags: ["Spicy", "Signature"],
    category: "Non-Veg GreeNox",
    desc: "Centre loaded with Molten Cheese & topped with Pepper BBQ Chicken.",
    isVeg: false,
  },
  {
    id: 2,
    label: "Cheese Volcano Chicken Delight",
    img: "/menuimg/menu2.avif",
    price: 369,
    tags: ["Popular"],
    category: "Non-Veg GreeNox",
    desc: "Molten Cheese & Golden Corn with Pepper BBQ Chicken.",
    isVeg: false,
  },
  {
    id: 3,
    label: "Cheese Volcano Double Chicken",
    img: "/menuimg/menu3.avif",
    price: 429,
    tags: ["New"],
    category: "Non-Veg GreeNox",
    desc: "Extra chicken for bigger appetite.",
    isVeg: false,
  },
  {
    id: 4,
    label: "Veggie Delight",
    img: "/menuimg/menu4.avif",
    price: 299,
    tags: ["Veg", "Healthy"],
    category: "Veg GreeNox",
    desc: "Loaded with fresh veggies and oregano.",
    isVeg: true,
  },
  {
    id: 5,
    label: "Crispy Chicken Burger",
    img: "/menuimg/menu5.avif",
    price: 199,
    tags: ["Burgers"],
    category: "Burgers",
    desc: "Crispy chicken patty with lettuce & mayo.",
    isVeg: false,
  },
  {
    id: 6,
    label: "Classic Fries",
    img: "/menuimg/menu6.avif",
    price: 99,
    tags: ["Sides"],
    category: "Fries & Sides",
    desc: "Golden crunchy fries.",
    isVeg: true,
  },
  {
    id: 7,
    label: "GreeNox Cappuccino",
    img: "/menuimg/menu7.avif",
    price: 129,
    tags: ["Beverages"],
    category: "GreeNox® Coffees",
    desc: "Rich espresso with frothed milk.",
    isVeg: true,
  },
  {
    id: 8,
    label: "McNuggets (6 pcs)",
    img: "/menuimg/menu8.avif",
    price: 159,
    tags: ["Shareable"],
    category: "McNuggets® & McCrispy™ Strips",
    desc: "Tender chicken nuggets with dip.",
    isVeg: false,
  },
];

const CATEGORIES = [
  "All",
  "Non-Veg GreeNox",
  "Veg GreeNox",
  "Burgers",
  "Fries & Sides",
  "GreeNox® Coffees",
  "McNuggets® & McCrispy™ Strips",
];

export default function AllMenuIteams() {
  const [activeCat, setActiveCat] = useState("All");
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    return MENU.filter((item) => {
      const matchCat = activeCat === "All" ? true : item.category === activeCat;
      const matchQuery =
        query.trim() === ""
          ? true
          : item.label.toLowerCase().includes(query.toLowerCase());
      return matchCat && matchQuery;
    });
  }, [activeCat, query]);

  return (
    <div className="mt-12 min-h-screen bg-gray-50 px-4 py-8">
      <div className="mx-auto mt-12 max-w-6xl">
        {/* Header */}
        <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <h1 className="text-2xl font-semibold text-gray-800">Full Menu</h1>

          <div className="flex items-center gap-3">
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search menu..."
              className="rounded-full border border-gray-200 px-4 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-green-200"
              type="search"
            />
            <Link
              to="/"
              className="rounded border border-gray-200 bg-white px-3 py-2 text-sm text-gray-700 hover:bg-gray-50"
            >
              Home
            </Link>
          </div>
        </div>

        {/* Category tabs (horizontal scroll) */}
        <div className="mb-6 overflow-x-auto">
          <div className="flex gap-4 whitespace-nowrap">
            {CATEGORIES.map((cat) => {
              const active = cat === activeCat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCat(cat)}
                  className={`relative rounded-full px-4 py-2 text-sm font-medium transition ${
                    active
                      ? "bg-white text-green-600 shadow"
                      : "bg-transparent text-gray-600 hover:text-green-600"
                  }`}
                >
                  {cat}
                  {active && (
                    <span className="absolute -bottom-2 left-1/2 h-1 w-10 -translate-x-1/2 rounded bg-green-600" />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((item) => (
            <div
              key={item.id}
              className="relative overflow-hidden rounded-xl bg-white shadow"
            >
              <img
                src={item.img}
                alt={item.label}
                className="h-56 w-full object-cover transition-transform duration-500 hover:scale-105"
              />

              {/* overlay gradient */}
              <div className="absolute inset-0 flex flex-col justify-end">
                <div className="bg-gradient-to-t from-black/75 via-black/30 to-transparent px-4 pb-4 pt-20 text-white">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h3 className="text-lg font-semibold">{item.label}</h3>
                      <p className="mt-1 line-clamp-2 text-xs text-gray-200">
                        {item.desc}
                      </p>

                      <div className="mt-3 flex flex-wrap gap-2">
                        {item.tags.map((t) => (
                          <span
                            key={t}
                            className="rounded-full bg-white/10 px-2 py-1 text-xs text-white"
                          >
                            {t}
                          </span>
                        ))}
                        <span
                          className={`ml-2 inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium ${
                            item.isVeg
                              ? "bg-green-200 text-green-800"
                              : "bg-red-200 text-red-800"
                          }`}
                        >
                          {item.isVeg ? "Veg" : "Non-Veg"}
                        </span>
                      </div>
                    </div>

                    <div className="flex flex-col items-end">
                      <div className="text-lg font-bold">₹{item.price}</div>
                      <Link
                        to={`/menu/${item.id}`}
                        className="mt-3 inline-flex items-center gap-2 rounded bg-pink-500 px-3 py-2 text-sm font-semibold text-white hover:bg-pink-600"
                      >
                        Add +
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty state */}
        {filtered.length === 0 && (
          <div className="mt-12 text-center text-gray-500">No items found.</div>
        )}

        {/* CTA at bottom */}
        <div className="mt-10 flex justify-center">
          <Link
            to="/subscription"
            className="rounded border border-gray-200 bg-white px-6 py-3 text-sm font-medium text-gray-700 shadow hover:bg-gray-50"
          >
            View Subscription Plans
          </Link>
        </div>
      </div>
    </div>
  );
}
