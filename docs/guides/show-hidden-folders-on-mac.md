## How to show hidden files and folders on macbook
By default OSX hides all the files and folders what have `.` (period) at the beginning of their name.
This feature is not causing any issues until you need to check these folders and files such as dotgit folder what is not used by the repository directly, or the utility folders, that are used directly.

The easiest way is to show these files and folders, is to
* open the Finder from the terminal
* disable the feature

```sh

gh repo clone kfarkasHU/wraithlight
cd wraithlight
open .

```

Once this is done, press <kbd>Cmd</kbd> + <kbd>Shift</kbd> + <kbd>.</kbd> (period).
