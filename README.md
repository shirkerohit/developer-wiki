# dev-wiki
This is just a beta version of overall Idea. A site of index cureated by developer for developers.

# #Contribution Guide.

# - Add new Resource link.
- Identify Category of link and please verify the link and ensure Its valid and working (No Ads please) We have now only 5 categories (feel free to suggest more..)
1. Cources.
2. Documentation.
3. Hostings
4. Resources (Icons,Images...)
5. Tool (Online IDE or more..)

- Look for `/src/data` folder and append your category if needed as
 `{
    "name": "Tools"
 `},

 or if you wish to use existing category note the value of key `name` eg. resources

- Look for the JSON file with the Identified category appended with "Links" as postfix if you wish to use the existing one.
eg. resourcesLinks.json

OR

- Add new file with category name and append the file name with Links (eg. newResourceLink) (The link prefix is just convention here.. nothing useful)

- Append your link with following attributes in following format.
eg.
    {
        "name": "Laravel",
        "url": "https://laravel.com",
        "category": "documentation",
        "description": "Official Laravel guide."
    }

# - Register you Category for Drop-down:

-  Open file `Store/index.js` and Import the new category and register under stage object.
 `state: {
    tools, hosting, resources, courses, documentation
  }`


## #Project Setup.
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

Badges!
[![Netlify Status](https://api.netlify.com/api/v1/badges/2d90dc16-3e1f-4d37-84d8-97b6ad689aa2/deploy-status)](https://app.netlify.com/sites/dev-wiki/deploys)
