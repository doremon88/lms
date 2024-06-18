# How to Install Magento 2.4.5 on Windows 11 using WSL 2 ( PHP8.1, NGINX  )
https://www.youtube.com/watch?v=GjlriwAZzxc


sudo apt update

# INSTALL NGINX ---------------

sudo apt install nginx 
service nginx start


cd /etc/ngnix/sites-available
nano mage245p1.conf
----------

upstream fastcgi_backend {
server unix:/run/php/php8.1-fpm.sock;
}
server {
server_name mage245p1.local.com;
listen 80;
set $MAGE_ROOT /home/doremon/project/mage245p1;
set $MAGE_MODE developer; # or production

access_log /var/log/nginx/magento2-access.log;
error_log /var/log/nginx/magento2-error.log;

include /home/doremon/project/mage245p1/nginx.conf.sample;
}
---------------
cd ../sites-enabled/
sudo ln -s ../sites-available/mage245p1.conf ./
ls -l
cd /home/doremon/project/
mkdir mage245p1


config host
- open notepad wth adminstrator mode , find file C:\Windows\System32\drivers\etc\hosts
- add line: 127.0.0.1 mage245p1.local.com
- save and exit

# INSTALL PHP 8.1----

sudo apt install php libapache2-mod-php php-bcmath php-curl php-fpm php-gd php-intl php-mbstring php-mysql php-soap php-xml php-xsl php-zip php-cli

php -ini | grep "Loaded Configuration File"
Loaded Configuration File => /etc/php/8.1/cli/php.ini

Output:
Loaded Configuration File:    /etc/php/cli/php.ini


memory_limit = 1G
upload_max_filesize = 128M
zlib.output_comperssion = on
max_execution_time = 18000
realpath_cache_size = 10M
realpath_cache_ttl = 7200

service php8.1-fpm start



#INSTALL MYSQL=====-------

sudo apt install mysql-server
service mysql start
sudo mysql
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password by 'b8dev@123';

sudo mysql_secure_installation


++++++++++ After Installation ++++++++++++

sudo mysql -u root -p;

create database mage245p1; # or your db name

SET GLOBAL validate_password.policy = 0;

CREATE USER 'm2_user'@'localhost' IDENTIFIED BY 'b8dev@123';
GRANT ALL ON mage245p1.* TO 'm2_user'@'localhost';

flush privileges;


++++++++++++++++  INSTALL COMPOSER +++++++++++++++++++++++++

curl -sS https://getcomposer.org/installer -o composer-setup.php
sudo php composer-setup.php --install-dir=/usr/local/bin --filename=composer
composer -V


+++++++++++++++++++++++++++ INSTALL ELASTICSEARCH +++++++++++++++++++++

https://www.elastic.co/guide/en/elasticsearch/reference/current/deb.html
wget https://artifacts.elastic.co/downloads/elasticsearch/elasticsearch-7.17.7-amd64.deb
wget https://artifacts.elastic.co/downloads/elasticsearch/elasticsearch-7.17.7-amd64.deb.sha512
shasum -a 512 -c elasticsearch-7.17.7-amd64.deb.sha512 
sudo dpkg -i elasticsearch-7.17.7-amd64.deb

sudo -i service elasticsearch start

sudo /bin/systemctl daemon-reload
sudo /bin/systemctl enable elasticsearch.service


sudo -i service elasticsearch stop
  

# INSTALL MAGENTO2 +++++++++++++++++++++++++++++++

cd /home/doremon/project/mage245p1
composer create-project --repository-url=https://MAG002749668:58096a2bc376d2e2baefa2f0d9a77c70a73939e2@repo.magento.com/ magento/project-community-edition .
composer create-project --repository-url=https://4b93e337b125bb66a302c89d7bc957fe:618f23d899290f5d3b7b132be44245a4@repo.magento.com/ magento/project-community-edition=2.4.5-p1 .

nginx -t

php bin/magento setup:install \
--base-url=http://mage245p1.local.com/ \
--db-host=localhost \
--db-name=mage245p1 \
--db-user=m2_user \
--db-password=b8dev@123 \
--admin-firstname=admin \
--admin-lastname=admin \
--admin-email=admin@admin.com \
--admin-user=admin \
--admin-password=b8dev@123 \
--language=en_US \
--currency=USD \
--timezone=America/Chicago \
--use-rewrites=1 \
--search-engine=elasticsearch7 \
--elasticsearch-host=127.0.0.1 \
--elasticsearch-port=9200 \
--elasticsearch-index-prefix=m2_test \
--elasticsearch-timeout=15


#magento2 
#php 
#mysql 
#nginx 
#elasticsearch 
#composer