#!/bin/bash
echo `date '+%Y-%m-%d %H:%M:%S'` >> /home/ec2-user/deploydates.log
echo "deploying to $DEPLOYMENT_GROUP_NAME Group" >> /home/ec2-user/deploydates.log 

# create bucketful directory 
mkdir -p /home/ec2-user/bucketful
chown -R ec2-user:ec2-user /home/ec2-user/bucketful

# install meteor
curl "https://install.meteor.com/?release=1.6.1" | /bin/sh

# install docker and docker-compose
sudo yum -y install docker
sudo pip install docker-compose

# start docker daemon
sudo service docker start

# run docker compose
sudo /usr/local/bin/docker-compose --file /home/ec2-user/bucketful/.codedeploy/docker-compose.yaml up -d


