# Directory-Organiser-
Directory Organiser using Node.js

# Directory Clutter Cleaner
A Node.js utility that organizes files in a directory into folders based on their file extensions.

## Features
- Organizes files into extension-based folders
- Skips JavaScript and JSON files so that the file on which you work doesnt change its directory and create problems
- Skips hidden files (.gitignore, .env)
- Handles files without extensions by moving them to an "others" folder

## Run
Clone the repo and run:
```bash
node ex.js
```

## Example

# Before:
tej1.html
photo.jpg
report.pdf
README
tej2.html
tej3.zip

# After:
html ├── tej1.html 
     └── tej2.html 
      
jpg └── photo.jpg 

pdf └── report.pdf 

zip └── tej3.zip 

others └── README

## Technologies Used
Node.js
File System Module (fs)
Path Module (path)
