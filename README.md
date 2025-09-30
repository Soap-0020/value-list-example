# Must Read

## Required Edits

### next.config.js

- You must update the hostname data to prevent people misusing your image optimizations.

### src/config/getItems.ts

- Update this to implement your own logic in fetching the items
- When updating values and or adding new ones, changing invalid/undefined/etc values. CODE CHANGES MAY BE NEEDED. Run testing to see whats required. Open an issue if help is needed.
- ⚠️ This file is not needed if you have seperate logic not using this function in the rest of the config files. Eg, using mongodb to get each items data seperately using findOne() etc.

### src/app/page.tsx

- Edit the meta data for your sites branding

### src/config/...

- Update these files and personilise them for you
- All files may have to be changed.

## Possible Edits

- change theme colors, etc
- add new custom features/buttons/etc
- **anything** really. This is just a template meant to be expanded upon.
- All data sets can be MOSTLY changed, some may require more code improvements in the app, etc.
- Look what is needed for your data storage method and go from there.

# COMING SOON

## Long Term (Months+ish)

- Code cleanup
- Navbar
- Better landing section/banner/etc

## Short Term

- Fixes for similar items card icons being hidden by overflow
- More rarity icons for the example
- A "auto slider" type thing for card values (infomation details) when overflowing.
