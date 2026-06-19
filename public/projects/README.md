# Project Logos / Images Directory

Place your project image files (e.g., `.png`, `.jpg`, `.svg`) in this directory.

To use them in your `App.tsx`, simply update the `iconUrl` in the `PROJECTS` array like this:

```typescript
{
  iconUrl: "/projects/my-project-logo.png", // Example
  title: "My Project",
  ...
}
```

Since this is the `public` folder, any file placed here can be accessed directly from the root path `/` in your code.
