#ng build --prod --output-path docs --base-href /angularPrimeng/
docker stop web
docker run -it --rm -d -p 8080:80 --name web -v /data/dev/angular/angularPrimeng/docs/:/usr/share/nginx/html nginx
