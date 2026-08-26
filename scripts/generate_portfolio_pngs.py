import os
from PIL import Image, ImageDraw, ImageFont

os.makedirs('public/images/portfolio', exist_ok=True)

projects = [
    {
        'filename': 'fintech-solution.png',
        'title': 'Fintech Solution Platform',
        'subtitle': 'Digital Banking & Transaction Processing Engine',
        'category': 'FINTECH APPLICATION',
        'domain': 'https://fintech.madprotek.app',
        'accent': (245, 184, 0),
        'bg': (13, 17, 23)
    },
    {
        'filename': 'sreenivasa-hospital.png',
        'title': 'Sreenivasa Speciality Hospital',
        'subtitle': 'Multi-Speciality OPD & Patient Management System',
        'category': 'HEALTHCARE SOFTWARE',
        'domain': 'https://sreenivasa.madprotek.app',
        'accent': (0, 168, 150),
        'bg': (10, 25, 47)
    },
    {
        'filename': 'dr-dharani-skin-clinic.png',
        'title': 'Dr.Dharani Skin Clinic',
        'subtitle': 'Dermatology Care & Appointment Booking App',
        'category': 'MEDICAL WEB APP',
        'domain': 'https://drdharani.madprotek.app',
        'accent': (230, 57, 70),
        'bg': (31, 18, 22)
    },
    {
        'filename': 'bright-financial.png',
        'title': 'Bright Financial Solution',
        'subtitle': 'Corporate Financial Advisory & Loan Portal',
        'category': 'FINANCIAL TECH',
        'domain': 'https://brightfinancial.madprotek.app',
        'accent': (255, 183, 3),
        'bg': (20, 24, 36)
    },
    {
        'filename': 'care-of-humanity-trust.png',
        'title': 'Care of Humanity Trust',
        'subtitle': 'Non-Profit Donation Engine & Social Relief Platform',
        'category': 'COMMUNITY PORTAL',
        'domain': 'https://carehumanity.madprotek.app',
        'accent': (42, 157, 143),
        'bg': (15, 30, 27)
    },
    {
        'filename': 'new-hope-hospital.png',
        'title': 'New Hope Infertility Hospital',
        'subtitle': 'Reproductive Healthcare & Patient Portal',
        'category': 'HOSPITAL SOFTWARE',
        'domain': 'https://newhope.madprotek.app',
        'accent': (142, 148, 242),
        'bg': (25, 24, 37)
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
    
    # Red, yellow, green window dots
    draw.ellipse([wx1 + 36 - 6, wy1 + 28 - 6, wx1 + 36 + 6, wy1 + 28 + 6], fill=(255, 95, 86, 255))
    draw.ellipse([wx1 + 58 - 6, wy1 + 28 - 6, wx1 + 58 + 6, wy1 + 28 + 6], fill=(255, 189, 46, 255))
    draw.ellipse([wx1 + 80 - 6, wy1 + 28 - 6, wx1 + 80 + 6, wy1 + 28 + 6], fill=(39, 201, 63, 255))

    # URL Address Bar
    draw.rounded_rectangle([wx1 + 120, wy1 + 16, wx1 + 500, wy1 + 40], radius=12, fill=(9, 13, 22, 255))
    
    # Inner Canvas area
    draw.rounded_rectangle([wx1 + 32, wy1 + 88, wx2 - 32, wy2 - 32], radius=16, fill=(9, 13, 22, 255), outline=(255, 255, 255, 20), width=1)

    # Category Pill
    draw.rounded_rectangle([wx1 + 64, wy1 + 128, wx1 + 300, wy1 + 160], radius=16, fill=p['accent'])

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

    # Save PNG
    target_path = os.path.join('public/images/portfolio', p['filename'])
    img.save(target_path, 'PNG')
    print(f'Generated PNG software mockup: {p["filename"]}')

for proj in projects:
    create_png_banner(proj)

print('All 6 portfolio PNG banners generated successfully.')
