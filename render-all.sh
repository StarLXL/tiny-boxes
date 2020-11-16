#!/bin/bash

trap "exit" INT TERM    # Convert INT and TERM to EXIT
trap "kill 0" EXIT      # Kill all children if we receive EXIT

LINK="0x01be23585060835e02b77ef475b0cc51aa1e0709"
FEED="0x3Af8C569ab77af5230596Acf0E8c2F9351d24C38"

## deploy only on calls with a -d flag present
while getopts "d:i:c:a:" arg; do
    case $arg in
        d) DEPLOY="set";;
        i) ALL="set";;
        c) ADDRESS=$OPTARG;;
        a) ANIMATION=$OPTARG;;
    esac
done

## if deploy or render
## delete oz lock file ./.openzeppelin/.lock
rm -f ./.openzeppelin/.lock

if [ -z "$DEPLOY" ]
    then
        echo "Skipping Deploy"
    else
        ADDRESS=$(npx oz deploy --no-interactive -k regular -n rinkeby TinyBoxes "$LINK" "$FEED" | tail -n 1)
fi

if [ -z "$ADDRESS" ]
    then
        echo "Error: no contract address provided!";
        echo "(use -a ADDRESS to provide address or -d y to deploy a new one)";
    else
        echo "Calling against contract @ $ADDRESS"
        ## delete oz lock file ./.openzeppelin/.lock
        rm -f ./.openzeppelin/.lock
        if [ -z "$ALL" ]
            then
                if [ -z "$ANIMATION" ]
                    then
                        ANIMATION=0
                fi
                # render svg at
                npx oz call --method tokenTest -n rinkeby --args "1234567, [16,16], [222,80,30,70,6,3], [100,100,2,2,111,222,150,200,2,750,1200,2400,100], [true,true,true], $ANIMATION, true" --to "$ADDRESS" > "./frames/Anim-$ANIMATION.svg"
            else
                # adjust max animation value here
                for ANIMATION in {0..13}
                do  
                    # render svg at
                    npx oz call --method tokenTest -n rinkeby --args "1234567, [16,16], [222,80,30,70,6,3], [100,100,2,2,111,222,150,200,2,750,1200,2400,100], [true,true,true], $ANIMATION, true" --to "$ADDRESS" > "./frames/Anim-$ANIMATION.svg"
                done
        fi
fi