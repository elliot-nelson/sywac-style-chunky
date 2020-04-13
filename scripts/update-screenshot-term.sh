#!/bin/bash

# Config
TITLE=sywac-style-bunker
ROWS=30
COLUMNS=110

source ~/.nvm/nvm.sh && nvm use 10

# Prep terminal window title and size
printf "\033]0;%s\007" "${TITLE}"
printf "\033[8;${ROWS};${COLUMNS}t"

sleep 1

# Flush out osascript spam
echo "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n"
clear
echo "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n"
clear

# Prep screenshot
echo "$ pizza cancel"
node sample-app.js cancel
printf "$  "
screencapture -w screenshot.png
mogrify -resize 50% screenshot.png
