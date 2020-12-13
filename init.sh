STATUS='Developing'

LIGHT_CYAN='\033[1;36m'
CYAN='\033[0;36m'
GREEN='\033[1;32m'
PURPLE='\033[1;33m' 
NC='\033[0m' # No Color

DEV='dev'
TEST='test'

MODE=$1

if [ $# -lt 1 ]; then
  echo -e "${CYAN}No parameters found..."
  echo -e "${CYAN}Starting on automode..."
  echo -e "${GREEN}Installing dependencies...${NC}"
  yarn install
  MODE='start'
  echo -e "${PURPLE}Starting server in ${STATUS} mode...${NC}"
fi

yarn $MODE --color