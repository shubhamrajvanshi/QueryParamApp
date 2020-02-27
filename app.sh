#!/bin/bash

sudo yum install -y gcc-c++ make
curl --silent --location https://rpm.nodesource.com/setup_8.x | sudo bash -
sudo yum install -y nodejs

git clone https://github.com/shubhamrajvanshi/QueryParamApp.git nodeapp
cd nodeapp
npm install && npm start
