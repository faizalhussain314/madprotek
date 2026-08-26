import urllib.request
import os
from PIL import Image, ImageDraw, ImageFilter, ImageEnhance

os.makedirs('public/images/portfolio', exist_ok=True)

# 6 Real client projects with high-quality photography backgrounds
projects = [
    {
        'filename': 'fintech-solution.png',
        'title': 'FINTECH SOLUTION',
        'tagline': 'Digital Banking & Payments',
        'badge': 'ENTERPRISE FINTECH APP',
        'photo_url': 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop',
        'accent': (245, 184, 0), # Yellow accent
    },
    {
        'filename': 'sreenivasa-hospital.png',
        'title': 'SREENIVASA SPECIALITY HOSPITAL',
        'tagline': 'OPD Booking & Healthcare Management',
        'badge': 'SPECIALITY HOSPITAL PORTAL',
        'photo_url': 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=1200&auto=format&fit=crop',
        'accent': (0, 180, 216), # Teal blue accent
    },
    {
        'filename': 'dr-dharani-skin-clinic.png',
        'title': 'DR. DHARANI SKIN CLINIC',
        'tagline': 'Dermatology & Skin Care Booking',
        'badge': 'CLINIC BRANDING & WEB APP',
        'photo_url': 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1200&auto=format&fit=crop',
        'accent': (230, 57, 70), # Rose accent
    },
    {
        'filename': 'bright-financial.png',
        'title': 'BRIGHT FINANCIAL SOLUTION',
        'tagline': 'Financial Advisory & Loan Engine',
        'badge': 'CORPORATE FINANCIAL PORTAL',
        'photo_url': 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop',
        'accent': (255, 183, 3), # Amber accent
    },
    {
        'filename': 'care-of-humanity-trust.png',
        'title': 'CARE OF HUMANITY TRUST',
        'tagline': 'Non-Profit Foundation & Donation Portal',
        'badge': 'TRUST & SOCIAL IMPACT',
        'photo_url': 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=1200&auto=format&fit=crop',
        'accent': (42, 157, 143), # Emerald accent
    },
    {
        'filename': 'new-hope-hospital.png',
        'title': 'NEW HOPE INFERTILITY HOSPITAL',
        'tagline': 'Reproductive Healthcare & Patient Care',
        'badge': 'INFERTILITY HOSPITAL PLATFORM',
        'photo_url': 'https://images.unsplash.com/photo-1538108149393-fbbd81895907?q=80&w=1200&auto=format&fit=crop',
        'accent': (123, 44, 191), # Purple accent
    }
]

headers = {'User-Agent': 'Mozilla/5.0'}

def create_mini_ad_banner(p):
    filename = p['filename']
    target_path = os.path.join('public/images/portfolio', filename)
    
    # 1. Download real photo background
    temp_photo_path = target_path + '.tmp.jpg'
    req = urllib.request.Request(p['photo_url'], headers=headers)
    try:
        with urllib.request.urlopen(req) as resp, open(temp_photo_path, 'wb') as f:
            f.write(resp.read())
        bg_img = Image.open(temp_photo_path).convert('RGBA')
    except Exception as e:
        print(f'Failed to download background photo for {filename}: {e}')
        # Fallback dark background
        bg_img = Image.new('RGBA', (1200, 800), color=(15, 20, 30, 255))
    finally:
        if os.path.exists(temp_photo_path):
            os.remove(temp_photo_path)

    # Resize background to 1200x800
    bg_img = bg_img.resize((1200, 800), Image.Resampling.LANCZOS)
    
    # Darken background photo for contrast
    enhancer = ImageEnhance.Brightness(bg_img)
    bg_img = enhancer.enhance(0.45)

    # 2. Composite UI Ad Elements
    draw = ImageDraw.Draw(bg_img)

    # Draw dark Vignette gradient / overlay
    overlay = Image.new('RGBA', (1200, 800), (0, 0, 0, 0))
    ov_draw = ImageDraw.Draw(overlay)
    ov_draw.rectangle([0, 0, 1200, 800], fill=(8, 12, 20, 140))
    ov_draw.rectangle([0, 480, 1200, 800], fill=(8, 12, 20, 220))
    bg_img = Image.alpha_composite(bg_img, overlay)
    draw = ImageDraw.Draw(bg_img)

    # Draw Software Window Frame Mockup
    wx1, wy1, wx2, wy2 = 80, 80, 1120, 720
    draw.rounded_rectangle([wx1, wy1, wx2, wy2], radius=24, fill=(12, 16, 26, 180), outline=(255, 255, 255, 60), width=2)

    # Window Header Bar
    draw.rounded_rectangle([wx1, wy1, wx2, wy1 + 56], radius=24, fill=(18, 24, 38, 240))
    draw.rectangle([wx1, wy1 + 30, wx2, wy1 + 56], fill=(18, 24, 38, 240))

    # Red, yellow, green window controls
    draw.ellipse([wx1 + 36 - 6, wy1 + 28 - 6, wx1 + 36 + 6, wy1 + 28 + 6], fill=(255, 95, 86, 255))
    draw.ellipse([wx1 + 58 - 6, wy1 + 28 - 6, wx1 + 58 + 6, wy1 + 28 + 6], fill=(255, 189, 46, 255))
    draw.ellipse([wx1 + 80 - 6, wy1 + 28 - 6, wx1 + 80 + 6, wy1 + 28 + 6], fill=(39, 201, 63, 255))

    # Top URL Address Bar Mockup
    draw.rounded_rectangle([wx1 + 120, wy1 + 16, wx1 + 550, wy1 + 40], radius=12, fill=(8, 12, 20, 220))

    # Category Badge Pill
    draw.rounded_rectangle([wx1 + 48, wy1 + 96, wx1 + 340, wy1 + 132], radius=18, fill=p['accent'])

    # Dashboard mini widget cards
    card_y = wy1 + 360
    for i in range(3):
        cx = wx1 + 48 + (i * 310)
        draw.rounded_rectangle([cx, card_y, cx + 285, card_y + 140], radius=16, fill=(15, 20, 32, 220), outline=(255, 255, 255, 40), width=1)
        draw.rounded_rectangle([cx + 20, card_y + 20, cx + 110, card_y + 32], radius=6, fill=p['accent'])
        draw.rounded_rectangle([cx + 20, card_y + 44, cx + 210, card_y + 60], radius=6, fill=(255, 255, 255, 240))
        draw.rounded_rectangle([cx + 20, card_y + 76, cx + 240, card_y + 84], radius=4, fill=(50, 60, 80, 255))
        draw.rounded_rectangle([cx + 20, card_y + 94, cx + 160, card_y + 102], radius=4, fill=(50, 60, 80, 255))

    # Bottom Accent Highlight Stripe
    draw.rectangle([0, 788, 1200, 800], fill=p['accent'])

    # Save PNG
    bg_img.save(target_path, 'PNG')
    print(f'Generated mini-ad software showcase PNG: {filename}')

for proj in projects:
    create_mini_ad_banner(proj)

print('All 6 mini-ad software showcase banners created cleanly.')
