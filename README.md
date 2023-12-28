# DashNET user dashboard

WELCOME

## IDEAS

[Figma UI Design](https://www.figma.com/file/5gYGYXs1BT93FdimScGZBo/DashNET?type=design&node-id=0%3A1&mode=design&t=Qkd4mO0Bza1LK9kD-1)

## Getting Started

REQUIREMENT:
		[DOCKER](https://www.docker.com/products/docker-desktop/)

### Using docker compose:

#### Basic use
QA:
	IN TERMINAL RUN FOLLOWING COMMAND

```bash
docker compose --profile QA up -d --build
```

WHEN DONE TURN OFF SERVICES

```bash
docker compose --profile QA DOWN
```

To start all services use `default` profile

```bash
# sudo DOCKER_BUILDKIT=0
docker compose --profile default up -d --build
```

To stop all services

```bash
# sudo
docker compose --profile default down

```

#### Using profiles

Running specific services can be done using predefined profiles.

```bash
docker compose --profile default up -d --build # start all services. Run compose in detached mode (-d)
docker compose --profile spring-mysql up -d --build # start the spring-be and mysqldb services (spring-be depends on mysqldb service)
docker compose --profile react up -d --build # nodejs services serving fe
docker compose --profile no-admin up -d --build # to run all services except phpMyAdmin.
```

Profiles: <br>

Run all services: `default` <br>
Run only services necessary for testing: `QA` <br>
React front-end: `react` <br>
MySQL: 			 `mysql` <br>
Spring + MySQL:  `spring-mysql` <br>
phpMyA + MySQL:  `admin-mysql` <br>
Spring + phpMyA + MySQL:  `spr-mysql-adm` <br>
Spring + Swagger + MySQL:  `'swg-spr-mysql'` <br>
Spring + Swagger + phpMyA + MySQL:  `'swg-spr-adm-mysql'` <br>
default but w/o myPHPAdmin:  `no-admin` <br>

#### Restart service
Restart specific service or profile using profile name
`docker compose --profile ${profile-name} restart`

#### Stop and remove services and networks
`docker compose --profile ${profile-name} down`

Tomcat hot reload workaround
Just re-run `up` command
```bash
docker compose --profile spring-mysql up -d --build
```

### Access to MySQL container

In CLI:

```bash
docker exec -it dashNet-mysql mysql -u <USERNAME> -p
```

Change < USERNAME > to existing user role.
After command is executed you'll be prompted to enter password.

Or w/ GUI you can go to:
1. Docker Desktop app
2. Press Containers tab
3. Open dashNET cluster
4. Enter mysqldb container
5. Press Exec tab
6. type `mysql -u <USERNAME> -p` press `ENTER`
7. then type `<PASSWORD>` and hit `ENTER` again

## API documentation

In CLI start services profile `swg-spr-mysql` :

```bash
docker compose --profile swg-spr-mysql up -d --build
```

THEN in browser open following links: <br>
<br>
To read and use API documentation: [SWAGGER UI](http//localhost:81) <BR>
To edit API documentation: [SWAGGER__EDITOR](http//localhost:82)

OR open local [swagger.yml](swagger.yml) file: