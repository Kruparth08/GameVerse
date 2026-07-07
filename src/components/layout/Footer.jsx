import { Gamepad2, Mail } from "lucide-react";

import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaXTwitter,
} from "react-icons/fa6";


const footerLinks = {
  Platform: [
    "Explore Games",
    "Tournaments",
    "Communities",
    "Leaderboard",
  ],
  Company: [
    "About Us",
    "Careers",
    "Blog",
    "Contact",
  ],
  Resources: [
    "Help Center",
    "Privacy Policy",
    "Terms of Service",
    "FAQs",
  ],
};

const socialLinks = [
  FaFacebook,
  FaXTwitter,
  FaInstagram,
  FaYoutube,
];

const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-[#070B14] px-6 py-16">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3">
              <Gamepad2 className="text-cyan-400" size={34} />
              <span className="text-2xl font-bold">GameVerse</span>
            </div>

            <p className="mt-5 max-w-md text-gray-400">
              The ultimate platform for gamers to discover games,
              compete in tournaments, connect with creators,
              and build amazing communities.
            </p>

            <div className="mt-8 flex gap-4">
              {socialLinks.map((Icon, index) => (
                <button
                  key={index}
                  className="rounded-xl border border-white/10 bg-white/5 p-3 transition hover:border-cyan-400 hover:text-cyan-400"
                >
                  <Icon size={20} />
                </button>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="mb-5 text-lg font-semibold">
                {title}
              </h3>

              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <button className="text-gray-400 transition hover:text-cyan-400">
                      {link}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-sm text-gray-500 md:flex-row">
          <p>
            © 2026 GameVerse. All rights reserved.
          </p>

          <div className="flex items-center gap-2">
            <Mail size={16} />
            support@gameverse.com
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;