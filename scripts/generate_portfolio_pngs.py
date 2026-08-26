import os
from PIL import Image, ImageDraw

os.makedirs('public/images/portfolio', exist_ok=True)

projects = [
    {
        'filename': 'fintech-solution.png',
        'title': 'Fintech Financial Solution',
        'subtitle': 'Digital Banking & Loan Application Engine',
        'category': 'FINTECH & FINANCIAL TECH',
        'domain': 'fintechfinancialsolution.com',
        'accent': (245, 184, 0),
        'bg': (13, 17, 23)
    },
    {
        'filename': 'kadai2manai.png',
        'title': 'Kadai2Manai Property Hub',
        'subtitle': 'Commercial & Land Property Marketplace',
        'category': 'REAL ESTATE PORTAL',
        'domain': 'kadai2manai.com',
        'accent': (255, 122, 0),
        'bg': (24, 18, 12)
    },
    {
        'filename': 'clobas.png',
        'title': 'Clobas Campus ERP',
        'subtitle': 'Cloud-Based School & Campus Management System',
        'category': 'EDTECH & ENTERPRISE ERP',
        'domain': 'clobas.com',
        'accent': (0, 168, 232),
        'bg': (10, 25, 47)
    },
    {
        'filename': 'new-hope-hospital.png',
        'title': 'New Hope Infertility Hospital',
        'subtitle': 'Specialized Reproductive Healthcare Portal',
        'category': 'HOSPITAL SOFTWARE',
        'domain': 'newhopeinfertility.com',
        'accent': (142, 148, 242),
        'bg': (25, 24, 37)
    },
    {
        'filename': 'samson-associates.png',
        'title': 'Samson & Associates',
        'subtitle': 'Corporate Financial, Audit & Legal Advisory',
        'category': 'LEGAL & CONSULTING',
        'domain': 'samsonandassociates.in',
        'accent': (212, 175, 55),
        'bg': (20, 24, 36)
    },
    {
        'filename': 'care-of-humanity-trust.png',
        'title': 'Care of Humanity Trust',
        'subtitle': 'Non-Profit Foundation & Relief Engine',
        'category': 'COMMUNITY TRUST',
        'domain': 'careofhumanity.com',
        'accent': (42, 157, 143),
        'bg': (15, 30, 27)
    },
    {
        'filename': 'optimus-infinity.png',
        'title': 'Optimus Infinity',
        'subtitle': 'Enterprise IT & Digital Transformation Agency',
        'category': 'ENTERPRISE TECH',
        'domain': 'optimusinfinity.com',
        'accent': (99, 102, 241),
        'bg': (17, 24, 39)
    }
]

def create_png_banner(p):
    width, height = 1200, 800
    img = Image.new('RGBA', (width, height), color=(p['bg'][0], p['bg'][1], p['bg'][2], 255))
    draw = ImageDraw.Draw(img)

    # Grid background lines
    for x in range(0, width, 40):
        draw.line([(x, 0), (x, height)], fill=(255, 255, 255, 15), width=1)
    for y in range(0, height, 40):
        draw.line([(0, y), (width, y)], fill=(255, 255, 255, 15), width=1)

    # Software Window Frame
    wx1, wy1, wx2, wy2 = 80, 80, 1120, 720
    draw.rounded_rectangle([wx1, wy1, wx2, wy2], radius=24, fill=(14, 19, 31, 255), outline=(255, 255, 255, 35), width=2)

    # Browser Top Header
    draw.rounded_rectangle([wx1, wy1, wx2, wy1 + 56], radius=24, fill=(21, 28, 44, 255))
    draw.rectangle([wx1, wy1 + 30, wx2, wy1 + 56], fill=(21, 28, 44, 255))
    
    # Window dots
    draw.ellipse([wx1 + 36 - 6, wy1 + 28 - 6, wx1 + 36 + 6, wy1 + 28 + 6], fill=(255, 95, 86, 255))
    draw.ellipse([wx1 + 58 - 6, wy1 + 28 - 6, wx1 + 58 + 6, wy1 + 28 + 6], fill=(255, 189, 46, 255))
    draw.ellipse([wx1 + 80 - 6, wy1 + 28 - 6, wx1 + 80 + 6, wy1 + 28 + 6], fill=(39, 201, 63, 255))

    # URL Address Bar
    draw.rounded_rectangle([wx1 + 120, wy1 + 16, wx1 + 540, wy1 + 40], radius=12, fill=(9, 13, 22, 255))
    
    # Inner Canvas area
    draw.rounded_rectangle([wx1 + 32, wy1 + 88, wx2 - 32, wy2 - 32], radius=16, fill=(9, 13, 22, 255), outline=(255, 255, 255, 20), width=1)

    # Category Pill
    draw.rounded_rectangle([wx1 + 64, wy1 + 128, wx1 + 340, wy1 + 160], radius=16, fill=p['accent'])

    # Title & Subtitle Mockup Bars
    draw.rounded_rectangle([wx1 + 64, wy1 + 180, wx1 + 650, wy1 + 216], radius=8, fill=(255, 255, 255, 240))
    draw.rounded_rectangle([wx1 + 64, wy1 + 230, wx1 + 500, wy1 + 250], radius=6, fill=(255, 255, 255, 120))

    # Dashboard Cards Mockup
    card_y = wy1 + 300
    for i in range(3):
        cx = wx1 + 64 + (i * 304)
        draw.rounded_rectangle([cx, card_y, cx + 280, card_y + 160], radius=16, fill=(21, 28, 44, 255), outline=(255, 255, 255, 25), width=1)
        draw.rounded_rectangle([cx + 20, card_y + 20, cx + 100, card_y + 32], radius=6, fill=p['accent'])
        draw.rounded_rectangle([cx + 20, card_y + 44, cx + 200, card_y + 64], radius=6, fill=(255, 255, 255, 255))
        draw.rounded_rectangle([cx + 20, card_y + 76, cx + 240, card_y + 84], radius=4, fill=(48, 54, 61, 255))
        draw.rounded_rectangle([cx + 20, card_y + 92, cx + 160, card_y + 100], radius=4, fill=(48, 54, 61, 255))

    # Bottom Accent Bar
    draw.rectangle([0, height - 12, width, height], fill=p['accent'])

    target_path = os.path.join('public/images/portfolio', p['filename'])
    img.save(target_path, 'PNG')
    print(f'Generated PNG mockup: {p["filename"]}')

for proj in projects:
    create_png_banner(proj)

print('All 7 portfolio PNG banners generated successfully.')
