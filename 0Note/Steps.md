# setup hasura
## install hasura

https://hasura.io/docs/latest/hasura-cli/install-hasura-cli/
https://github.com/hasura/graphql-engine/releases
https://hasura.io/docs/latest/hasura-cli/quickstart/


1. copy hasura.exe to b8-hasura-auth0/hasura

2. cd /hasura folder, run: 
```sh
hasura init .
```
3. curl https://raw.githubusercontent.com/hasura/graphql-engine/master/install-manifests/docker-compose/docker-compose.yaml > docker-compose.yaml
or copy demo-hasura/docker-compose.yaml to b8-hasura-auth0


docker compose up -d
```

## hasura command line

```sh
hasura console 

.\hasura.exe console --admin-secret "b8dev1234"

# connect hasura to postgresql

```

## add to git
```sh
git init
git add .
git commit -m "Initial commit"
git remote add origin git@github.com:doremon88/b8-hasura-auth0.git
git branch -M main
git push -u origin main

cd c:/Users/doremon/.ssh

ssh-agent bash

ssh-add c:/Users/doremon/.ssh/doremon
```

## hasura command line
```sh
hasura actions - Manage Hasura Actions
hasura completion - Generate auto-completion code
hasura console - Open the Console to manage the database and try out APIs
hasura deploy - (PREVIEW) Utility command to apply Hasura Metadata & database migrations to graphql-engine
hasura init - Initialize a new Hasura GraphQL Engine project
hasura metadata - Manage Hasura GraphQL Engine Metadata saved in the database
hasura migrate - Manage migrations on the database
hasura plugins - Manage plugins for the CLI
hasura scripts - Execute helper scripts to manage Hasura Projects
hasura seed - Manage seed data
hasura update-cli - Update the CLI to latest or a specific version
hasura version - Print the CLI version

hasura metadata apply - Apply Hasura Metadata on a database
hasura metadata clear - Clear Hasura GraphQL Engine Metadata on the database
hasura metadata diff - (PREVIEW) Show a highlighted diff of the Hasura Metadata
hasura metadata export - Export Hasura GraphQL Engine Metadata from the database
hasura metadata inconsistency - Manage inconsistent objects in the Hasura Metadata
hasura metadata reload - Reload Hasura GraphQL Engine schema to pick up changes in any underlying data sources (database or remote schema)
https://hasura.io/docs/latest/migrations-metadata-seeds/manage-metadata/

hasura migrate apply - Apply migrations on the database
hasura migrate create - Create sql files required for a migration
hasura migrate delete - (PREVIEW) clear migrations from local project and server
hasura migrate squash - (PREVIEW) Squash multiple migrations into a single one
hasura migrate status - Display current status of migrations on a database
https://hasura.io/docs/latest/migrations-metadata-seeds/manage-migrations/

hasura seed apply - Apply seed data
hasura seed create - Create a new seed file
https://hasura.io/docs/latest/migrations-metadata-seeds/manage-seeds/

```

## export metadata
```sh
hasura metadata export --admin-secret "<admin-secret>"
.\hasura.exe metadata export --admin-secret "b8dev1234"

```