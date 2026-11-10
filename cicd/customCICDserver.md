# custom cicd server
for now whaat we are doign was set up the github webhook and cicd pipeline in our main backend but this is not a good practice , we basically create another server and use that server api inside github webhoook and that webhoook is used to run a ci-cd  , 

# steps to setup custom cicd server :
1> create another basic http express server and setup the enpoint wit github-webhook and do the exact same thing we did to create a cicd pieline that is : 
    - check the signature comming from webhoook 
    -send a msg response ok 
    - use spawn child process method to runt he bash script 
    -use socket event on that when data come andd error come 
    - done 

2>  create a bash script , for frontend the exact same thing will work no nothing extra need to set inside fronend bash script but not same with bacckend 

3> inside backend bash script we need to run the "ssh" an then our backend folder name and then need to use the heredoc to successfully use the ssh commandd , heredoc is notthign but just a commandd (e.g., << 'EOF') and inside this command we wrap up all our bash script and it run successfully 
eg:

egbackend.sh:
ssh storageApp 'bash' << 'EOF'
    set -e

    cd /home/ubuntu/stroageApp-backend
    git pull
    echo "Installing client dependencies (npm ci)..."
    npm ci --no-audit --no-fund
    pm2 reload storageApp

    echo "Backend Deployed Successfully..."
EOF


- HEREDOC :  allows you to execute multiple lines of complex bash code on a remote server over a single, secure network connection without needing to escape special characters or write multiple repetitive ssh statements.