/**
 * Git workflow validation for Santako Music.
 *
 * Enforces the branching model defined in .cursor/rules/git-feature-workflow.mdc:
 *   feature/* → develop → main → deploy
 */

export const DEVELOP_BRANCH = "develop";
export const MAIN_BRANCH = "main";
export const FEATURE_PREFIX = "feature/";

export const ALLOWED_COMMIT_TYPES = [
  "feat",
  "fix",
  "refactor",
  "style",
  "content",
  "docs",
  "chore",
] as const;

export type CommitType = (typeof ALLOWED_COMMIT_TYPES)[number];

// ---------------------------------------------------------------------------
// Feature merge target
// ---------------------------------------------------------------------------

/**
 * Returns the branch a feature branch should be merged into.
 * Feature branches always target `develop`.
 */
export function getFeatureMergeTarget(branchName: string): string {
  if (!branchName.startsWith(FEATURE_PREFIX)) {
    throw new Error(`"${branchName}" is not a feature branch`);
  }
  return DEVELOP_BRANCH;
}

// ---------------------------------------------------------------------------
// Guard: feature → main is forbidden
// ---------------------------------------------------------------------------

export interface MergeValidation {
  allowed: boolean;
  message: string;
}

/**
 * Validates whether merging `source` into `target` is permitted.
 * Feature branches must never be merged directly into `main`.
 */
export function validateMerge(source: string, target: string): MergeValidation {
  if (source.startsWith(FEATURE_PREFIX) && target === MAIN_BRANCH) {
    return {
      allowed: false,
      message: `⚠️ Cannot merge ${source} directly into ${MAIN_BRANCH}. Merge into ${DEVELOP_BRANCH} first.`,
    };
  }
  return { allowed: true, message: "OK" };
}

// ---------------------------------------------------------------------------
// Production merge
// ---------------------------------------------------------------------------

/**
 * Returns the source branch that should be merged into `main` for production.
 */
export function getProductionMergeSource(): string {
  return DEVELOP_BRANCH;
}

// ---------------------------------------------------------------------------
// New feature branch validation
// ---------------------------------------------------------------------------

const KEBAB_CASE_RE = /^[a-z0-9]+(-[a-z0-9]+)*$/;

export interface BranchValidation {
  valid: boolean;
  baseBranch: string;
  message: string;
}

/**
 * Validates that a new feature branch name follows the `feature/<kebab-case>` convention
 * and returns the correct base branch (`develop`).
 */
export function validateNewFeatureBranch(branchName: string): BranchValidation {
  const baseBranch = DEVELOP_BRANCH;

  if (!branchName.startsWith(FEATURE_PREFIX)) {
    return {
      valid: false,
      baseBranch,
      message: `Branch name must start with "${FEATURE_PREFIX}".`,
    };
  }

  const name = branchName.slice(FEATURE_PREFIX.length);

  if (name.length === 0) {
    return {
      valid: false,
      baseBranch,
      message: "Feature name cannot be empty.",
    };
  }

  if (!KEBAB_CASE_RE.test(name)) {
    return {
      valid: false,
      baseBranch,
      message: `Feature name "${name}" is not valid kebab-case.`,
    };
  }

  return { valid: true, baseBranch, message: "OK" };
}

// ---------------------------------------------------------------------------
// Commit message validation
// ---------------------------------------------------------------------------

export interface CommitValidation {
  valid: boolean;
  message: string;
}

/**
 * Validates a commit message against the format `type: short description`.
 * Only the allowed types are accepted.
 */
export function validateCommitMessage(commitMessage: string): CommitValidation {
  const match = commitMessage.match(/^(\w+):\s+(.+)$/);

  if (!match) {
    return {
      valid: false,
      message: 'Commit message must follow the format "type: short description".',
    };
  }

  const type = match[1];
  const description = match[2];

  if (!(ALLOWED_COMMIT_TYPES as readonly string[]).includes(type)) {
    return {
      valid: false,
      message: `Invalid commit type "${type}". Allowed types: ${ALLOWED_COMMIT_TYPES.join(", ")}.`,
    };
  }

  if (description.trim().length === 0) {
    return {
      valid: false,
      message: "Commit description cannot be empty.",
    };
  }

  return { valid: true, message: "OK" };
}
