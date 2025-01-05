# Dev Resources

Welcome to the Dev Resources project! This project aims to provide a curated list of development resources including tools, hosting services, documentation, and courses.

## Categories

- **tools**: Various development tools.
- **hosting**: Hosting services for your projects.
- **documentation**: Useful documentation for developers.
- **courses**: Educational courses to enhance your skills.

## Contributing

We welcome contributions from the community. Please follow the guidelines in the `CONTRIBUTING.md` file to submit your contributions.

### Adding a New Category Contribution

To add a new category contribution, follow these steps:

1. **Fork the repository**: Create a fork of the repository to work on your changes.
2. **Create a branch**: Create a new branch for your feature or bug fix.
3. **Add your contribution**:
    - Navigate to the `src/data/resources` directory.
    - Append your contribution in the following JSON format:
      ```js
      export default [
          {
              title: "API Name",
              description: "Brief description of the API.",
              category: "tools",
              contributor: {
                  name: "yourname",
                  github: "https://github.com/yourgithub"
              },
              url: "https://api.example.com",
              tags: ["api", "development", "tools"]
          }
      ];
      ```
IMPORTANT : The name of the category should be either of the shared one.
4. **Test the changes**: Ensure you test your changes locally.
5. **Submit a pull request**: Submit a pull request with a clear description of your changes.
