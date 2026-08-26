import os

def create_software_banner_svg(path, title, subtitle, category, accent='#F5B800', bg='#090D16'):
    svg = f'''<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="800" viewBox="0 0 1200 800">
  <defs>
    <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#080C14" />
      <stop offset="50%" stop-color="{bg}" />
      <stop offset="100%" stop-color="#020408" />
    </linearGradient>
    <linearGradient id="accentGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="{accent}" />
      <stop offset="100%" stop-color="#FFD166" />
    </linearGradient>
    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.04)" stroke-width="1" />
    </pattern>
  </defs>

  <!-- Background -->
  <rect width="1200" height="800" fill="url(#bgGrad)" />
  <rect width="1200" height="800" fill="url(#grid)" />

  <!-- Ambient Glow -->
  <circle cx="1000" cy="200" r="350" fill="{accent}" opacity="0.15" filter="blur(60px)" />
  <circle cx="200" cy="700" r="300" fill="{accent}" opacity="0.08" filter="blur(50px)" />

  <!-- Main Software Window Frame -->
  <g transform="translate(80, 80)">
    <rect x="0" y="0" width="1040" height="640" rx="24" fill="#0E131F" stroke="rgba(255,255,255,0.12)" stroke-width="2" />
    
    <!-- Browser Top Bar -->
    <rect x="0" y="0" width="1040" height="56" rx="24" fill="#151C2C" />
    <circle cx="36" cy="28" r="7" fill="#FF5F56" />
    <circle cx="58" cy="28" r="7" fill="#FFBD2E" />
    <circle cx="80" cy="28" r="7" fill="#27C93F" />

    <rect x="120" y="16" width="420" height="24" rx="12" fill="#090D16" opacity="0.8" />
    <text x="140" y="32" font-family="Inter, sans-serif" font-size="11" font-weight="600" fill="#6E7681">https://{title.lower().replace(' ', '').replace('.', '')}.madprotek.app</text>

    <!-- Inner UI Canvas -->
    <rect x="32" y="88" width="976" height="520" rx="16" fill="#090D16" stroke="rgba(255,255,255,0.06)" stroke-width="1" />

    <!-- Category Pill -->
    <g transform="translate(64, 128)">
      <rect x="0" y="0" width="240" height="32" rx="16" fill="{accent}" />
      <text x="120" y="21" font-family="Inter, sans-serif" font-size="11" font-weight="900" fill="#080808" text-anchor="middle" letter-spacing="2">{category.upper()}</text>
    </g>

    <!-- Project Title Banner Text -->
    <text x="64" y="220" font-family="Inter, sans-serif" font-size="44" font-weight="900" fill="#FFFFFF" letter-spacing="-1">{title}</text>
    <text x="64" y="260" font-family="Inter, sans-serif" font-size="18" font-weight="600" fill="#8B949E">{subtitle}</text>

    <!-- Dashboard Widget Cards Mockup -->
    <g transform="translate(64, 300)">
      <rect x="0" y="0" width="280" height="140" rx="16" fill="#151C2C" stroke="rgba(255,255,255,0.08)" stroke-width="1" />
      <rect x="20" y="20" width="80" height="12" rx="6" fill="{accent}" opacity="0.8" />
      <rect x="20" y="44" width="180" height="20" rx="6" fill="#FFFFFF" />
      <rect x="20" y="76" width="240" height="8" rx="4" fill="#30363D" />
      <rect x="20" y="92" width="160" height="8" rx="4" fill="#30363D" />

      <rect x="304" y="0" width="280" height="140" rx="16" fill="#151C2C" stroke="rgba(255,255,255,0.08)" stroke-width="1" />
      <rect x="324" y="20" width="80" height="12" rx="6" fill="#27C93F" opacity="0.8" />
      <rect x="324" y="44" width="180" height="20" rx="6" fill="#FFFFFF" />
      <rect x="324" y="76" width="240" height="8" rx="4" fill="#30363D" />
      <rect x="324" y="92" width="160" height="8" rx="4" fill="#30363D" />

      <rect x="608" y="0" width="280" height="140" rx="16" fill="#151C2C" stroke="rgba(255,255,255,0.08)" stroke-width="1" />
      <rect x="628" y="20" width="80" height="12" rx="6" fill="{accent}" opacity="0.8" />
      <rect x="628" y="44" width="180" height="20" rx="6" fill="#FFFFFF" />
      <rect x="628" y="76" width="240" height="8" rx="4" fill="#30363D" />
      <rect x="628" y="92" width="160" height="8" rx="4" fill="#30363D" />
    </g>
  </g>

  <!-- Bottom Brand Accent Line -->
  <line x1="0" y1="792" x2="1200" y2="792" stroke="url(#accentGrad)" stroke-width="8" />
</svg>'''
    with open(path, 'w') as f:
        f.write(svg)

os.makedirs('public/images/portfolio', exist_ok=True)

projects = [
    { 'file': 'fintech-solution.jpg', 'title': 'Fintech Solution', 'subtitle': 'Digital Banking & Transaction Processing Platform', 'cat': 'Fintech Application', 'accent': '#F5B800' },
    { 'file': 'sreenivasa-hospital.jpg', 'title': 'Sreenivasa Speciality Hospital', 'subtitle': 'Multi-Speciality OPD & Patient Management System', 'cat': 'Healthcare Software', 'accent': '#00A896' },
    { 'file': 'dr-dharani-skin-clinic.jpg', 'title': 'Dr.Dharani Skin Clinic', 'subtitle': 'Dermatology Care & Appointment Booking Platform', 'cat': 'Medical Web App', 'accent': '#E63946' },
    { 'file': 'bright-financial.jpg', 'title': 'Bright Financial Solution', 'subtitle': 'Corporate Financial Advisory & Loan Portal', 'cat': 'Financial Tech', 'accent': '#FFB703' },
    { 'file': 'care-of-humanity-trust.jpg', 'title': 'Care of Humanity Trust', 'subtitle': 'Non-Profit Donation Engine & Social Relief Platform', 'cat': 'Community Portal', 'accent': '#2A9D8F' },
    { 'file': 'new-hope-hospital.jpg', 'title': 'New Hope Infertility Hospital', 'subtitle': 'Reproductive Healthcare & Confidential Patient Portal', 'cat': 'Hospital Software', 'accent': '#8E94F2' }
]

for p in projects:
    # Generate SVG Banner
    svg_path = os.path.join('public/images/portfolio', p['file'].replace('.jpg', '.svg'))
    create_software_banner_svg(svg_path, p['title'], p['subtitle'], p['cat'], p['accent'])

print('All 6 portfolio software banner SVG mockups generated successfully.')
