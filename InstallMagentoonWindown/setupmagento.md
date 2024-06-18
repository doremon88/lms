cd /etc/nginx/sites-available/
nano mage245p1.conf

cd ../sites-enabled/
sudo ln -s ../sites-available/mage245p1.conf ./
ls -l
cd /home/doremon/project/
mkdir mage245p1


config host
- open notepad wth adminstrator mode , find file C:\Windows\System32\drivers\etc\hosts
- add line: 127.0.0.1 mage245p1.local.com
- save and exit


nginx -t

sudo chmod -R 777 var/ pub/ generated/ bin/ app/etc/

