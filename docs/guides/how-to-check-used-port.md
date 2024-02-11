## How to check what uses a given port

```sh

PORT = 4500
sudo lsof -nP -i4TCP:$PORT | grep LISTEN

```
