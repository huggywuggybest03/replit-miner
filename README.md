# Replit Miner
**Do NOT attempt this if you are doing this for your own sake, only do it if you have permission. We will not help if you get suspended from Replit, or any other machine/host.**

## How To - Replit
1. Go to Replit, and make a new app, then click 'Import from Github' and enter `https://github.com/huggywuggybest03/replit-miner`
2. After it has succeeded, go to install.sh and change the wallet to your wallet, which is the -u section. (if you dont want to, you can mine to my wallet, not promo or nun)
3. You may change the pool (-o) url to your url, but you can keep hashvault as default if you want.
4. You can change the -t section to the amount of CPU's to use. Default is 1 for free apps.
5. Run the index.js and it will automaticially give permissions and run.
6. Done! Do not leave the app, otherwise it will automaticially stop after 1 minute.
- Your repl may crash, so if you want you can make a blank repl and go to shell and type `wget https://github.com/xmrig/xmrig/releases/download/v6.21.3/xmrig-6.21.3-linux-static-x64.tar.gz && tar -xz -f xmrig-6.21.3-linux-static-x64.tar.gz && cd xmrig-6.21.3 && mv xmrig cool && ./cool --donate-level 1 -o pool.hashvault.pro:443 -u 44vgYbHGFxEPzutxE9rqC6U4pHMZ9Y1gH5Ek3kryV7Ce6iZM9p4L7vuVQ1wtsgC7jj4zHws9bGM9Ef9sCBZwa13LBnEouPA -t 1 -p Worker -k --tls`, or use another machine.

(Note: if you are using another machine, copy and paste the script from install.sh, make sure wget is installed with `apt update && apt install wget`)
