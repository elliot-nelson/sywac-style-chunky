#!/bin/bash

# Confirm
read -p "This script will resize your current terminal window. Press ENTER to continue."

# Config
ROWS=30
COLUMNS=110

# Prep terminal window title and size
printf "\033]0;%s\007" ""
printf "\033[8;${ROWS};${COLUMNS}t"

sleep 1
clear

# Prep screenshot
echo "$ pizza cancel"
node sample-cli.js cancel
printf "$ "
sleep 1
screencapture -w screenshot.png
mogrify -resize 50% screenshot.png
