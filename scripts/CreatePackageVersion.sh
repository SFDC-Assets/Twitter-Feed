#!/bin/bash

sfdx force:package:version:create \
    --installationkeybypass \
    --wait 10 \
    --package "Twitter Feed" \
    --path "force-app" \
    --codecoverage \
    --targetdevhubusername "MyComponents"