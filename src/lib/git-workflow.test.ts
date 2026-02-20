import { describe, it, expect } from "vitest";
import {
  getFeatureMergeTarget,
  validateMerge,
  getProductionMergeSource,
  validateNewFeatureBranch,
  validateCommitMessage,
  DEVELOP_BRANCH,
  MAIN_BRANCH,
  ALLOWED_COMMIT_TYPES,
} from "./git-workflow";

// ---------------------------------------------------------------------------
// 1. Feature branch merge targets develop
// ---------------------------------------------------------------------------

describe("getFeatureMergeTarget", () => {
  it("returns 'develop' for a valid feature branch", () => {
    expect(getFeatureMergeTarget("feature/add-navbar")).toBe(DEVELOP_BRANCH);
  });

  it("returns 'develop' regardless of the feature name", () => {
    expect(getFeatureMergeTarget("feature/fix-footer")).toBe(DEVELOP_BRANCH);
    expect(getFeatureMergeTarget("feature/podcast-page")).toBe(DEVELOP_BRANCH);
  });

  it("throws when the branch is not a feature branch", () => {
    expect(() => getFeatureMergeTarget("hotfix/urgent")).toThrow(
      "is not a feature branch"
    );
  });
});

// ---------------------------------------------------------------------------
// 2. Merging a feature branch directly to main is rejected
// ---------------------------------------------------------------------------

describe("validateMerge – feature → main guard", () => {
  it("rejects merging a feature branch into main", () => {
    const result = validateMerge("feature/new-header", MAIN_BRANCH);
    expect(result.allowed).toBe(false);
    expect(result.message).toContain("Cannot merge");
    expect(result.message).toContain(MAIN_BRANCH);
  });

  it("allows merging a feature branch into develop", () => {
    const result = validateMerge("feature/new-header", DEVELOP_BRANCH);
    expect(result.allowed).toBe(true);
  });

  it("allows merging develop into main (production flow)", () => {
    const result = validateMerge(DEVELOP_BRANCH, MAIN_BRANCH);
    expect(result.allowed).toBe(true);
  });
});

// ---------------------------------------------------------------------------
// 3. Preparing production merges develop into main
// ---------------------------------------------------------------------------

describe("getProductionMergeSource", () => {
  it("returns 'develop' as the source branch for production", () => {
    expect(getProductionMergeSource()).toBe(DEVELOP_BRANCH);
  });

  it("the production source is not 'main'", () => {
    expect(getProductionMergeSource()).not.toBe(MAIN_BRANCH);
  });
});

// ---------------------------------------------------------------------------
// 4. New feature branch: based on develop, kebab-case convention
// ---------------------------------------------------------------------------

describe("validateNewFeatureBranch", () => {
  it("accepts a valid kebab-case feature branch", () => {
    const result = validateNewFeatureBranch("feature/podcast-page");
    expect(result.valid).toBe(true);
    expect(result.baseBranch).toBe(DEVELOP_BRANCH);
  });

  it("accepts single-word feature names", () => {
    const result = validateNewFeatureBranch("feature/navbar");
    expect(result.valid).toBe(true);
  });

  it("accepts names with numbers", () => {
    const result = validateNewFeatureBranch("feature/v2-redesign");
    expect(result.valid).toBe(true);
  });

  it("rejects branches without the feature/ prefix", () => {
    const result = validateNewFeatureBranch("bugfix/missing-logo");
    expect(result.valid).toBe(false);
    expect(result.message).toContain("feature/");
  });

  it("rejects an empty feature name", () => {
    const result = validateNewFeatureBranch("feature/");
    expect(result.valid).toBe(false);
    expect(result.message).toContain("empty");
  });

  it("rejects non-kebab-case names (uppercase)", () => {
    const result = validateNewFeatureBranch("feature/AddNavbar");
    expect(result.valid).toBe(false);
    expect(result.message).toContain("kebab-case");
  });

  it("rejects names with underscores", () => {
    const result = validateNewFeatureBranch("feature/add_navbar");
    expect(result.valid).toBe(false);
    expect(result.message).toContain("kebab-case");
  });

  it("always returns develop as the base branch", () => {
    const invalid = validateNewFeatureBranch("wrong-name");
    expect(invalid.baseBranch).toBe(DEVELOP_BRANCH);
  });
});

// ---------------------------------------------------------------------------
// 5. Commit message format enforcement
// ---------------------------------------------------------------------------

describe("validateCommitMessage", () => {
  it.each(ALLOWED_COMMIT_TYPES.map((t) => [t]))(
    "accepts allowed type '%s'",
    (type) => {
      const result = validateCommitMessage(`${type}: some description`);
      expect(result.valid).toBe(true);
    }
  );

  it("rejects an unknown commit type", () => {
    const result = validateCommitMessage("wip: save progress");
    expect(result.valid).toBe(false);
    expect(result.message).toContain("Invalid commit type");
    expect(result.message).toContain("wip");
  });

  it("rejects a message without a colon separator", () => {
    const result = validateCommitMessage("added navbar component");
    expect(result.valid).toBe(false);
    expect(result.message).toContain("format");
  });

  it("rejects a message missing the space after the colon", () => {
    const result = validateCommitMessage("feat:no space");
    expect(result.valid).toBe(false);
  });

  it("rejects an empty message", () => {
    const result = validateCommitMessage("");
    expect(result.valid).toBe(false);
  });

  it("rejects a message with only whitespace after the type", () => {
    const result = validateCommitMessage("feat:   ");
    expect(result.valid).toBe(false);
  });
});
