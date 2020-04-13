#!/bin/bash
#
# This utility script is designed to quickly and easily update the style screenshot.
# It's designed to run specifically on my (the author's) machine, so your mileage
# may vary, no guarantees, etc.

DIR=`pwd`

osascript <<END
tell application "Terminal"
    do script "
        prompt_pure_set_title() {}
        cd \"$PWD\"
        scripts/update-screenshot-term.sh
        sleep 1
        exit
    "
end tell
END
