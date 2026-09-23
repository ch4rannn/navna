import sys
try:
    from PIL import Image
    
    img_path = r'C:\Users\Chiranjibi sah\.gemini\antigravity-ide\brain\2142cf38-a36c-47da-8ee9-ffa75c32f1f7\.user_uploaded\media_1790147007421.jpg'
    out_path = r'e:\website creation\navna\public\logo.png'
    
    img = Image.open(img_path).convert('RGBA')
    width, height = img.size
    
    pixels = img.load()
    
    for y in range(height):
        for x in range(width):
            r, g, b, a = pixels[x, y]
            diff = max(r, g, b) - min(r, g, b)
            
            # Grayscale check for checkerboard (difference between rgb channels is very small)
            if diff < 15:
                pixels[x, y] = (255, 255, 255, 0) # Make transparent
            else:
                # Color pixel -> this is the dark blue logo.
                # Turn it into bright white or light blue so it's visible on dark mode.
                pixels[x, y] = (255, 255, 255, 255)
    
    img.save(out_path, 'PNG')
    img.save(r'e:\website creation\navna\src\app\icon.png', 'PNG')
    
    print('Successfully created clean transparent white logo!')
except Exception as e:
    print('Error:', e)
