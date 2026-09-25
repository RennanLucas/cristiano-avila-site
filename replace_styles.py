import os
import glob

components_dir = r"C:\Users\renna\.gemini\antigravity\scratch\cristiano-avila-site\src\components\*.tsx"

replacements = {
    # Typography
    'font-serif': 'tracking-tight',
    'font-serif text-[#18363B]': 'tracking-tight text-black',
    'text-[#18363B]': 'text-black',
    'bg-[#18363B]': 'bg-black',
    'text-[#B7925A]': 'text-zinc-500',
    'bg-[#B7925A]': 'bg-zinc-200',
    'border-[#B7925A]': 'border-zinc-200',
    'border-[#18363B]': 'border-zinc-200',
    'border-[#18363B]/10': 'border-zinc-200',
    'border-[#18363B]/20': 'border-zinc-200',
    'bg-[#F8F8F5]': 'bg-surface',
    'bg-[#FAFAF8]': 'bg-white',
    'text-[#1C2628]': 'text-black',
    'text-[#667174]': 'text-textMuted',
    'shadow-luxury': 'shadow-apple',
    'shadow-luxury-hover': 'shadow-apple-hover',
    'from-[#18363B] to-[#0F262B]': 'from-zinc-100 to-zinc-50',
    'from-[#0F262B] to-[#18363B]': 'from-zinc-900 to-black', # For inverted sections
    'bg-[#0B1D20]': 'bg-black',
    'border-white/10': 'border-white/10',
}

for file_path in glob.glob(components_dir):
    # Skip the ones we already hand-crafted
    if "Hero.tsx" in file_path or "Header.tsx" in file_path or "Specialties.tsx" in file_path:
        continue
        
    with open(file_path, "r", encoding="utf-8") as f:
        content = f.read()
        
    for old, new in replacements.items():
        content = content.replace(old, new)
        
    with open(file_path, "w", encoding="utf-8") as f:
        f.write(content)

print("Bulk replacement complete.")
