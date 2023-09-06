## How to clean up your local docker cache
Sometimes docker eats up all the memory that is available. This is caused, because docker caches everything that has been built with it.

To clean up some memory, you have to run the following commands.

```sh

docker system df        # which can show disk usage and size of 'Build Cache'
docker image prune      # add --force to not prompt for confirmation
docker container prune  # add --force to not prompt for confirmation

```
