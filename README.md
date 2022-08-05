# mocktestBE

![desain v1](https://user-images.githubusercontent.com/96077141/183069500-82aca668-bba5-4a25-9b1b-304b2b70adec.png)

no 1. Microservice akan terdiri dari
  - Authentikasi menggunakan temporary token/jwt yg di dapat setelah melakukan Login
  - Searching delivery service berdasarkan jarak terdekat
  - Confirmasi order dengan menggunakan PIN
  - Service rating

Akan di code menggunakan ReactJS dan NodeJS, untuk database akan menggunakan postgresSQL. 

no 2. Bagaimana menangani keamanan dalam pengiriman data (backend dan mobile apps)
pada sistem diatas.
  - Menggunakan authentikasi untuk mengenali user dan authorization untuk memberikan ijin.
  - Memberikan role tertentu untuk akses sebuah data
  - Menggunakan JWT / OAuth2
  - decrypt semua data kemuadian encrypt ketika data dibutuhkan
  
no 3. Buatlah sebuah service RESTFul API berdasarkan dokumentasi apiary berikut. (https://testbinar.docs.apiary.io/)
      
      Guide !
      1. Clone repo ini
      2. npm install pada terminal
      3. setting data base pada postgresSQL (buat database, ganti nama database pada file config/config.json, cukup ganti yang ada di "development"
         pastikan username, password adalah yang ada di postgres anda. 
      4. pada terminal masukan command "npx sequelize-cli db:migrate" setelah itu "npx sequelize-cli db:seed:all"
      5. lalu ketik "npm start" untuk menjalankan applikasi.
      6. gunakan postman untuk test aplikasi ini.
 
 POSTMAN TEST !
 REGISTER 
![register](https://user-images.githubusercontent.com/96077141/183074745-39b7af42-1306-4124-9e0b-85255240d33e.PNG)

LOGIN
![login](https://user-images.githubusercontent.com/96077141/183074776-dd3f5114-9725-45e7-a49e-7f8e85278920.PNG)

SHOWALLDATA (req header authorization dan accestoken di dapat saat login)
![showalldata](https://user-images.githubusercontent.com/96077141/183075047-872ca189-8c94-41da-b297-c62621c5c6b2.PNG)

SHOWONEDATA (req header authorization dan accestoken di dapat saat login)
![showonedata](https://user-images.githubusercontent.com/96077141/183075161-f937b7c9-70ef-4430-9e13-86ef35b7d8d0.PNG)

CREATE/ADD DATA (req header authorization dan accestoken di dapat saat login dan juga req.body untuk datanya)
![adddata](https://user-images.githubusercontent.com/96077141/183075339-7e2f00b1-ac4b-4dec-a846-a62373ec4f90.PNG)

UPDATE DATA (req header authorization dan accestoken di dapat saat login dan juga req.body untuk data yang di update)
![updatedata](https://user-images.githubusercontent.com/96077141/183075517-95affe9b-b669-4ffc-a6f3-e9632e9c344f.PNG)

DELETE DATA (req header authorization dan accestoken di dapat saat login)
![deletedata](https://user-images.githubusercontent.com/96077141/183075643-e52066d3-5b66-42c9-aac1-fd906a5b6b0e.PNG).

v2 Test(req header authorization dan accestoken di dapat saat login)
![v2test](https://user-images.githubusercontent.com/96077141/183075762-50fd2baf-c354-4045-97dd-896b3aab35ed.PNG)

4. Dari dokumen https://testbinar.docs.apiary.io/, menurut anda, apakah ada desian API
yang kurang maupun keliru? Jika ada, tuliskan kekurangan-kekurangan desain tersebut
dan bagaimana seharusnya dokumentasi itu ditulis.

Sudah cukup jelas dan mudah dimengerti



