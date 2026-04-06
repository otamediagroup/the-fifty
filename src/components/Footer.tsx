import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-navy border-t border-gray-800 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Branding section */}
          <div>
            <h3 className="text-xl font-bold text-gold mb-2">The Fifty</h3>
            <p className="text-gray-400 text-sm">
              Capital · Policy · Culture
            </p>
            <p className="text-gray-500 text-xs mt-2">
              Ranking the leaders shaping UK growth
            </p>
          </div>

          {/* Links section */}
          <div>
            <h4 className="text-sm font-semibold text-gold mb-4">OTA Media</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://www.otamediagroup.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-gold transition-colors text-sm"
                >
                  OTA Media Group
                </a>
              </li>
              <li>
                <a
                  href="https://www.otamediagroup.com/off-the-agenda"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-gold transition-colors text-sm"
                >
                  Off The Agenda
                </a>
              </li>
              <li>
                <a
                  href="https://index.otamediagroup.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-gold transition-colors text-sm"
                >
                  Leadership Index
                </a>
              </li>
            </ul>
          </div>

          {/* Privacy section */}
          <div>
            <h4 className="text-sm font-semibold text-gold mb-4">Privacy</h4>
            <p className="text-gray-400 text-xs leading-relaxed">
              We process your personal data to deliver The Fifty rankings and improve our services. Your data is processed in accordance with GDPR and our Privacy Policy.
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 pt-8">
          <p className="text-gray-500 text-xs text-center">
            © 2026 OTA Media Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
