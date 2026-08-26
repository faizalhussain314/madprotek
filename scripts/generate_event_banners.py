import os
import math
from PIL import Image, ImageDraw, ImageFilter

# Create event directories
os.makedirs('public/images/events/marathon', exist_ok=True)
os.makedirs('public/images/events/offroad', exist_ok=True)
os.makedirs('public/images/events/adventure', exist_ok=True)
os.makedirs('public/images/events/cricket', exist_ok=True)

def draw_marathon_hero(width=1200, height=800):
    img = Image.new('RGB', (width, height), color=(15, 23, 42))
    draw = ImageDraw.Draw(img)

    # Sunrise gradient sky
    for y in range(int(height * 0.45)):
        r = int(255 - (y / (height * 0.45)) * 180)
        g = int(140 - (y / (height * 0.45)) * 90)
        b = int(40 + (y / (height * 0.45)) * 60)
        draw.line([(0, y), (width, y)], fill=(r, g, b))

    # Sun glow behind mountains
    draw.ellipse([width * 0.4, height * 0.1, width * 0.6, height * 0.45], fill=(255, 220, 120))

    # Mountain silhouettes
    m_pts = [(0, int(height * 0.45)), (250, int(height * 0.25)), (500, int(height * 0.38)), 
             (800, int(height * 0.2)), (1050, int(height * 0.35)), (width, int(height * 0.3)),
             (width, int(height * 0.5)), (0, int(height * 0.5))]
    draw.polygon(m_pts, fill=(30, 41, 59))

    # Highway/Road receding into distance
    road_pts = [(int(width * 0.45), int(height * 0.45)), (int(width * 0.55), int(height * 0.45)),
                (width + 100, height), (-100, height)]
    draw.polygon(road_pts, fill=(40, 44, 52))

    # Road lane yellow lines
    draw.line([(int(width * 0.5), int(height * 0.45)), (int(width * 0.5), height)], fill=(245, 184, 0), width=6)

    # Marathon Finish Arch
    arch_x1, arch_y1, arch_x2, arch_y2 = int(width * 0.25), int(height * 0.4), int(width * 0.75), int(height * 0.6)
    draw.rectangle([arch_x1, arch_y1, arch_x2, arch_y1 + 40], fill=(245, 184, 0))
    draw.rectangle([arch_x1, arch_y1, arch_x1 + 30, arch_y2], fill=(15, 23, 42))
    draw.rectangle([arch_x2 - 30, arch_y1, arch_x2, arch_y2], fill=(15, 23, 42))

    # Runner Silhouettes along road
    for i in range(25):
        rx = int(width * 0.2 + (i % 5) * 160 + (i * 12) % 80)
        ry = int(height * 0.52 + (i // 5) * 55)
        scale = 0.5 + (ry / height) * 0.7
        # Head
        draw.ellipse([rx, ry - int(25 * scale), rx + int(14 * scale), ry - int(11 * scale)], fill=(255, 255, 255))
        # Torso (yellow bib)
        draw.rectangle([rx - int(4 * scale), ry - int(10 * scale), rx + int(18 * scale), ry + int(15 * scale)], fill=(245, 184, 0))
        # Legs
        draw.line([(rx + int(2 * scale), ry + int(15 * scale)), (rx - int(8 * scale), ry + int(35 * scale))], fill=(15, 23, 42), width=int(3 * scale))
        draw.line([(rx + int(12 * scale), ry + int(15 * scale)), (rx + int(22 * scale), ry + int(35 * scale))], fill=(15, 23, 42), width=int(3 * scale))

    # Vignette overlay & Badge
    draw.rectangle([0, 0, width, height], outline=(245, 184, 0, 100), width=10)
    
    # Event Tag Pill
    draw.rounded_rectangle([60, height - 120, 420, height - 60], radius=16, fill=(15, 23, 42, 230), outline=(245, 184, 0), width=2)

    img.save('public/images/events/marathon/hero.png', 'PNG')
    print('Generated marathon/hero.png')

def draw_offroad_hero(width=1200, height=800):
    img = Image.new('RGB', (width, height), color=(24, 18, 12))
    draw = ImageDraw.Draw(img)

    # Dramatic sunset sky
    for y in range(int(height * 0.5)):
        r = int(220 - (y / (height * 0.5)) * 140)
        g = int(90 - (y / (height * 0.5)) * 60)
        b = int(20 + (y / (height * 0.5)) * 10)
        draw.line([(0, y), (width, y)], fill=(r, g, b))

    # Forested Mountain Ridge
    m_pts = [(0, int(height * 0.5)), (300, int(height * 0.3)), (600, int(height * 0.42)),
             (900, int(height * 0.25)), (width, int(height * 0.38)), (width, height), (0, height)]
    draw.polygon(m_pts, fill=(45, 30, 20))

    # Mud trail path
    trail_pts = [(int(width * 0.4), int(height * 0.42)), (int(width * 0.6), int(height * 0.42)),
                 (width + 150, height), (-200, height)]
    draw.polygon(trail_pts, fill=(75, 48, 28))

    # 4x4 Jeep Body Silhouette
    jx, jy = int(width * 0.35), int(height * 0.52)
    draw.rounded_rectangle([jx, jy, jx + 360, jy + 160], radius=24, fill=(245, 184, 0)) # Yellow Jeep body
    draw.rectangle([jx + 60, jy - 80, jx + 280, jy], fill=(20, 20, 20)) # Cabin roof
    # Windows
    draw.rectangle([jx + 80, jy - 70, jx + 160, jy - 10], fill=(200, 230, 255))
    draw.rectangle([jx + 180, jy - 70, jx + 260, jy - 10], fill=(200, 230, 255))
    # Big Offroad Wheels
    draw.ellipse([jx + 30, jy + 100, jx + 130, jy + 200], fill=(15, 15, 15), outline=(245, 184, 0), width=4)
    draw.ellipse([jx + 230, jy + 100, jx + 330, jy + 200], fill=(15, 15, 15), outline=(245, 184, 0), width=4)

    # Mud Splash effect
    for i in range(40):
        sx = jx - 40 + (i * 11) % 180
        sy = jy + 120 + (i * 7) % 80
        draw.ellipse([sx, sy, sx + 12, sy + 12], fill=(115, 75, 45))

    img.save('public/images/events/offroad/hero.png', 'PNG')
    print('Generated offroad/hero.png')

def draw_adventure_hero(width=1200, height=800):
    img = Image.new('RGB', (width, height), color=(10, 25, 47))
    draw = ImageDraw.Draw(img)

    # Crisp mountain air sky gradient
    for y in range(int(height * 0.55)):
        r = int(14 + (y / (height * 0.55)) * 40)
        g = int(116 + (y / (height * 0.55)) * 60)
        b = int(144 + (y / (height * 0.55)) * 40)
        draw.line([(0, y), (width, y)], fill=(r, g, b))

    # Pine summit ridge
    pts = [(0, int(height * 0.55)), (350, int(height * 0.28)), (700, int(height * 0.45)), 
           (width, int(height * 0.3)), (width, height), (0, height)]
    draw.polygon(pts, fill=(15, 45, 40))

    # Hikers on ridge peak
    hx, hy = int(width * 0.32), int(height * 0.28)
    draw.ellipse([hx - 8, hy - 25, hx + 8, hy - 9], fill=(255, 255, 255)) # Head
    draw.rectangle([hx - 10, hy - 8, hx + 10, hy + 20], fill=(245, 184, 0)) # Jacket
    draw.rectangle([hx + 6, hy - 5, hx + 18, hy + 15], fill=(20, 30, 40)) # Backpack

    img.save('public/images/events/adventure/hero.png', 'PNG')
    print('Generated adventure/hero.png')

def draw_cricket_hero(width=1200, height=800):
    img = Image.new('RGB', (width, height), color=(10, 15, 25))
    draw = ImageDraw.Draw(img)

    # Stadium Floodlight Beams
    for x in range(100, width, 300):
        draw.polygon([(x, 0), (x + 80, 0), (x + 250, height), (x - 100, height)], fill=(255, 255, 255, 25))

    # Green turf pitch
    draw.polygon([(0, int(height * 0.5)), (width, int(height * 0.5)), (width, height), (0, height)], fill=(20, 90, 45))
    # Pitch strip
    draw.polygon([(int(width * 0.42), int(height * 0.5)), (int(width * 0.58), int(height * 0.5)),
                  (int(width * 0.65), height), (int(width * 0.35), height)], fill=(180, 150, 110))

    # Wickets & Batsman Silhouette
    bx, by = int(width * 0.48), int(height * 0.55)
    draw.ellipse([bx - 10, by - 35, bx + 10, by - 15], fill=(255, 255, 255)) # Helmet
    draw.rectangle([bx - 14, by - 14, bx + 14, by + 25], fill=(245, 184, 0)) # Jersey
    draw.line([(bx + 5, by), (bx + 45, by - 30)], fill=(160, 110, 60), width=8) # Cricket Bat

    img.save('public/images/events/cricket/hero.png', 'PNG')
    print('Generated cricket/hero.png')

def generate_gallery_placeholders():
    # Marathon gallery PNGs
    for name, title in [('start-line', 'Start Line'), ('runners', 'Runner Convoy'), 
                        ('crowd', 'Spectator Crowd'), ('finish', 'Finish Ceremony')]:
        draw_marathon_hero(800, 600)
        os.rename('public/images/events/marathon/hero.png', f'public/images/events/marathon/{name}.png')
    draw_marathon_hero(1200, 800)

    # Offroad gallery PNGs
    for name in ['jeep-convoy', 'terrain', 'participants']:
        draw_offroad_hero(800, 600)
        os.rename('public/images/events/offroad/hero.png', f'public/images/events/offroad/{name}.png')
    draw_offroad_hero(1200, 800)

    # Adventure gallery PNGs
    for name in ['group', 'activity']:
        draw_adventure_hero(800, 600)
        os.rename('public/images/events/adventure/hero.png', f'public/images/events/adventure/{name}.png')
    draw_adventure_hero(1200, 800)

    # Cricket gallery PNGs
    for name in ['action']:
        draw_cricket_hero(800, 600)
        os.rename('public/images/events/cricket/hero.png', f'public/images/events/cricket/{name}.png')
    draw_cricket_hero(1200, 800)

generate_gallery_placeholders()
print('All event gallery and hero PNG assets generated cleanly.')
