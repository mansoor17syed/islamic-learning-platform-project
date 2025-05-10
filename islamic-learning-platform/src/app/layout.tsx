import type { Metadata } from "next";
import { Inter, Amiri } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });
const amiri = Amiri({ 
  weight: ['400', '700'],
  subsets: ['arabic'],
  variable: '--font-amiri',
});

export const metadata: Metadata = {
  title: "Islamic Learning Platform",
  description: "A comprehensive platform for learning about Islam, Quran, prayers, and Islamic practices",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${amiri.variable}`}>
        <Navigation />
        <main className="container mx-auto px-4 py-8 min-h-[80vh] bg-gradient-to-br from-green-50 via-white to-blue-50 text-slate-800">
          {children}
        </main>
        <footer className="bg-white border-t">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {/* About Section */}
              <div className="col-span-1 md:col-span-2">
                <div className="flex items-center gap-3 mb-4">
                  <div className="relative">
                    <div className="w-10 h-10 rounded-full bg-green-600 flex items-center justify-center text-white text-2xl font-bold">
                      <span className="font-[var(--font-amiri)]">ع</span>
                    </div>
                    <div className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-green-800 flex items-center justify-center text-white text-xs">
                      <span className="font-[var(--font-amiri)]">ل</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-green-800">Islamic Learning</h3>
                    <p className="text-sm text-green-600">Knowledge & Guidance</p>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">
                  A comprehensive platform dedicated to spreading authentic Islamic knowledge and helping Muslims learn about their faith.
                </p>
                <div className="text-sm text-gray-500">
                  © {new Date().getFullYear()} Islamic Learning. All rights reserved.
                </div>
              </div>

              {/* Quick Links */}
              <div>
                <h4 className="text-lg font-semibold text-green-800 mb-4">Quick Links</h4>
                <ul className="space-y-2">
                  <li>
                    <Link href="/quran" className="text-gray-600 hover:text-green-700 transition-colors">
                      Quran
                    </Link>
                  </li>
                  <li>
                    <Link href="/prayers" className="text-gray-600 hover:text-green-700 transition-colors">
                      Prayers
                    </Link>
                  </li>
                  <li>
                    <Link href="/duas" className="text-gray-600 hover:text-green-700 transition-colors">
                      Duas
                    </Link>
                  </li>
                  <li>
                    <Link href="/learn" className="text-gray-600 hover:text-green-700 transition-colors">
                      Learn
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Contact */}
              <div>
                <h4 className="text-lg font-semibold text-green-800 mb-4">Contact</h4>
                <ul className="space-y-2">
                  <li className="text-gray-600">
                    <a href="mailto:contact@islamiclearningplatform.com" className="hover:text-green-700 transition-colors">
                      contact@islamiclearningplatform.com
                    </a>
                  </li>
                  <li className="text-gray-600">
                    <a href="https://twitter.com/islamiclearning" target="_blank" rel="noopener noreferrer" className="hover:text-green-700 transition-colors">
                      Twitter
                    </a>
                  </li>
                  <li className="text-gray-600">
                    <a href="https://facebook.com/islamiclearning" target="_blank" rel="noopener noreferrer" className="hover:text-green-700 transition-colors">
                      Facebook
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Quote */}
            <div className="mt-8 pt-8 border-t border-gray-200">
              <div className="text-center">
                <p className="text-lg font-[var(--font-amiri)] text-green-800 mb-2">
                  &ldquo;الْحَمْدُ لِلَّهِ الَّذِي هَدَانَا لِهَٰذَا وَمَا كُنَّا لِنَهْتَدِيَ لَوْلَا أَنْ هَدَانَا اللَّهُ&rdquo;
                </p>
                <p className="text-gray-600 italic">
                  &ldquo;All praise is due to Allah, who guided us to this, and we would not have been guided if Allah had not guided us.&rdquo;
                </p>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
