# Two-Stage Vale Validation System

Your bilingual documentation now has a **two-stage validation system** to ensure content quality at every step:

## 🔄 Validation Flow

```
┌─────────────────────────────────────────────────────────┐
│ Developer creates/modifies docs in PR                   │
└────────────────────┬────────────────────────────────────┘
                     │
         ┌───────────▼───────────┐
         │  STAGE 1: PR CHECK    │
         │  (vale-lint.yml)      │
         └───────────┬───────────┘
         • Runs on every PR update
         • Shows issues inline on PR
         • fail_on_error: false (non-blocking)
         • Fast feedback to developers
                     │
         ┌───────────▼───────────┐
         │   Developer fixes     │
         │  or dismisses issues  │
         └───────────┬───────────┘
                     │
         ┌───────────▼───────────────────┐
         │ Developer pushes to v3.8.0    │
         │ (or version branch)           │
         └───────────┬───────────────────┘
                     │
    ┌────────────────┴────────────────┐
    │                                 │
┌───▼──────────────┐      ┌──────────▼────────┐
│ STAGE 2A:        │      │ STAGE 2B:         │
│ English Deploy   │      │ Chinese Deploy    │
│ (deploy-en.yml)  │      │ (deploy-zh.yml)   │
└────┬─────────────┘      └────┬──────────────┘
│                                 │
Vale Check (strict)        Vale Check (strict)
fail_on_error: true        fail_on_error: true
     │                                 │
  ✅ Passes?                      ✅ Passes?
     │                                 │
     └──────────┬──────────────────────┘
                │
     ┌──────────▼──────────┐
     │ Mike Deploy        │
     │ Publish to GH Pages│
     └───────────────────┘
```

## 📊 Stage Comparison

| Aspect | PR Check (Stage 1) | Deployment (Stage 2) |
|--------|-------------------|----------------------|
| **Trigger** | Every PR update, main branch push | Push to `v*.*.* branch` |
| **Fail Behavior** | Non-blocking (warning only) | **Blocking deployment** |
| **Timing** | Fast, immediate feedback | Before going to production |
| **Reporter** | Inline PR comments | Workflow log + PR check |
| **Purpose** | Developer guidance | Production quality gate |
| **Fail Action** | Dev reviews and fixes | Deployment stops |

## 🎯 When Each Stage Runs

### **Stage 1: PR Check** (`vale-lint.yml`)
- ✅ Opens pull request with EN or ZH changes
- ✅ Pushes commits to a branch with EN or ZH changes
- ✅ Pushes to `main` or `master` branches
- ✅ Updates `.vale.ini` or `styles/` files

**What happens:** Vale issues appear as inline comments, developers see them immediately but can still merge the PR

### **Stage 2: Deployment** (`deploy-en.yml` + `deploy-zh.yml`)
- ✅ Push to version branches (e.g., `v3.8.0`)
- ✅ Triggers final validation before deployment
- ✅ Only if Stage 2A (English) OR Stage 2B (Chinese) runs

**What happens:** 
- Vale runs with `fail_on_error: true`
- ❌ If Vale finds issues → **Deployment STOPS** (prevents bad content from going live)
- ✅ If Vale passes → Proceeds to deployment

## 💡 Why Two Stages?

**Stage 1 (PR):**
- Quick feedback loop keeps developers in flow
- Non-blocking so PRs aren't blocked on linting
- Catches issues early while working

**Stage 2 (Deployment):**
- Final safety net before production
- Prevents bad content from reaching users
- Catches any issues that slipped through

## 🚀 Workflow in Practice

### Scenario 1: Developer opens PR with style issues

```
1. PR created
   ↓ Vale-lint runs (Stage 1)
   ↓ Issues appear as inline comments
   ↓ Dev reads feedback but PR is still mergeable
   ↓ Dev updates docs
   ↓ Vale-lint runs again on new commits
   ✅ Issues resolved
```

### Scenario 2: Deployment with unresolved issues

```
1. PR merged to main
2. Later, developer pushes to v3.8.0
   ↓ Deploy-en.yml triggers
   ↓ Vale check runs (Stage 2, fail_on_error: true)
   ❌ Issues found
   ↓ Deployment STOPS
   ↓ Dev must fix issues before redeploying
```

### Scenario 3: Clean deployment

```
1. Developer ensures docs pass Stage 1
2. Pushes to v3.8.0
   ↓ Deploy workflow triggers
   ↓ Vale passes (Stage 2)
   ✅ Mike deploy runs
   ✅ Content published to GH Pages
```

## 🔧 Local Testing

Before pushing to version branches, test locally:

```bash
# Simulate both stages
./scripts/vale-check.sh

# Or run directly
vale docs-2.0-en docs-2.0-zh
```

If this passes locally, Stage 2 deployment will succeed.

## 📝 Configuration Details

### PR Check (Non-Blocking)
```yaml
# .github/workflows/vale-lint.yml
fail_on_error: false
continue-on-error: true
```
- Issues reported but don't stop the workflow
- Developers get guidance without friction

### Deployment (Blocking)
```yaml
# .github/workflows/deploy-en.yml
fail_on_error: true
```
- Issues STOP the deployment
- Ensures only validated content reaches production

## 🆘 Troubleshooting

### PR Check isn't running
- Check file paths: only triggers on changes to `docs-2.0-en/**`, `docs-2.0-zh/**`, `.vale.ini`, or `styles/**`

### Deployment blocked by Vale
```bash
# Test locally first
./scripts/vale-check.sh

# Fix issues
vale --fix docs-2.0-en

# Or manually review and fix
# Then push again
```

### Want to skip Vale checks temporarily
*(Not recommended)* - You'd need to temporarily modify the workflow files. Better to fix the content and rerun the workflow.

## 📚 Related Documentation

- `VALE_SETUP.md` - Installation and local setup
- `VALE_SUMMARY.md` - Quick reference
- `styles/README.md` - Configuration details
- `.vale.ini` - Main Vale configuration
- `.github/workflows/vale-lint.yml` - PR check workflow
- `.github/workflows/deploy-en.yml` - English deployment workflow
- `.github/workflows/deploy-zh.yml` - Chinese deployment workflow

---

**This two-stage system balances developer experience with production safety. 🎯**
