from PIL import Image, ImageFilter
import math

img_path = r'C:\Users\Chiranjibi sah\.gemini\antigravity-ide\brain\2142cf38-a36c-47da-8ee9-ffa75c32f1f7\.user_uploaded\media_1790147007421.jpg'
out_path = r'e:\website creation\navna\public\logo.png'

try:
    img = Image.open(img_path).convert('RGBA')
    
    # 1. Upscale by 4x for higher resolution processing
    width, height = img.size
    img = img.resize((width * 4, height * 4), Image.LANCZOS)
    
    # 2. Extract the blue logo vs the checkerboard
    pixels = img.load()
    width, height = img.size
    
    # We will create a clean mask
    mask = Image.new('L', (width, height), 0)
    mask_pixels = mask.load()
    
    min_x, min_y, max_x, max_y = width, height, 0, 0
    
    for y in range(height):
        for x in range(width):
            r, g, b, a = pixels[x, y]
            
            avg = (r + g + b) / 3
            chroma = max(abs(r - avg), abs(g - avg), abs(b - avg))
            
            # If it's very blue, it's the logo
            if b > r + 15 and b > g + 15:
                mask_pixels[x, y] = 255
            elif chroma > 10:
                mask_pixels[x, y] = 128
            else:
                mask_pixels[x, y] = 0

    # 3. Apply Gaussian blur to smooth out the jagged edges and checkerboard artifacts
    mask = mask.filter(ImageFilter.GaussianBlur(radius=3))
    
    # 4. Threshold to create a perfectly sharp vector-like edge
    mask_pixels = mask.load()
    for y in range(height):
        for x in range(width):
            if mask_pixels[x, y] > 100:
                mask_pixels[x, y] = 255
                if x < min_x: min_x = x
                if x > max_x: max_x = x
                if y < min_y: min_y = y
                if y > max_y: max_y = y
            else:
                mask_pixels[x, y] = 0

    # 5. Crop to bounding box
    if max_x >= min_x and max_y >= min_y:
        mask = mask.crop((min_x, min_y, max_x, max_y))
        cw, ch = mask.size
        pad = int(max(cw, ch) * 0.05)
        sq_size = max(cw, ch) + pad * 2
        
        final_mask = Image.new('L', (sq_size, sq_size), 0)
        px = (sq_size - cw) // 2
        py = (sq_size - ch) // 2
        final_mask.paste(mask, (px, py))
        
        # 6. Create the final white image with the clean mask as alpha
        final_img = Image.new('RGBA', (sq_size, sq_size), (255, 255, 255, 255))
        final_img.putalpha(final_mask)
        
        # 7. Downscale slightly to antialias the thresholded edges
        final_img = final_img.resize((sq_size // 2, sq_size // 2), Image.LANCZOS)
        
        final_img.save(out_path, 'PNG')
        final_img.save(r'e:\website creation\navna\src\app\icon.png', 'PNG')
        print("Successfully upscaled and smoothed the logo!")
    else:
        print("No logo found.")

except Exception as e:
    print('Error:', e)
