#!/bin/bash

sfdx force:package:create \
    --packagetype "Unlocked" \
    --nonamespace \
    --name "Twitter Feed" \
    --description "This package contains code and metadata for the Salesforce Twitter Feed Lightning component" \
    --path "force-app" \
    --targetdevhubusername "MyComponents"