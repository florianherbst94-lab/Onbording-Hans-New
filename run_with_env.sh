#!/bin/bash
export $(cat .env | xargs)
node check_user.js
