import sys
try:
    from PIL import Image
    
    img_path = r'e:\website creation\navna\public\logo.png'
    
    img = Image.open(img_path).convert('RGBA')
    
    # Get the bounding box of the non-transparent pixels
    bbox = img.getbbox()
    
    if bbox:
        # Crop the image to the bounding box
        img_cropped = img.crop(bbox)
        
        # Add a tiny amount of padding (e.g. 5%) so it's not totally edge-to-edge
        width, height = img_cropped.size
        pad = int(max(width, height) * 0.05)
        
        new_width = width + pad * 2
        new_height = height + pad * 2
        
        # Create a new square image (favicons are usually square)
        # Determine the size of the square
        square_size = max(new_width, new_height)
        
        new_img = Image.new('RGBA', (square_size, square_size), (255, 255, 255, 0))
        
        # Paste the cropped image into the center of the square
        paste_x = (square_size - width) // 2
        paste_y = (square_size - height) // 2
        
        new_img.paste(img_cropped, (paste_x, paste_y))
        
        new_img.save(img_path, 'PNG')
        new_img.save(r'e:\website creation\navna\src\app\icon.png', 'PNG')
        
        print('Successfully cropped and squared the logo!')
    else:
        print('Image is completely transparent.')
except Exception as e:
    print('Error:', e)
