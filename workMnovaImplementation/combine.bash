#!/bin/bash
echo '[' > manifest.json
first="1";
for entry in "/Volumes/san256/users_for_mac_system_macPro/jeannerat/mnova_dev/mnova/prj/build-mnova-full-Qt-5_6_3/bin/full/debug/"/deconvolution*json
do
  if [ $first == "1" ]
   then
    first="2";
    else
     echo "," >>manifest.json
    fi
cat $entry >> manifest.json
done
echo ']' >>manifest.json  
cp manifest.json ../docs/results_mn.json