# Vale Bilingual Documentation Linting - Setup Complete ✅

## What Was Created

Your bilingual NebulaDB documentation now has **Vale** integrated for consistent style and terminology checking across English and Chinese content.

### File Structure

```
.vale.ini                                    # Main Vale configuration
├─ Configures separate rules for EN/ZH
├─ Sets alert level to warnings and above
└─ Ignores non-documentation files

.github/workflows/vale-lint.yml              # GitHub Actions workflow
├─ Runs on PR creation/updates
├─ Runs on pushes to main/master/v* branches
├─ Reports findings as inline PR comments
└─ Generates workflow summary

scripts/vale-check.sh                        # Local testing script
├─ Executable from command line
├─ Tests English, Chinese, or both
└─ Can auto-fix issues with --fix flag

styles/
├─ Bilingual/
│  ├─ meta.json                            # Bilingual metadata
│  └─ vocabularies/Bilingual.txt          # Shared terminology list
├─ English/
│  ├─ meta.json                           # English metadata
│  └─ Terminology.yml                     # English terminology rules
├─ Chinese/
│  ├─ meta.json                           # Chinese metadata
│  └─ Terminology.yml                     # Chinese terminology rules
└─ README.md                              # Detailed Vale documentation

VALE_SETUP.md                              # Complete setup guide
```

## Quick Start

### Local Testing

```bash
# Check all documentation
./scripts/vale-check.sh

# Check English only
./scripts/vale-check.sh docs-2.0-en

# Check Chinese only
./scripts/vale-check.sh docs-2.0-zh

# Auto-fix issues
./scripts/vale-check.sh --fix

# Get help
./scripts/vale-check.sh --help
```

### Direct Vale Commands

```bash
# Check both directories
vale docs-2.0-en docs-2.0-zh

# Check single file
vale docs-2.0-en/1.introduction/1.what-is-nebula.md

# Auto-fix
vale --fix docs-2.0-en
```

## Bilingual Terminology Checked

Vale now ensures **consistent capitalization** across both EN and ZH docs:

| Category | Terms |
|----------|-------|
| **Products** | NebulaDB, NebulaGraph, NebulaStudio |
| **Query Language** | nGQL, openCypher, SPARQL, Cypher |
| **Infrastructure** | RocksDB, HBase, Kafka, Elasticsearch, TiKV, etcd |
| **Protocols** | gRPC, HTTP, HTTPS, GraphQL, REST |
| **Data Formats** | JSON, YAML, CSV, UTF-8 |
| **Abbreviations** | API, CLI, SDK, GUI, UI, CPU, GPU, RAM, SSD, HDD |

### Example Checks

✅ Correct: `NebulaDB`, `nGQL`, `openCypher`, `gRPC`

❌ Flagged: `nebula db`, `ngql`, `open_cypher`, `GRPC`

## GitHub Workflow Integration

Your documentation now uses a **two-stage validation system**:

### Stage 1: PR Check (vale-lint.yml) 
- Runs on **every PR update** and pushes to main/master
- Shows findings as **inline comments** on PRs
- **Non-blocking** - issues don't prevent merging
- ✅ Fast feedback for developers

### Stage 2: Deployment (deploy-en.yml + deploy-zh.yml)
- Runs when pushing to **version branches** (e.g., `v3.8.0`)
- **Blocking check** - stops deployment if issues found
- 🔒 Final quality gate before production
- Prevents bad content from reaching users

**Triggers on changes to:**
- `docs-2.0-en/**` - English documentation
- `docs-2.0-zh/**` - Chinese documentation
- `.vale.ini` - Vale configuration
- `styles/**` - Style guide files

👉 **See `TWO_STAGE_VALIDATION.md` for complete details on how the validation system works.**

## Adding New Terms

To ensure consistency, add new technical terms to the vocabulary:

1. **Edit** `styles/Bilingual/vocabularies/Bilingual.txt`
2. **Add entry**: `CorrectTerm:variant1:variant2:variant3`
3. **Create rule** in `styles/English/Terminology.yml` and `styles/Chinese/Terminology.yml`
4. **Commit and push** - next PR will validate the new rules

**Example:** Adding "NebulaHub"

```
# In Terminology.yml
- NebulaHub:nebula hub
- NebulaHub:nebula_hub
- NebulaHub:nebulahub
```

## Configuration Details

See `styles/README.md` for:
- Complete configuration reference
- Custom rule creation
- Troubleshooting guide
- Integration tips for VS Code
- Pre-commit hooks setup

See `VALE_SETUP.md` for:
- Detailed installation instructions
- All command-line options
- GitHub Actions workflow details
- Advanced customization

## System Status

- **Vale Version**: 3.13.0 (installed and working ✅)
- **Configuration**: Verified and tested ✅
- **English Docs**: Linting enabled ✅
- **Chinese Docs**: Linting enabled ✅
- **GitHub Workflow**: Ready for use ✅
- **Local Testing**: Available via `./scripts/vale-check.sh` ✅

## Next Steps

1. **Test locally** before pushing:
   ```bash
   ./scripts/vale-check.sh
   ```

2. **Create a PR** - the workflow will run automatically

3. **Review feedback** - look for Vale comments on your PR

4. **Fix issues** - either manually or with `./scripts/vale-check.sh --fix`

5. **Add more terms** as your documentation evolves

## Support

- 📖 See `styles/README.md` for configuration documentation
- 📖 See `VALE_SETUP.md` for installation and usage guide
- 🔗 [Vale Official Documentation](https://vale.sh/)
- 🔗 [Vale GitHub Repository](https://github.com/errata-ai/vale)

---

**Happy documenting! Your bilingual content is now consistently styled. 🎉**
