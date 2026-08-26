import os

def create_sponsor_svg(path, title, subtitle, accent='#F5B800', bg='#080808'):
    svg = f'''<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="800" viewBox="0 0 1200 800">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#151515" />
      <stop offset="50%" stop-color="{bg}" />
      <stop offset="100%" stop-color="#000000" />
    </linearGradient>
    <linearGradient id="accent" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="{accent}" />
      <stop offset="100%" stop-color="#FFC928" />
    </linearGradient>
    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.05)" stroke-width="1" />
    </pattern>
  </defs>
  <rect width="1200" height="800" fill="url(#bg)" />
  <rect width="1200" height="800" fill="url(#grid)" />
  
  <circle cx="950" cy="250" r="350" fill="{accent}" opacity="0.12" filter="blur(60px)" />
  <circle cx="150" cy="650" r="250" fill="{accent}" opacity="0.06" filter="blur(40px)" />
  
  <line x1="0" y1="760" x2="1200" y2="760" stroke="url(#accent)" stroke-width="8" />
  
  <g transform="translate(80, 500)">
    <rect x="0" y="0" width="220" height="34" rx="17" fill="{accent}" />
    <text x="110" y="22" font-family="Inter, sans-serif" font-size="12" font-weight="900" fill="#080808" text-anchor="middle" letter-spacing="2">{subtitle.upper()}</text>
    <text x="0" y="90" font-family="Inter, sans-serif" font-size="44" font-weight="900" fill="#FFFFFF" letter-spacing="-1">{title}</text>
    <text x="0" y="130" font-family="Inter, sans-serif" font-size="18" font-weight="600" fill="#8A8A8A">MADPROTEK EVENT PHOTOGRAPHY SLOT</text>
  </g>
</svg>'''
    with open(path, 'w') as f:
        f.write(svg)

os.makedirs('public/images/sponsors', exist_ok=True)

# Generate Sponsor Image Slots
create_sponsor_svg('public/images/sponsors/sponsor-hero.svg', 'Put Your Brand In The Experience', 'SPONSOR HERO')
create_sponsor_svg('public/images/sponsors/story-activation.svg', 'More Than A Logo On A Banner', 'BRAND INTEGRATION')
create_sponsor_svg('public/images/sponsors/marathon-sponsor.svg', 'Marathon & Road Running', 'MARATHONS')
create_sponsor_svg('public/images/sponsors/offroad-sponsor.svg', 'Off-Road Jeep Expeditions', 'OFF-ROAD ADVENTURES')
create_sponsor_svg('public/images/sponsors/outdoor-sponsor.svg', 'Outdoor Community Challenges', 'OUTDOOR EXPERIENCES')
create_sponsor_svg('public/images/sponsors/brand-activation.svg', 'Live Interactive Brand Zone', 'BRAND ACTIVATION')

create_sponsor_svg('public/images/sponsors/event-gallery-01.svg', 'Marathon Starting Arch', 'GALLERY MOMENT 01')
create_sponsor_svg('public/images/sponsors/event-gallery-02.svg', 'Off-Road Convoy Trail', 'GALLERY MOMENT 02')
create_sponsor_svg('public/images/sponsors/event-gallery-03.svg', 'Spectator Cheering Zone', 'GALLERY MOMENT 03')
create_sponsor_svg('public/images/sponsors/event-gallery-04.svg', 'Sampling Booth Activation', 'GALLERY MOMENT 04')
create_sponsor_svg('public/images/sponsors/event-gallery-05.svg', 'Finisher Trophy Celebration', 'GALLERY MOMENT 05')

print('Sponsor SVG image slots generated cleanly.')
