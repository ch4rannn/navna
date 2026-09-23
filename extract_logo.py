from PIL import Image
import math

img_path = r'C:\Users\Chiranjibi sah\.gemini\antigravity-ide\brain\2142cf38-a36c-47da-8ee9-ffa75c32f1f7\.user_uploaded\media_1790147007421.jpg'
out_path = r'e:\website creation\navna\public\logo.png'

try:
    img = Image.open(img_path).convert('RGBA')
    width, height = img.size
    pixels = img.load()
    
    # First pass: find bounding box to crop
    min_x, min_y, max_x, max_y = width, height, 0, 0
    
    for y in range(height):
        for x in range(width):
            r, g, b, a = pixels[x, y]
            
            # Distance from pure grayscale (R=G=B)
            avg = (r + g + b) / 3
            chroma = max(abs(r - avg), abs(g - avg), abs(b - avg))
            
            # The checkerboard is grayscale. The logo is blue.
            # Map chroma to alpha for a smooth anti-aliased edge.
            alpha = int(min(255, max(0, (chroma - 5) * 6)))
            
            # Keep original colors, just change alpha
            pixels[x, y] = (r, g, b, alpha)
            
            if alpha > 50:
                if x < min_x: min_x = x
                if x > max_x: max_x = x
                if y < min_y: min_y = y
                if y > max_y: max_y = y

    # Crop and add padding
    if max_x >= min_x and max_y >= min_y:
        img_cropped = img.crop((min_x, min_y, max_x, max_y))
        cw, ch = img_cropped.size
        pad = int(max(cw, ch) * 0.05)
        
        sq_size = max(cw, ch) + pad * 2
        final_img = Image.new('RGBA', (sq_size, sq_size), (255, 255, 255, 0))
        
        px = (sq_size - cw) // 2
        py = (sq_size - ch) // 2
        final_img.paste(img_cropped, (px, py))
        
        final_img.save(out_path, 'PNG')
        final_img.save(r'e:\website creation\navna\src\app\icon.png', 'PNG')
        print("Successfully extracted transparent logo with smooth edges!")
    else:
        print("No logo found.")

except Exception as e:
    print('Error:', e)
