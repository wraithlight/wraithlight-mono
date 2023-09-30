## `test-report`

The monorepo comes with a configured all-in-one test reporter. To make it work, you have to clone the repository, install its dependencies in the `applications` root folder by running `yarn` command, and build all the packages by using `yarn build` command.

```sh

gh repo clone wraithlight/wraithlight-mono
cd wraithlight/applications
yarn
yarn build

```

Once it is done you can run `yarn test-report` command. The command itself will run `yarn test:coverage` to generate up-to-date istanbul reports, then it uses MustacheJS to populate the information to the template file inside the `.test-reports` folder.
When the mustache generation is done, the script will use `open-cli` to open the newly generated `index.html` in your default browser.

The following files will be generated during this process:
* `.test-reports/data.json`
* `.test-reports/index.html`

These files are added to the root level `.gitignore` file.

### Known issue
* If there are no tests within a package **AND** jest is configured to pass if there are no tests, then no reporting will be generated. This issue is happening because istanbul accepts empty lcov-report data during report generation.

Since there is no way to test interfaces in `jest` and it would not make sense at all we are skipping this for now.
Same applies to const files.

In case when the package contains types and constants only, add `"passWithNoTests": true` to the respective `jest.config.js`.