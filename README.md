# DashNET user dashboard

WELCOME

## IDEAS

[Figma UI Design](https://www.figma.com/file/5gYGYXs1BT93FdimScGZBo/DashNET?type=design&node-id=0%3A1&mode=design&t=Qkd4mO0Bza1LK9kD-1)

## Getting Started

### Using docker compose:

#### Basic use
To start all services
```bash
# (sudo DOCKER_BUILDKIT=0)
docker-compose --profile default up -d --build
```

To stop all services

```bash
# (sudo)
docker compose --profile default down

```

#### Using profiles

Running specific services can be done using predefined profiles.

```bash
docker-compose up # start all services
docker-compose --profile spring up # start the spring-be service
docker-compose --profile react up # nodejs services serving fe
docker-compose --profile no-admin up -d # to run all services except phpMyAdmin. Run compose in detached mode (-d)
```

Profiles: <br>

Spring back-end: `spring` <br>
React front-end: `react` <br>
MySQL: 			 `mysql` <br>
Spring + MySQL:  `spring-mysql` <br>
phpMyA + MySQL:  `admin-mysql` <br>

#### Restart service
Restart specific service or profile using profile name
`docker compose --profile ${profile-name} restart`

Tomcat hot reload workaround
```bash
docker compose --profile spring restart
```

```bash
docker compose restart spring-be
```

## API documentation

Create [Swagger](https://swagger.io/)