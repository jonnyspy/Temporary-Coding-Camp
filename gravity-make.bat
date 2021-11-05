@echo off
echo "-------------------------------------------------------------------"
echo "|                                                                 |"
echo "|                      COOL PROJECT MAKER !!!!                    |"
echo "|                                                                 |"
echo "-------------------------------------------------------------------"
echo
echo This will make the project, are you sure you want to?
pause
type gravity1.js gravity2.js gravity3.js > gravity.js
echo Done!
pause
copy gravity.js "C:\Program Files (x86)\Apache Software Foundation\Tomcat 10.0\webapps\ROOT\gravity.js" /y