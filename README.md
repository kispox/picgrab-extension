# PicGrab (i asked an ai to tell me how to make this readme but i wrote everything by my self)
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

i put screenshots here

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
