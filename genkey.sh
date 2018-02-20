#!/bin/sh
keytool -genkey -v -keystore pirate-bay.jks -keyalg RSA -keysize 2048 -validity 10000 -alias pirate-bay
mv pirate-bay.jks keys/
