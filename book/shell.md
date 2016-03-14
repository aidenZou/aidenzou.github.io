# 

```shell
netstat -lntp

tcp        0      0 0.0.0.0:3306                0.0.0.0:*                   LISTEN      1115/mysqld


ps -ef|grep 1115

mysql     1115   986  0 Mar11 ?        00:00:18 /usr/libexec/mysqld --basedir=/usr --datadir=/var/lib/mysql --user=mysql --log-error=/var/lib/mysql/iZ28506snwnZ.err --pid-file=/var/run/mysqld/mysqld.pid --socket=/tmp/mysql.sock --port=3306
root     13848 13809  0 16:48 pts/0    00:00:00 grep 1115

```


su - develop

