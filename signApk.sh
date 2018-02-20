#!/bin/sh
jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore keys/pirate-bay.jks platforms/android/app/build/outputs/apk/release/app-release-unsigned.apk pirate-bay
/home/hitesh/Android/Sdk/build-tools/27.0.3/zipalign -v 4 platforms/android/app/build/outputs/apk/release/app-release-unsigned.apk Pirate-Bay.apk
