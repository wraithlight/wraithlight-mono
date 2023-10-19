### How to PhpMyAdmin
PhpMyAdmin is a very useful tool for manage MySQL server instances. It is written in PHP decades ago, but still does its job. To set up the utility properly, you have to edit its configuration.

The configuration file is located in `./.tools/phpmyadmin.sh`. The file contains three globals.
* `TARGET_CONTAINER`
* `CONTAINER_NAME`
* `NETWORK_NAME`

Right now only the `TARGET_CONTAINER` should be modified according to the requirements. Please check out the [related docs](../urls/database.md) for proper SQL Server addresses.

Once the setup is done, you can run the instance by running the following scripts.

```sh

gh repo clone wraithlight/wraithlight-mono
cd wraithlight/.tools
sh ./phpmyadmin.sh

```

Once the container is up, please visit [http://localhost:8999](http://localhost:8999) according to the [docs](../urls/tools.md).
