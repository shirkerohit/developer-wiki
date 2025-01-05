# Dev Resources

Welcome to the Dev Resources project! This project aims to provide a curated list of development resources including tools, hosting services, documentation, and courses.

## Categories

- **Tools**: Various development tools.
- **Hosting**: Hosting services for your projects.
- **Documentation**: Useful documentation for developers.
- **Courses**: Educational courses to enhance your skills.

## Contributing

We welcome contributions from the community. Please follow the guidelines in the `CONTRIBUTING.md` file to submit your contributions.

### Adding a New Category Contribution

To add a new category contribution, follow these steps:

1. **Fork the repository**: Create a fork of the repository to work on your changes.
2. **Create a branch**: Create a new branch for your feature or bug fix.
3. **Add your contribution**:
    - Navigate to the `src/data` directory.
    - Create a new file for your category if it doesn't exist. For example, if you are adding a new category called "APIs", create a file named `apis.js`.
    - Add your contribution in the following JSON format:
      ```js
      export default [
          {
              title: "API Name",
              description: "Brief description of the API.",
              category: "APIs",
              contributor: {
                  name: "yourname",
                  github: "https://github.com/yourgithub"
              },
              url: "https://api.example.com",
              tags: ["api", "development", "tools"]
          }
      ];
      ```
4. **Update the README**: Ensure that the `README.md` file is up-to-date with your changes.
5. **Submit a pull request**: Submit a pull request with a clear description of your changes.

## Reading the README

The `README.md` file is located in the `src/data` directory. You can read its content and include it in your components as needed.