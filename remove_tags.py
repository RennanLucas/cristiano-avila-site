import os
import glob
import re

components_dir = r"C:\Users\renna\.gemini\antigravity\scratch\cristiano-avila-site\src\components\*.tsx"

for file_path in glob.glob(components_dir):
    with open(file_path, "r", encoding="utf-8") as f:
        content = f.read()
        
    content = re.sub(r'className="tag-gold[^"]*"', 'className="inline-block px-3 py-1 rounded-full bg-zinc-100 text-[10px] font-bold tracking-widest text-zinc-500 uppercase mb-3"', content)
    
    with open(file_path, "w", encoding="utf-8") as f:
        f.write(content)

print("Tag-gold removed.")
