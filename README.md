
[Slides](https://petal-estimate-4e9.notion.site/Autoscaling-groups-1a27dfd1073580adaaccc785189f156f)

#! =>Shebang // tells os which interpreter to use.
#!/bin/bash
cd ~/ASG
export PATH=$PATH:/home/ubuntu/.nvm/versions/node/v24.11.0/bin/node
pm2 start --interpreter /home/ubuntu/.nvm/versions/node/v24.11.0/bin/bun /home/ubuntu/ASG/bin.ts