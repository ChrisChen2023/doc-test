# Vale Configuration for Bilingual Documentation

This directory contains Vale style configurations for checking the NebulaDB bilingual documentation (English and Chinese).

## Structure

```
.
├── .vale.ini                 # Main Vale configuration file
├── styles/
│   ├── Bilingual/           # Shared bilingual terminology rules
│   │   ├── Vocab.txt       # Bilingual term vocabulary
│   │   └── meta.json       # Bilingual style metadata
│   ├── English/            # English-specific rules
│   │   └── meta.json       # English style metadata
│   └── Chinese/            # Chinese-specific rules
│       └── meta.json       # Chinese style metadata
└── .github/workflows/
    └── vale-lint.yml       # GitHub Actions workflow for Vale linting
```

## Configuration

### `.vale.ini` 
Main configuration file that:
- Sets the styles path to `styles/`
- Configures separate rules for English (`docs-2.0-en/**`) and Chinese (`docs-2.0-zh/**`) documents
- Sets alert level to `warning` and above

### Bilingual Terminology (`styles/Bilingual/Vocab.txt`)

Defines consistent terminology across both languages:
- NebulaDB, NebulaGraph, NebulaStudio
- nGQL, openCypher, SPARQL
- Technical terms: gRPC, RocksDB, Kafka, etc.
- Standard abbreviations: API, CLI, SDK, JSON, YAML, etc.

**Format:** Each line contains the correct term followed by common misspellings separated by `|`
```
CorrectTerm|Variant1|Variant2|Variant3
```

### Style Guides

- **English** (`styles/English/meta.json`) - Rules for consistent English documentation
- **Chinese** (`styles/Chinese/meta.json`) - Rules for consistent Chinese documentation

## Usage

### Local Testing

Install Vale and run checks locally:

```bash
# Install Vale (requires Homebrew on macOS)
brew install vale

# Run Vale on all docs
vale docs-2.0-en docs-2.0-zh

# Run Vale on specific language
vale docs-2.0-en   # English only
vale docs-2.0-zh   # Chinese only

# Fix common issues automatically
vale --fix docs-2.0-en docs-2.0-zh
```

### GitHub Workflow

The `.github/workflows/vale-lint.yml` workflow automatically:
- Runs on pull requests that modify English or Chinese docs
- Runs on pushes to main/master/v* branches
- Reports findings as inline comments on PRs
- Generates a summary report

## Adding New Terminology

To add new terms that should be consistent across documentation:

1. Edit `styles/Bilingual/Vocab.txt`
2. Add the correct term and common variants: `Term|Variant1|Variant2`
3. Commit and push - the next PR will be checked against the new rules

### Example

Adding "NebulaHub" to the vocabulary:

```
# Add this line to styles/Bilingual/Vocab.txt
NebulaHub|nebula hub|nebula_hub|nebulahub
```

## Extending the Configuration

### Adding English-Specific Rules

Edit `styles/English/meta.json` to add rules like:
- Capitalization standards
- Spacing conventions
- Common term preferences

### Adding Chinese-Specific Rules

Edit `styles/Chinese/meta.json` to add rules like:
- Punctuation standards
- Traditional vs Simplified Chinese
- Term translations for technical concepts

## Supported Vale Checks

Current checks include:
- **Vocabulary**: Ensures correct capitalization and spelling of key terms (NebulaDB, nGQL, etc.)
- **Terminology**: Consistent use of technical abbreviations (API, SDK, etc.)

## References

- [Vale Documentation](https://vale.sh/)
- [Vale Actions (GitHub)](https://github.com/errata-ai/vale-action)
- [Vale Style Guide Guide](https://vale.sh/docs/topics/styles/)
