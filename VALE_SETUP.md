# Vale Setup Guide for Bilingual Documentation

## Overview

Vale has been configured for your bilingual NebulaDB documentation to ensure consistent style, terminology, and formatting across both English and Chinese content.

## What's New

### Files Created

```
.vale.ini                              # Main Vale configuration
styles/
  ├── README.md                        # Vale configuration documentation
  ├── Bilingual/
  │   ├── Vocab.txt                   # Bilingual terminology vocabulary
  │   └── meta.json                   # Bilingual style metadata
  ├── English/
  │   └── meta.json                   # English style rules
  └── Chinese/
      └── meta.json                   # Chinese style rules

.github/workflows/
  └── vale-lint.yml                   # GitHub Actions workflow for automated linting

scripts/
  └── vale-check.sh                   # Local Vale testing script
```

### Key Features

✅ **Bilingual Terminology** - Ensures consistent capitalization and spelling of key terms (NebulaDB, nGQL, NebulaStudio, etc.)

✅ **Language-Specific Rules** - Separate rules for English and Chinese documentation

✅ **Automated Checks** - GitHub workflow runs Vale on every PR and push

✅ **Local Testing** - Helper script to test locally before pushing

## Installation

### Prerequisite: Install Vale

**macOS (Homebrew)**
```bash
brew install vale
```

**Linux (APT)**
```bash
apt-get install vale
```

**Windows (Chocolatey)**
```bash
choco install vale
```

**Or download directly:** https://github.com/errata-ai/vale/releases

### Verify Installation

```bash
vale --version
```

## Usage

### Local Testing

Run Vale checks locally before pushing:

```bash
# Check all documentation
./scripts/vale-check.sh

# Check English only
./scripts/vale-check.sh docs-2.0-en

# Check Chinese only
./scripts/vale-check.sh docs-2.0-zh

# Auto-fix issues
./scripts/vale-check.sh --fix

# Auto-fix with target
./scripts/vale-check.sh --fix docs-2.0-en
```

### Alternative: Direct Vale Command

```bash
# Check specific directory
vale docs-2.0-en

# Check with detailed output
vale --output=line docs-2.0-zh

# Fix issues automatically
vale --fix docs-2.0-en docs-2.0-zh

# Check single file
vale docs-2.0-en/1.introduction/1.what-is-nebula.md
```

### GitHub Workflow

The `.github/workflows/vale-lint.yml` workflow automatically:

- ✅ Runs on **pull requests** that modify documentation or Vale configuration
- ✅ Runs on **pushes** to `main`, `master`, or version branches
- ✅ Reports findings as **inline comments** on PRs
- ✅ Generates a **summary report** in the workflow log

**Workflow Triggers:**
- Changes to `docs-2.0-en/**` files
- Changes to `docs-2.0-zh/**` files
- Changes to `.vale.ini` or `styles/**` files

## Bilingual Terminology

### Current Vocabulary

The `styles/Bilingual/Vocab.txt` file includes standardized terms:

| Category | Terms |
|----------|-------|
| Products | NebulaDB, NebulaGraph, NebulaStudio, nGQL |
| Standards | openCypher, SPARQL, Cypher |
| Infrastructure | RocksDB, HBase, Kafka, Elasticsearch, TiKV, etcd |
| Protocols | gRPC, HTTP, HTTPS, GraphQL, REST |
| Formats | JSON, YAML, CSV, UTF-8 |
| Abbreviations | API, CLI, SDK, GUI, UI, CPU, GPU, RAM, SSD |

### Adding New Terms

To add new terms that should be checked:

1. **Edit** `styles/Bilingual/Vocab.txt`
2. **Add a line** with format: `CorrectTerm|Variant1|Variant2|Variant3`
3. **Commit and push** - next PR will check against new rules

**Example:** Adding "NebulaHub"

```txt
NebulaHub|nebula hub|nebula_hub|nebulahub
```

## Customization

### Adding English-Specific Rules

Edit `styles/English/meta.json` to add rules for:
- Capitalization standards
- Spacing conventions
- Preferred terminology

### Adding Chinese-Specific Rules

Edit `styles/Chinese/meta.json` to add rules for:
- Punctuation standards
- Traditional vs Simplified Chinese
- Technical term translations

### Creating Custom Style Rules

Create `.yml` files in `styles/English/` or `styles/Chinese/` directories:

```yaml
# styles/English/Capitalization.yml
---
extends: existence
message: "'NebulaDB' should be capitalized as 'NebulaDB', not '%s'"
level: error
tokens:
  - nebuladb
  - Nebuladb
  - nebula db
```

## Troubleshooting

### Vale command not found

```bash
# Install Vale
brew install vale  # macOS
apt-get install vale  # Linux
```

### Configuration not loading

```bash
# Verify .vale.ini is in the repository root
cd /path/to/repo
ls -la .vale.ini

# Test with explicit config
vale --config=.vale.ini docs-2.0-en
```

### Too many warnings

Adjust alert level in `.vale.ini`:

```ini
MinAlertLevel = error  # Only show errors (not warnings)
```

### Need to skip certain files

Add to `.vale.ini`:

```ini
[*.ignore-me.md]
ignore = true
```

## Integration Tips

### VS Code Integration

Install Vale extension:
```bash
ext install ChrisBianca.vale
```

### Pre-commit Hook

Add to `.git/hooks/pre-commit`:

```bash
#!/bin/bash
./scripts/vale-check.sh || exit 1
```

## References

- 📖 [Vale Official Docs](https://vale.sh/)
- 📖 [Vale Styles Guide](https://vale.sh/docs/topics/styles/)
- 📦 [Vale Actions on GitHub](https://github.com/errata-ai/vale-action)
- 💬 [Vale Community](https://vale.sh/community)

## Need Help?

- Check `styles/README.md` for configuration details
- Run `vale --help` for command options
- Review `.vale.ini` for current configuration
- Check GitHub workflow logs for PR feedback

---

**Happy documenting! 📝**
