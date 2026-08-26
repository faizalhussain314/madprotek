import os

def create_svg(path, title, category, accent='#F5B800', bg='#080808'):
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
  
  <circle cx="900" cy="300" r="350" fill="{accent}" opacity="0.1" filter="blur(60px)" />
  <circle cx="200" cy="600" r="250" fill="{accent}" opacity="0.06" filter="blur(40px)" />
  
  <line x1="0" y1="760" x2="1200" y2="760" stroke="url(#accent)" stroke-width="8" />
  
  <g transform="translate(80, 520)">
    <rect x="0" y="0" width="180" height="34" rx="17" fill="{accent}" />
    <text x="90" y="22" font-family="Inter, sans-serif" font-size="12" font-weight="900" fill="#080808" text-anchor="middle" letter-spacing="2">{category.upper()}</text>
    <text x="0" y="90" font-family="Inter, sans-serif" font-size="44" font-weight="900" fill="#FFFFFF" letter-spacing="-1">{title}</text>
    <text x="0" y="130" font-family="Inter, sans-serif" font-size="18" font-weight="600" fill="#8A8A8A">MADPROTEK EXPERIENTIAL EVENTS 2026</text>
  </g>
</svg>'''
    with open(path, 'w') as f:
        f.write(svg)

# Marathon Assets
create_svg('public/images/events/marathon/hero.svg', 'Hosur Half Marathon 2026', 'City Marathon')
create_svg('public/images/events/marathon/start-line.svg', 'Starting Line & Flag Off', 'Marathon Gallery')
create_svg('public/images/events/marathon/runners.svg', 'Elite Runner Convoy', 'Marathon Gallery')
create_svg('public/images/events/marathon/crowd.svg', 'Cheering Spectator Zone', 'Marathon Gallery')
create_svg('public/images/events/marathon/finish.svg', 'Finisher Medal Ceremony', 'Marathon Gallery')

# Offroad Assets
create_svg('public/images/events/offroad/hero.svg', 'Western Ghats Challenge', 'Off-Road Jeep')
create_svg('public/images/events/offroad/jeep-convoy.svg', '4x4 Trail Expedition', 'Off-Road Gallery')
create_svg('public/images/events/offroad/terrain.svg', 'Mud & Mountain Crossing', 'Off-Road Gallery')
create_svg('public/images/events/offroad/participants.svg', 'Jeep Crew & Marshals', 'Off-Road Gallery')

# Adventure Assets
create_svg('public/images/events/adventure/hero.svg', 'Yelagiri Trail Run 2026', 'Outdoor Adventure')
create_svg('public/images/events/adventure/group.svg', 'Mountain Trek Group', 'Adventure Gallery')
create_svg('public/images/events/adventure/activity.svg', 'Summit Trail Activation', 'Adventure Gallery')

# Cricket Assets
create_svg('public/images/events/cricket/hero.svg', 'Corporate Cricket Clash', 'Sports Tournament')
create_svg('public/images/events/cricket/action.svg', 'Championship Match', 'Cricket Gallery')
print("Event visual assets generated cleanly.")
