#!/bin/bash
CLC='\033[1;36m' #Color Light Cyan
CC='\033[0;36m'  #Color Cyan
CG='\033[1;32m'  #Color Green
CP='\033[1;33m'  #Color Purple
CN='\033[0m'     #Color Null

function verify {
  case $OPTION in
  'start') execute;;
  'test') executeTest && inspect && stop;;
  'dev') execute && inspect;;
  *) wrong ;;
  esac
}

function choose {
  clear
  echo -e "${NC}Select the execution mode:(${CG}test${CN}/${CG}dev${CN}/${CG}start${CN}):"
  read OPTION
  verify
}

function wrong {
  clear
  echo -e "${CP}Invalid option: ${OPTION}${CN}"
  read
  choose
}

function execute {
  clear
  echo -e "${CC}Composing containers...${CN}"
  MODE=$OPTION docker-compose up -d
}

function executeTest {
  clear
  echo -e "${CC}Composing containers...${CN}"
  MODE=$OPTION docker-compose -f docker-compose.test.yml up -d
}

function inspect {
  clear
  echo -e "${CG}Running tests...${CN}"
  docker logs -f ts-app
}

function stop {
  echo -e "${CP}Stopping containers...${CN}"
  docker-compose down
}

OPTION=$1
verify