#!/bin/sh

echo 'Comenzar Build '
npm run build:firebase
echo 'Comenzar Deploy'
firebase deploy --only functions,hosting
