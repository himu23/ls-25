(venv) himu23@ideapad3:~/Desktop/projects/ls25/fullStack/ytclone$ deactivate
himu23@ideapad3:~/Desktop/projects/ls25/fullStack/ytclone$ pip install djangorestframework django-cors-headers
error: externally-managed-environment

× This environment is externally managed
╰─> To install Python packages system-wide, try apt install
    python3-xyz, where xyz is the package you are trying to
    install.
    
    If you wish to install a non-Debian-packaged Python package,
    create a virtual environment using python3 -m venv path/to/venv.
    Then use path/to/venv/bin/python and path/to/venv/bin/pip. Make
    sure you have python3-full installed.
    
    If you wish to install a non-Debian packaged Python application,
    it may be easiest to use pipx install xyz, which will manage a
    virtual environment for you. Make sure you have pipx installed.
    
    See /usr/share/doc/python3.12/README.venv for more information.

note: If you believe this is a mistake, please contact your Python installation or OS distribution provider. You can override this, at the risk of breaking your Python installation or OS, by passing --break-system-packages.
hint: See PEP 668 for the detailed specification.
himu23@ideapad3:~/Desktop/projects/ls25/fullStack/ytclone$ tree
.

0 directories, 0 files
himu23@ideapad3:~/Desktop/projects/ls25/fullStack/ytclone$ python3 -m venv venv
himu23@ideapad3:~/Desktop/projects/ls25/fullStack/ytclone$ source venv/bin/activate
(venv) himu23@ideapad3:~/Desktop/projects/ls25/fullStack/ytclone$ pip install djangorestframework django-cors-headers
Collecting djangorestframework
  Using cached djangorestframework-3.16.0-py3-none-any.whl.metadata (11 kB)
Collecting django-cors-headers
  Using cached django_cors_headers-4.7.0-py3-none-any.whl.metadata (16 kB)
Collecting django>=4.2 (from djangorestframework)
  Using cached django-5.2.4-py3-none-any.whl.metadata (4.1 kB)
Collecting asgiref>=3.6 (from django-cors-headers)
  Using cached asgiref-3.9.0-py3-none-any.whl.metadata (9.3 kB)
Collecting sqlparse>=0.3.1 (from django>=4.2->djangorestframework)
  Using cached sqlparse-0.5.3-py3-none-any.whl.metadata (3.9 kB)
Using cached djangorestframework-3.16.0-py3-none-any.whl (1.1 MB)
Using cached django_cors_headers-4.7.0-py3-none-any.whl (12 kB)
Using cached asgiref-3.9.0-py3-none-any.whl (23 kB)
Using cached django-5.2.4-py3-none-any.whl (8.3 MB)
Using cached sqlparse-0.5.3-py3-none-any.whl (44 kB)
Installing collected packages: sqlparse, asgiref, django, djangorestframework, django-cors-headers
Successfully installed asgiref-3.9.0 django-5.2.4 django-cors-headers-4.7.0 djangorestframework-3.16.0 sqlparse-0.5.3
(venv) himu23@ideapad3:~/Desktop/projects/ls25/fullStack/ytclone$ pip install djangorestframework django-cors-headers
Requirement already satisfied: djangorestframework in ./venv/lib/python3.12/site-packages (3.16.0)
Requirement already satisfied: django-cors-headers in ./venv/lib/python3.12/site-packages (4.7.0)
Requirement already satisfied: django>=4.2 in ./venv/lib/python3.12/site-packages (from djangorestframework) (5.2.4)
Requirement already satisfied: asgiref>=3.6 in ./venv/lib/python3.12/site-packages (from django-cors-headers) (3.9.0)
Requirement already satisfied: sqlparse>=0.3.1 in ./venv/lib/python3.12/site-packages (from django>=4.2->djangorestframework) (0.5.3)
(venv) himu23@ideapad3:~/Desktop/projects/ls25/fullStack/ytclone$ pip install django djangorestframework django-cors-headers
Requirement already satisfied: django in ./venv/lib/python3.12/site-packages (5.2.4)
Requirement already satisfied: djangorestframework in ./venv/lib/python3.12/site-packages (3.16.0)
Requirement already satisfied: django-cors-headers in ./venv/lib/python3.12/site-packages (4.7.0)
Requirement already satisfied: asgiref>=3.8.1 in ./venv/lib/python3.12/site-packages (from django) (3.9.0)
Requirement already satisfied: sqlparse>=0.3.1 in ./venv/lib/python3.12/site-packages (from django) (0.5.3)
(venv) himu23@ideapad3:~/Desktop/projects/ls25/fullStack/ytclone$ django-admin startproject backend .
(venv) himu23@ideapad3:~/Desktop/projects/ls25/fullStack/ytclone$ python manage.py startapp api
(venv) himu23@ideapad3:~/Desktop/projects/ls25/fullStack/ytclone$ python manage.py makemigrations
python manage.py migrate
Migrations for 'api':
  api/migrations/0001_initial.py
    + Create model Video
Operations to perform:
  Apply all migrations: admin, api, auth, contenttypes, sessions
Running migrations:
  Applying contenttypes.0001_initial... OK
  Applying auth.0001_initial... OK
  Applying admin.0001_initial... OK
  Applying admin.0002_logentry_remove_auto_add... OK
  Applying admin.0003_logentry_add_action_flag_choices... OK
  Applying api.0001_initial... OK
  Applying contenttypes.0002_remove_content_type_name... OK
  Applying auth.0002_alter_permission_name_max_length... OK
  Applying auth.0003_alter_user_email_max_length... OK
  Applying auth.0004_alter_user_username_opts... OK
  Applying auth.0005_alter_user_last_login_null... OK
  Applying auth.0006_require_contenttypes_0002... OK
  Applying auth.0007_alter_validators_add_error_messages... OK
  Applying auth.0008_alter_user_username_max_length... OK
  Applying auth.0009_alter_user_last_name_max_length... OK
  Applying auth.0010_alter_group_name_max_length... OK
  Applying auth.0011_update_proxy_permissions... OK
  Applying auth.0012_alter_user_first_name_max_length... OK
  Applying sessions.0001_initial... OK
(venv) himu23@ideapad3:~/Desktop/projects/ls25/fullStack/ytclone$ python manage.py createsuperuser
Username (leave blank to use 'himu23'): 
Email address: 
Password: 
Password (again): 
This password is too short. It must contain at least 8 characters.
This password is too common.
This password is entirely numeric.
Bypass password validation and create user anyway? [y/N]: y
Superuser created successfully.
(venv) himu23@ideapad3:~/Desktop/projects/ls25/fullStack/ytclone$ python manage.py runserver
Watching for file changes with StatReloader
Performing system checks..



(venv) himu23@ideapad3:~/Desktop/projects/ls25/fullStack/ytclone$ python manage.py makemigrations
python manage.py migrate
Migrations for 'api':
  api/migrations/0003_video_category.py
    + Add field category to video
Operations to perform:
  Apply all migrations: admin, api, auth, authtoken, contenttypes, sessions
Running migrations:
  Applying api.0003_video_category... OK
(venv) himu23@ideapad3:~/Desktop/projects/ls25/fullStack/ytclone$ curl "http://127.0.0.1:8000/api/videos/?category=education"
curl: (7) Failed to connect to 127.0.0.1 port 8000 after 0 ms: Couldn't connect to server
(venv) himu23@ideapad3:~/Desktop/projects/ls25/fullStack/ytclone$ curl --version
curl 8.5.0 (x86_64-pc-linux-gnu) libcurl/8.5.0 OpenSSL/3.0.13 zlib/1.3 brotli/1.1.0 zstd/1.5.5 libidn2/2.3.7 libpsl/0.21.2 (+libidn2/2.3.7) libssh/0.10.6/openssl/zlib nghttp2/1.59.0 librtmp/2.3 OpenLDAP/2.6.7
Release-Date: 2023-12-06, security patched: 8.5.0-2ubuntu10.6
Protocols: dict file ftp ftps gopher gophers http https imap imaps ldap ldaps mqtt pop3 pop3s rtmp rtsp scp sftp smb smbs smtp smtps telnet tftp
Features: alt-svc AsynchDNS brotli GSS-API HSTS HTTP2 HTTPS-proxy IDN IPv6 Kerberos Largefile libz NTLM PSL SPNEGO SSL threadsafe TLS-SRP UnixSockets zstd
(venv) himu23@ideapad3:~/Desktop/projects/ls25/fullStack/ytclone$ sudo apt install curl
[sudo] password for himu23: 
Reading package lists... Done
Building dependency tree... Done
Reading state information... Done
curl is already the newest version (8.5.0-2ubuntu10.6).
0 upgraded, 0 newly installed, 0 to remove and 2 not upgraded.
(venv) himu23@ideapad3:~/Desktop/projects/ls25/fullStack/ytclone$ curl http://localhost:8000/api/videos/
curl: (7) Failed to connect to localhost port 8000 after 0 ms: Couldn't connect to server
(venv) himu23@ideapad3:~/Desktop/projects/ls25/fullStack/ytclone$ deactivate
himu23@ideapad3:~/Desktop/projects/ls25/fullStack/ytclone$ npx create-react-app frontend

Creating a new React app in /home/himu23/Desktop/projects/ls25/fullStack/ytclone/frontend.

Installing packages. This might take a couple of minutes.
Installing react, react-dom, and react-scripts with cra-template...


added 1322 packages in 1m

269 packages are looking for funding
  run `npm fund` for details

Installing template dependencies using npm...

added 18 packages, and changed 1 package in 14s

269 packages are looking for funding
  run `npm fund` for details
Removing template package using npm...


removed 1 package, and audited 1340 packages in 3s

269 packages are looking for funding
  run `npm fund` for details

9 vulnerabilities (3 moderate, 6 high)

To address all issues (including breaking changes), run:
  npm audit fix --force

Run `npm audit` for details.

Success! Created frontend at /home/himu23/Desktop/projects/ls25/fullStack/ytclone/frontend
Inside that directory, you can run several commands:

  npm start
    Starts the development server.

  npm run build
    Bundles the app into static files for production.

  npm test
    Starts the test runner.

  npm run eject
    Removes this tool and copies build dependencies, configuration files
    and scripts into the app directory. If you do this, you can’t go back!

We suggest that you begin by typing:

  cd frontend
  npm start

Happy hacking!
himu23@ideapad3:~/Desktop/projects/ls25/fullStack/ytclone$ cd frontend
himu23@ideapad3:~/Desktop/projects/ls25/fullStack/ytclone/frontend$ npm install axios react-router-dom bootstrap 
npm WARN EBADENGINE Unsupported engine {
npm WARN EBADENGINE   package: 'react-router-dom@7.6.3',
npm WARN EBADENGINE   required: { node: '>=20.0.0' },
npm WARN EBADENGINE   current: { node: 'v18.19.1', npm: '9.2.0' }
npm WARN EBADENGINE }
npm WARN EBADENGINE Unsupported engine {
npm WARN EBADENGINE   package: 'react-router@7.6.3',
npm WARN EBADENGINE   required: { node: '>=20.0.0' },
npm WARN EBADENGINE   current: { node: 'v18.19.1', npm: '9.2.0' }
npm WARN EBADENGINE }

added 9 packages, and audited 1349 packages in 15s

271 packages are looking for funding
  run `npm fund` for details

9 vulnerabilities (3 moderate, 6 high)

To address all issues (including breaking changes), run:
  npm audit fix --force

Run `npm audit` for details.
himu23@ideapad3:~/Desktop/projects/ls25/fullStack/ytclone/frontend$ npm install react-icons
npm WARN EBADENGINE Unsupported engine {
npm WARN EBADENGINE   package: 'react-router@7.6.3',
npm WARN EBADENGINE   required: { node: '>=20.0.0' },
npm WARN EBADENGINE   current: { node: 'v18.19.1', npm: '9.2.0' }
npm WARN EBADENGINE }
npm WARN EBADENGINE Unsupported engine {
npm WARN EBADENGINE   package: 'react-router-dom@7.6.3',
npm WARN EBADENGINE   required: { node: '>=20.0.0' },
npm WARN EBADENGINE   current: { node: 'v18.19.1', npm: '9.2.0' }
npm WARN EBADENGINE }

added 1 package, and audited 1350 packages in 13s

271 packages are looking for funding
  run `npm fund` for details

9 vulnerabilities (3 moderate, 6 high)

To address all issues (including breaking changes), run:
  npm audit fix --force

Run `npm audit` for details.
himu23@ideapad3:~/Desktop/projects/ls25/fullStack/ytclone/frontend$ ls
node_modules  package-lock.json  README.md
package.json  public             src
himu23@ideapad3:~/Desktop/projects/ls25/fullStack/ytclone/frontend$ cd src/
himu23@ideapad3:~/Desktop/projects/ls25/fullStack/ytclone/frontend/src$ mkdir components pages
himu23@ideapad3:~/Desktop/projects/ls25/fullStack/ytclone/frontend/src$ ls
App.css  App.js  components  index.css  index.js  pages
himu23@ideapad3:~/Desktop/projects/ls25/fullStack/ytclone/frontend/src$ cd components/
himu23@ideapad3:~/Desktop/projects/ls25/fullStack/ytclone/frontend/src/components$ touch Navbar.js
himu23@ideapad3:~/Desktop/projects/ls25/fullStack/ytclone/frontend/src/components$ touch Sidebar.js
himu23@ideapad3:~/Desktop/projects/ls25/fullStack/ytclone/frontend/src/components$ cd ..
himu23@ideapad3:~/Desktop/projects/ls25/fullStack/ytclone/frontend/src$ ls
App.css  App.js  components  index.css  index.js  pages
himu23@ideapad3:~/Desktop/projects/ls25/fullStack/ytclone/frontend/src$ cd pages/
himu23@ideapad3:~/Desktop/projects/ls25/fullStack/ytclone/frontend/src/pages$ touch Home.js
himu23@ideapad3:~/Desktop/projects/ls25/fullStack/ytclone/frontend/src/pages$ touch Login.js
himu23@ideapad3:~/Desktop/projects/ls25/fullStack/ytclone/frontend/src/pages$ Register.js
Register.js: command not found
himu23@ideapad3:~/Desktop/projects/ls25/fullStack/ytclone/frontend/src/pages$ touch Register.js
himu23@ideapad3:~/Desktop/projects/ls25/fullStack/ytclone/frontend/src/pages$ touch Upload.js
himu23@ideapad3:~/Desktop/projects/ls25/fullStack/ytclone/frontend/src/pages$ touch VideoPlayer.js
himu23@ideapad3:~/Desktop/projects/ls25/fullStack/ytclone/frontend/src/pages$ touch Dashboard.js
himu23@ideapad3:~/Desktop/projects/ls25/fullStack/ytclone/frontend/src/pages$ 