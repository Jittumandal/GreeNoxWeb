import React from "react";
import { Link } from "react-router-dom";

const latestStories = [
  {
    title: "Web Stories – Healthy Indian Snacks For Diabetics",
    img: "/blog/story1.jpg",
    author: "By GreeNox Diet",
  },
  {
    title: "Web Stories – Side Effects Of Overeating Dry Fruits",
    img: "/blog/story2.jpg",
    author: "By GreeNox Diet",
  },
  {
    title:
      "Web Stories – Struggling To Lose Weight with PCOS? Here’s Effective Nutrition & Diet Tips",
    img: "/blog/story3.jpg",
    author: "By GreeNox Diet",
  },
];

const exploreTags = [
  { label: "Anabolic", img: "/blog/tag1.png" },
  { label: "Cholesterol", img: "/blog/tag2.png" },
  { label: "Diabetes", img: "/blog/tag3.png" },
  { label: "Diet", img: "/blog/tag4.png" },
  { label: "Featured", img: "/blog/tag5.png" },
  { label: "Fight Corona", img: "/blog/tag6.png" },
];

const topReads = [
  {
    title: "Height Weight Chart – Ideal Weight for Men and Women",
    desc: "Good health is a prerequisite for happiness. While for adults, a vital for children and quality of life, for children, is essential for proper growth, both physically and mentally.",
    img: "/blog/top1.jpg",
    tag: "Weight Loss",
    author: "Dr A Bhowal",
  },
  {
    title: "The Ultimate 7-Day Meal Plan for Intermittent Fasting",
    desc: "Intermittent fasting has gained significant prominence as a powerful method for weight loss and overall health improvement.",
    img: "/blog/top2.jpg",
    tag: "Diet Plans",
    author: "Riya Malampy",
  },
  {
    title: "Introduction to Smart Scale",
    desc: "We live in a world that evaluates efficiency, efficacy, and accessibility. Yet a lot of this we somehow forget that health is the greatest virtue.",
    img: "/blog/top3.jpg",
    tag: "Weight Loss",
    author: "By Neha",
  },
];

const recentPosts = [
  {
    title: "Mosambi Juice for Weight Loss? Try it Today!",
    img: "/blog/recent1.jpg",
    author: "By GreeNox Diet",
  },
  {
    title: "Is Poha Good For Weight Loss? Let’s Find out.",
    img: "/blog/recent2.jpg",
    author: "By Rishi Sharma",
  },
  {
    title: "How GreeNox helped a Former National-level Power Lifter Transform",
    img: "/blog/recent3.jpg",
    author: "By GreeNox Transformation",
  },
  {
    title: "How Compound Movements Can Help You Bulk or Gain Muscle",
    img: "/blog/recent4.jpg",
    author: "By Savansana “Shiva” Hantare",
  },
  {
    title: "Why you need to begin your day with a high protein breakfast!",
    img: "/blog/recent5.jpg",
    author: "By GreeNox Diet",
  },
  {
    title: "Cardio Routines: How brisk walking can help lower your body fat",
    img: "/blog/recent6.jpg",
    author: "By GreeNox Diet",
  },
  {
    title: "World Heart Day – 8 Heart Healthy Snacks that You Can Munch On!",
    img: "/blog/recent7.jpg",
    author: "By Riya Malampy",
  },
  {
    title: "World Heart Day – Diet Tips for a Healthy Heart",
    img: "/blog/recent8.jpg",
    author: "By Nandita Thombre",
  },
];

export default function Blog() {
  return (
    <div className="min-h-screen bg-[#f7f7f7]">
      {/* Hero Banner */}
      <section className="relative flex flex-col items-center justify-between bg-black px-0 py-0 text-white md:flex-row">
        <div className="flex w-full flex-col justify-center px-8 md:w-1/2">
          <h1 className="mb-2 text-3xl font-bold">Talk to our Experts Today</h1>
          <p className="mb-6 text-lg">
            Let GreeNox coaches and RDs motivate you with strategies that drive
            results.
          </p>
          <Link
            to="/chat"
            className="w-fit rounded bg-white px-6 py-2 font-semibold text-black shadow hover:bg-gray-100"
          >
            Chat with us
          </Link>
        </div>
        <div className="mt-8 flex w-full items-center justify-center md:mt-0 md:w-1/2">
          <img
            src="/blog/Homepage.jpg"
            alt="Experts"
            className="h-[600px] w-full object-cover shadow"
          />
        </div>
      </section>

      {/* Search Bar */}
      <div className="mx-auto max-w-5xl px-4 py-6">
        <input
          type="search"
          placeholder="Search..."
          className="w-full rounded-lg border border-gray-300 px-4 py-3 text-base shadow focus:outline-none focus:ring-2 focus:ring-green-200"
        />
      </div>

      {/* Latest Stories */}
      <section className="mx-auto max-w-5xl px-4 py-6">
        <h2 className="mb-4 text-xl font-semibold">Latest Stories</h2>
        <div className="flex gap-6 overflow-x-auto pb-2">
          {latestStories.map((story, idx) => (
            <div
              key={idx}
              className="min-w-[220px] max-w-xs rounded-lg bg-white shadow transition hover:shadow-lg"
            >
              <img
                src={story.img}
                alt={story.title}
                className="h-40 w-full rounded-t-lg object-cover"
              />
              <div className="p-4">
                <div className="mb-2 text-sm font-semibold text-gray-800">
                  {story.title}
                </div>
                <div className="text-xs text-gray-500">{story.author}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Explore Tags */}
      <section className="mx-auto max-w-5xl px-4 py-6">
        <h2 className="mb-4 text-xl font-semibold">Explore</h2>
        <div className="flex gap-6 overflow-x-auto pb-2">
          {exploreTags.map((tag, idx) => (
            <div
              key={idx}
              className="flex min-w-[100px] max-w-[120px] flex-col items-center rounded-lg bg-white p-3 shadow"
            >
              <img
                src={tag.img}
                alt={tag.label}
                className="mb-2 h-12 w-12 object-contain"
              />
              <span className="text-xs text-gray-700">{tag.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Top Reads */}
      <section className="mx-auto max-w-5xl px-4 py-6">
        <h2 className="mb-4 text-xl font-semibold">Top Reads</h2>
        <div className="flex flex-col gap-6">
          {topReads.map((read, idx) => (
            <div
              key={idx}
              className="flex flex-col gap-4 rounded-lg bg-white p-4 shadow md:flex-row"
            >
              <img
                src={read.img}
                alt={read.title}
                className="h-24 w-24 rounded object-cover"
              />
              <div className="flex-1">
                <div className="text-sm font-bold text-gray-800">
                  {read.title}
                </div>
                <div className="mb-2 text-xs text-gray-500">{read.tag}</div>
                <div className="mb-2 text-xs text-gray-700">{read.desc}</div>
                <div className="text-xs text-gray-400">{read.author}</div>
              </div>
            </div>
          ))}
        </div>
        {/* Pagination */}
        <div className="mt-6 flex justify-center gap-2">
          {[1, 2, 3].map((p) => (
            <button
              key={p}
              className="h-8 w-8 rounded bg-gray-200 font-bold text-gray-700 hover:bg-green-600 hover:text-white"
            >
              {p}
            </button>
          ))}
        </div>
      </section>

      {/* Wellness Journey Banner */}
      <section className="mx-auto mb-8 flex max-w-5xl flex-col items-center rounded-lg bg-white px-4 py-8 shadow md:flex-row">
        <div className="flex-1">
          <h2 className="mb-2 text-xl font-semibold">
            Start your wellness journey today!
          </h2>
          <p className="mb-4 text-gray-700">
            Chat with us on WhatsApp for customized diet plans and valuable
            health insights.
          </p>
          <Link
            to="/chat"
            className="rounded bg-green-600 px-6 py-2 font-semibold text-white shadow hover:bg-green-700"
          >
            Chat With Our Expert
          </Link>
        </div>
        <div className="flex flex-1 justify-center">
          <img
            src="/blog/wellness-banner.jpg"
            alt="Wellness"
            className="h-32 w-32 rounded-lg object-cover"
          />
        </div>
      </section>

      {/* Recent Posts */}
      <section className="mx-auto max-w-5xl px-4 py-6">
        <h2 className="mb-4 text-xl font-semibold">Recent Posts</h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4">
          {recentPosts.map((post, idx) => (
            <div
              key={idx}
              className="rounded-lg bg-white shadow transition hover:shadow-lg"
            >
              <img
                src={post.img}
                alt={post.title}
                className="h-32 w-full rounded-t-lg object-cover"
              />
              <div className="p-4">
                <div className="mb-2 text-sm font-semibold text-gray-800">
                  {post.title}
                </div>
                <div className="text-xs text-gray-500">{post.author}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Editorial Process & Footer */}
      <section className="mx-auto flex max-w-5xl flex-col items-center gap-8 px-4 py-8 md:flex-row">
        <img
          src="/blog/editorial.jpg"
          alt="Editorial"
          className="h-32 w-32 rounded-lg object-cover"
        />
        <div className="flex-1">
          <h3 className="mb-2 text-lg font-bold">
            Our Editorial Process for Reliable Content
          </h3>
          <ul className="list-disc pl-5 text-sm text-gray-700">
            <li>
              We provide healthy living among our readers through our content,
              medically backed and methodically written.
            </li>
            <li>
              The editorial team filters out the fluff in all the articles
              keeping explicit health and transparency at their core.
            </li>
            <li>
              The articles go to the round of trusted and experienced experts to
              be scrutinized and updated with the most congruent information.
            </li>
            <li>
              Another evaluative round of review is done before the content is
              finally published for you.
            </li>
          </ul>
        </div>
      </section>

      <footer className="mt-8 bg-gray-100 py-8">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-8 px-4 md:flex-row">
          <div>
            <img
              src="/blog/footer-logo.png"
              alt="GreeNox"
              className="mb-2 h-8"
            />
            <div className="text-xs text-gray-700">© 2025 GreeNox</div>
          </div>
          <div className="flex flex-1 flex-col gap-6 text-xs text-gray-700 md:flex-row">
            <div>
              <div className="mb-1">Download Our App</div>
              <div className="flex gap-2">
                <button className="rounded bg-gray-200 px-3 py-1">
                  Download for iOS
                </button>
                <button className="rounded bg-gray-200 px-3 py-1">
                  Download for Android
                </button>
              </div>
            </div>
            <div>
              <div className="mb-1">Contact</div>
              <div>support@greenox.com</div>
            </div>
            <div>
              <div className="mb-1">Address</div>
              <div>GreeNox HQ, Mumbai, India</div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
