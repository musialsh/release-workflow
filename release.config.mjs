/**
 * @type {import('semantic-release').GlobalConfig}
 */
export default {
  branches: [
    "master",
    {
      name: "alpha",
      prerelease: "alpha",
    },
    {
      name: "beta",
      prerelease: "beta",
    },
  ],
  plugins: [
    "@semantic-release/commit-analyzer",
    "@semantic-release/release-notes-generator",
    "@semantic-release/changelog", // need to be installed
    "@semantic-release/npm",
    "@semantic-release/git", // need to be installed
    "@semantic-release/github",
  ],
  preset: "angular",
  tagFormat: "${version}",
};
