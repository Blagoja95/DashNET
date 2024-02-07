# DashNET user dashboard

WELCOME

## IDEAS

[Figma UI Design](https://www.figma.com/file/5gYGYXs1BT93FdimScGZBo/DashNET?type=design&node-id=0%3A1&mode=design&t=Qkd4mO0Bza1LK9kD-1)

## Getting Started

### Using docker compose:

#### Basic use

1. Open terminal

2. Go to this project root (example: C:\Users\userName\DashNET)

3. copy .env file from existing example .env.example using command:

```bash
cp .env.example .env
```

4. Start docker compose using command:

```bash
docker compose --profile default up -d --build
```

5. Go to your browser -> type localhost:3000 url bar and press enter

To stop all services execute following command in project root;

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
React front-end: `react` <br>
MySQL: 			 `mysql` <br>
Spring + MySQL:  `spring-mysql` <br>
phpMyA + MySQL:  `mysql-admin` <br>
Spring + phpMyA + MySQL:  `spring-mysql-admin` <br>
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

Create [Swagger](https://swagger.io/)
