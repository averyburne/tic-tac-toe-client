#!/bin/bash

curl --include --request PATCH https://tic-tac-toe-wdi.herokuapp.com/games/${ID} \
  --header "Content-type: application/json" \
  --data '{
    "credentials": {
      "status": "'"${STATUS}"'"
    }
  }'

echo
