import os
from PIL import Image

def convert_to_webp(root_dir):
    extensions = ('.png', '.jpg', '.jpeg')
    for root, dirs, files in os.walk(root_dir):
        for file in files:
            if file.lower().endswith(extensions):
                file_path = os.path.join(root, file)
                file_name, _ = os.path.splitext(file_path)
                output_path = f"{file_name}.webp"
                
                try:
                    with Image.open(file_path) as img:
                        img.save(output_path, 'webp', quality=80)
                        print(f"Converted: {file_path} -> {output_path}")
                except Exception as e:
                    print(f"Failed to convert {file_path}: {e}")

if __name__ == "__main__":
    convert_to_webp(r'c:\Users\lncsa\OneDrive\Desktop\Development\Portfolio-Saad\Images')
