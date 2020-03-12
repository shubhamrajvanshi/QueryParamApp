# QueryParamApp
Serves three types of files

* linux.sh         - Serves shell script 
* linuxFail.sh     - Serves shell script that exits with error
* windows.ps1      - Serves powershell script 
* windowsFail.ps1  - Serves powershell script that exits with error
* zipped.zip       - Servers above all file as a zip file

when query params are passed to it in the following format

```
http://localhost:8080/linux.sh?r=1&g=2&a=3&v=4&e=test
http://localhost:8080/linuxFail.sh?r=1&g=2&a=3&v=4&e=test
http://localhost:8080/windows.ps1?r=1&g=2&a=3&v=4&e=test
http://localhost:8080/windowsFail.ps1?r=1&g=2&a=3&v=4&e=test
http://localhost:8080/zipped.zip?r=1&g=2&a=3&v=4&e=test
```