# PicGrab
this is a simple Chrome extension that scan webpage and show images and let u download images one by one or all at once.

---

## What it does

- Scans the current tab for all images
- Shows thumbnails so you can preview before downloading
- Filter out small images like icons and logos
- Select specific images with checkboxes
- Download everything into a `PicGrab/` folder automatically

---

## Screenshots

<img width="1549" height="1004" alt="Capture d&#39;écran 2026-06-21 150519" src="https://github.com/user-attachments/assets/ae23f513-29c8-4f86-bcce-7c756c517731" />
<img width="1186" height="661" alt="Capture d&#39;écran 2026-06-21 150346" src="https://github.com/user-attachments/assets/8886842f-d048-4c52-abef-ce8a358aac3f" />
<img width="1490" height="748" alt="Capture d&#39;écran 2026-06-21 145016" src="https://github.com/user-attachments/assets/b7978b19-60a9-474c-91ee-6017ffc3eecd" />
<img width="1592" height="973" alt="Capture d&#39;écran 2026-06-20 204008" src="https://github.com/user-attachments/assets/3e768da2-a79f-480c-96e0-c4e2a9e4fa78" />
<img width="1271" height="827" alt="Capture d&#39;écran 2026-06-21 145100" src="https://github.com/user-attachments/assets/8e6c00ef-8c7f-46a8-9d73-482ec06cd322" />

---

## Installation

PicGrab isn't on the Chrome Web Store yet, you can load it manually:

1. Download or clone this repo
2. Open Chrome and go to `chrome://extensions`
3. Enable **Developer mode** (toggle in the top right)
4. Click **Load unpacked**
5. Select the `PicGrab` folder

That's it. i think i cooked this

---

## How to use it

1. Go to any webpage with images
2. Click the PicGrab icon in your toolbar
3. Hit **Scan Page**
4. Check **hide small images** to filter out icons
5. Click **DL** on individual images, or **Download All** to grab everything (i did a checkbox for images to download but still don't work , i will add it in the future)
6. Images are saved to your `Downloads/PicGrab/` folder
---

## Files

```
PicGrab/
├── manifest.json   # extension config
├── popup.html      # the UI
└── popup.js        # all the logic
```

---

## Built with

- JavaScript (vanilla, no frameworks)
- Chrome Extensions API (Manifest V3)
- `chrome.scripting` to scan the page
- `chrome.downloads` to save images

---

## Known issues

- Doesn't always detect images loaded lazily (after scroll)
- Extension doesn't work on `chrome://` pages (Chrome restriction)
- File extension detection is basic — defaults to `.jpg` if unsure

---

## Made by

kispox — built for [Hack Club Carnival](https://carnival.hackclub.com)
(i asked an ai to tell me how to make this readme but i wrote everything by my self)
