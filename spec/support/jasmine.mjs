export default {
    spec_dir: "src",
    spec_files: ["**/*[sS]pec.?(m)js"],
    helpers: ["src/bootstrap.ts"],
    env: {
        stopSpecOnExpectationFailure: false,
        random: true,
        forbidDuplicateNames: true,
    },
};
