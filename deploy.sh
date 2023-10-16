echo "Jalankan Bang!!"
npm run build

echo "Deploy into server"
scp -P 2023 -r dist/* ubuntu@cs.usk.ac.id:~/public_html/spkk/

echo "Berhasil!!!!!"
