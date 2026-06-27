/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  docsSidebar: [
    // About
    {
      type: 'doc',
      id: 'README',
      label: 'About',
    },

    // Introduction
    {
      type: 'category',
      label: 'Introduction',
      collapsible: true,
      collapsed: true,
      link: {
        type: 'generated-index',
        title: 'Introduction',
        description: 'Learn about NebulaGraph, including its architecture, data model, and key concepts.',
        slug: 'introduction',
      },
      items: [
        { type: 'doc', id: 'introduction/what-is-nebula-graph', label: 'What is NebulaGraph' },
        { type: 'doc', id: 'introduction/data-model', label: 'Data model' },
        { type: 'doc', id: 'introduction/2.1.path', label: 'Path' },
        { type: 'doc', id: 'introduction/vid', label: 'VID' },
        {
          type: 'category',
          label: 'NebulaGraph architecture',
          items: [
            { type: 'doc', id: 'introduction/nebula-graph-architecture/architecture-overview', label: 'Architecture overview' },
            { type: 'doc', id: 'introduction/nebula-graph-architecture/meta-service', label: 'Meta Service' },
            { type: 'doc', id: 'introduction/nebula-graph-architecture/graph-service', label: 'Graph Service' },
            { type: 'doc', id: 'introduction/nebula-graph-architecture/storage-service', label: 'Storage Service' },
          ],
        },
      ],
    },

    // nGQL guide
    {
      type: 'category',
      label: 'nGQL guide',
      collapsible: true,
      collapsed: true,
      items: [
        {
          type: 'category',
          label: 'nGQL overview',
          items: [
            { type: 'doc', id: 'ngql-guide/nGQL-overview/overview', label: 'Overview' },
            { type: 'doc', id: 'ngql-guide/nGQL-overview/graph-patterns', label: 'Graph patterns' },
            { type: 'doc', id: 'ngql-guide/nGQL-overview/comments', label: 'Comments' },
            { type: 'doc', id: 'ngql-guide/nGQL-overview/identifier-case-sensitivity', label: 'Identifier case sensitivity' },
            { type: 'doc', id: 'ngql-guide/nGQL-overview/keywords-and-reserved-words', label: 'Keywords' },
            { type: 'doc', id: 'ngql-guide/nGQL-overview/ngql-style-guide', label: 'nGQL style guide' },
          ],
        },
        {
          type: 'category',
          label: 'Data types',
          items: [
            { type: 'doc', id: 'ngql-guide/data-types/numeric', label: 'Numeric' },
            { type: 'doc', id: 'ngql-guide/data-types/boolean', label: 'Boolean' },
            { type: 'doc', id: 'ngql-guide/data-types/string', label: 'String' },
            { type: 'doc', id: 'ngql-guide/data-types/date-and-time', label: 'Date and time' },
            { type: 'doc', id: 'ngql-guide/data-types/null', label: 'Null' },
            { type: 'doc', id: 'ngql-guide/data-types/list', label: 'List' },
            { type: 'doc', id: 'ngql-guide/data-types/set', label: 'Set' },
            { type: 'doc', id: 'ngql-guide/data-types/map', label: 'Map' },
            { type: 'doc', id: 'ngql-guide/data-types/type-conversion', label: 'Type conversion' },
            { type: 'doc', id: 'ngql-guide/data-types/geography', label: 'Geography' },
          ],
        },
        {
          type: 'category',
          label: 'Operators',
          items: [
            { type: 'doc', id: 'ngql-guide/operators/comparison', label: 'Comparison' },
            { type: 'doc', id: 'ngql-guide/operators/boolean', label: 'Boolean' },
            { type: 'doc', id: 'ngql-guide/operators/pipe', label: 'Pipe' },
            { type: 'doc', id: 'ngql-guide/operators/set', label: 'Set' },
            { type: 'doc', id: 'ngql-guide/operators/string', label: 'String' },
            { type: 'doc', id: 'ngql-guide/operators/list', label: 'List' },
            { type: 'doc', id: 'ngql-guide/operators/arithmetic', label: 'Arithmetic' },
            { type: 'doc', id: 'ngql-guide/operators/precedence', label: 'Precedence' },
          ],
        },
        {
          type: 'category',
          label: 'Functions and expressions',
          items: [
            { type: 'doc', id: 'ngql-guide/functions-and-expressions/math', label: 'Math functions' },
            { type: 'doc', id: 'ngql-guide/functions-and-expressions/aggregating', label: 'Aggregate functions' },
            { type: 'doc', id: 'ngql-guide/functions-and-expressions/string', label: 'String functions' },
            { type: 'doc', id: 'ngql-guide/functions-and-expressions/date-and-time', label: 'Date and time functions' },
            { type: 'doc', id: 'ngql-guide/functions-and-expressions/schema', label: 'Schema functions' },
            { type: 'doc', id: 'ngql-guide/functions-and-expressions/list', label: 'List functions' },
            { type: 'doc', id: 'ngql-guide/functions-and-expressions/type-conversion', label: 'Type conversion functions' },
            { type: 'doc', id: 'ngql-guide/functions-and-expressions/conditional-expressions', label: 'Conditional expressions' },
            { type: 'doc', id: 'ngql-guide/functions-and-expressions/predicate', label: 'Predicate functions' },
            { type: 'doc', id: 'ngql-guide/functions-and-expressions/geo', label: 'Geography functions' },
          ],
        },
        {
          type: 'category',
          label: 'General queries statements',
          items: [
            { type: 'doc', id: 'ngql-guide/general-query-statements/general-query-statements-overview', label: 'Overview' },
            { type: 'doc', id: 'ngql-guide/general-query-statements/match', label: 'MATCH' },
            { type: 'doc', id: 'ngql-guide/general-query-statements/optional-match', label: 'OPTIONAL MATCH' },
            { type: 'doc', id: 'ngql-guide/general-query-statements/lookup', label: 'LOOKUP' },
            { type: 'doc', id: 'ngql-guide/general-query-statements/go', label: 'GO' },
            { type: 'doc', id: 'ngql-guide/general-query-statements/fetch', label: 'FETCH' },
            {
              type: 'category',
              label: 'SHOW',
              items: [
                { type: 'doc', id: 'ngql-guide/general-query-statements/show/show-charset', label: 'SHOW CHARSET' },
                { type: 'doc', id: 'ngql-guide/general-query-statements/show/show-collation', label: 'SHOW COLLATION' },
                { type: 'doc', id: 'ngql-guide/general-query-statements/show/show-create-space', label: 'SHOW CREATE SPACE' },
                { type: 'doc', id: 'ngql-guide/general-query-statements/show/show-create-tag-edge', label: 'SHOW CREATE TAG/EDGE' },
                { type: 'doc', id: 'ngql-guide/general-query-statements/show/show-hosts', label: 'SHOW HOSTS' },
                { type: 'doc', id: 'ngql-guide/general-query-statements/show/show-index-status', label: 'SHOW INDEX STATUS' },
                { type: 'doc', id: 'ngql-guide/general-query-statements/show/show-indexes', label: 'SHOW INDEXES' },
                { type: 'doc', id: 'ngql-guide/general-query-statements/show/show-parts', label: 'SHOW PARTS' },
                { type: 'doc', id: 'ngql-guide/general-query-statements/show/show-roles', label: 'SHOW ROLES' },
                { type: 'doc', id: 'ngql-guide/general-query-statements/show/show-snapshots', label: 'SHOW SNAPSHOTS' },
                { type: 'doc', id: 'ngql-guide/general-query-statements/show/show-spaces', label: 'SHOW SPACES' },
                { type: 'doc', id: 'ngql-guide/general-query-statements/show/show-stats', label: 'SHOW STATS' },
                { type: 'doc', id: 'ngql-guide/general-query-statements/show/show-tags-edges', label: 'SHOW TAGS/EDGES' },
                { type: 'doc', id: 'ngql-guide/general-query-statements/show/show-users', label: 'SHOW USERS' },
                { type: 'doc', id: 'ngql-guide/general-query-statements/show/show-sessions', label: 'SHOW SESSIONS' },
                { type: 'doc', id: 'ngql-guide/general-query-statements/show/show-queries', label: 'SHOW QUERIES' },
                { type: 'doc', id: 'ngql-guide/general-query-statements/show/show-meta-leader', label: 'SHOW META LEADER' },
              ],
            },
            { type: 'doc', id: 'ngql-guide/general-query-statements/find-path', label: 'FIND PATH' },
            { type: 'doc', id: 'ngql-guide/general-query-statements/get-subgraph', label: 'GET SUBGRAPH' },
          ],
        },
        {
          type: 'category',
          label: 'Clauses and options',
          items: [
            { type: 'doc', id: 'ngql-guide/clauses-and-options/group-by', label: 'GROUP BY' },
            { type: 'doc', id: 'ngql-guide/clauses-and-options/limit', label: 'LIMIT and SKIP' },
            { type: 'doc', id: 'ngql-guide/clauses-and-options/sample', label: 'SAMPLE' },
            { type: 'doc', id: 'ngql-guide/clauses-and-options/order-by', label: 'ORDER BY' },
            { type: 'doc', id: 'ngql-guide/clauses-and-options/return', label: 'RETURN' },
            { type: 'doc', id: 'ngql-guide/clauses-and-options/ttl-options', label: 'TTL' },
            { type: 'doc', id: 'ngql-guide/clauses-and-options/where', label: 'WHERE' },
            { type: 'doc', id: 'ngql-guide/clauses-and-options/yield', label: 'YIELD' },
            { type: 'doc', id: 'ngql-guide/clauses-and-options/with', label: 'WITH' },
            { type: 'doc', id: 'ngql-guide/clauses-and-options/unwind', label: 'UNWIND' },
            { type: 'doc', id: 'ngql-guide/clauses-and-options/joins', label: 'INNER JOIN' },
          ],
        },
        {
          type: 'category',
          label: 'Variables and composite queries',
          items: [
            { type: 'doc', id: 'ngql-guide/variable-and-composite-queries/composite-queries', label: 'Composite queries' },
            { type: 'doc', id: 'ngql-guide/variable-and-composite-queries/user-defined-variables', label: 'User-defined variables' },
            { type: 'doc', id: 'ngql-guide/variable-and-composite-queries/property-reference', label: 'Property references' },
          ],
        },
        {
          type: 'category',
          label: 'Space statements',
          items: [
            { type: 'doc', id: 'ngql-guide/space-statements/create-space', label: 'CREATE SPACE' },
            { type: 'doc', id: 'ngql-guide/space-statements/use-space', label: 'USE SPACE' },
            { type: 'doc', id: 'ngql-guide/space-statements/show-spaces', label: 'SHOW SPACES' },
            { type: 'doc', id: 'ngql-guide/space-statements/describe-space', label: 'DESCRIBE SPACE' },
            { type: 'doc', id: 'ngql-guide/space-statements/clear-space', label: 'CLEAR SPACE' },
            { type: 'doc', id: 'ngql-guide/space-statements/drop-space', label: 'DROP SPACE' },
          ],
        },
        {
          type: 'category',
          label: 'Tag statements',
          items: [
            { type: 'doc', id: 'ngql-guide/tag-statements/create-tag', label: 'CREATE TAG' },
            { type: 'doc', id: 'ngql-guide/tag-statements/drop-tag', label: 'DROP TAGS' },
            { type: 'doc', id: 'ngql-guide/tag-statements/alter-tag', label: 'ALTER TAG' },
            { type: 'doc', id: 'ngql-guide/tag-statements/show-tags', label: 'SHOW TAGS' },
            { type: 'doc', id: 'ngql-guide/tag-statements/describe-tag', label: 'DESCRIBE TAG' },
            { type: 'doc', id: 'ngql-guide/tag-statements/delete-tag', label: 'DELETE TAG' },
            { type: 'doc', id: 'ngql-guide/tag-statements/improve-query-by-tag-index', label: 'Add or delete tag' },
          ],
        },
        {
          type: 'category',
          label: 'Edge type statements',
          items: [
            { type: 'doc', id: 'ngql-guide/edge-type-statements/create-edge', label: 'CREATE EDGE' },
            { type: 'doc', id: 'ngql-guide/edge-type-statements/drop-edge', label: 'DROP EDGE' },
            { type: 'doc', id: 'ngql-guide/edge-type-statements/alter-edge', label: 'ALTER EDGE' },
            { type: 'doc', id: 'ngql-guide/edge-type-statements/show-edges', label: 'SHOW EDGES' },
            { type: 'doc', id: 'ngql-guide/edge-type-statements/describe-edge', label: 'DESCRIBE EDGE' },
          ],
        },
        {
          type: 'category',
          label: 'Vertex statements',
          items: [
            { type: 'doc', id: 'ngql-guide/vertex-statements/insert-vertex', label: 'INSERT VERTEX' },
            { type: 'doc', id: 'ngql-guide/vertex-statements/delete-vertex', label: 'DELETE VERTEX' },
            { type: 'doc', id: 'ngql-guide/vertex-statements/update-vertex', label: 'UPDATE VERTEX' },
            { type: 'doc', id: 'ngql-guide/vertex-statements/upsert-vertex', label: 'UPSERT VERTEX' },
          ],
        },
        {
          type: 'category',
          label: 'Edge statements',
          items: [
            { type: 'doc', id: 'ngql-guide/edge-statements/insert-edge', label: 'INSERT EDGE' },
            { type: 'doc', id: 'ngql-guide/edge-statements/delete-edge', label: 'DELETE EDGE' },
            { type: 'doc', id: 'ngql-guide/edge-statements/update-edge', label: 'UPDATE EDGE' },
            { type: 'doc', id: 'ngql-guide/edge-statements/upsert-edge', label: 'UPSERT EDGE' },
          ],
        },
        {
          type: 'category',
          label: 'Native index statements',
          items: [
            { type: 'doc', id: 'ngql-guide/native-index-statements/README', label: 'Index overview' },
            { type: 'doc', id: 'ngql-guide/native-index-statements/create-native-index', label: 'CREATE INDEX' },
            { type: 'doc', id: 'ngql-guide/native-index-statements/show-native-indexes', label: 'SHOW INDEX' },
            { type: 'doc', id: 'ngql-guide/native-index-statements/2.1.show-create-index', label: 'SHOW CREATE INDEX' },
            { type: 'doc', id: 'ngql-guide/native-index-statements/describe-native-index', label: 'DESCRIBE INDEX' },
            { type: 'doc', id: 'ngql-guide/native-index-statements/rebuild-native-index', label: 'REBUILD INDEX' },
            { type: 'doc', id: 'ngql-guide/native-index-statements/show-native-index-status', label: 'SHOW INDEX STATUS' },
            { type: 'doc', id: 'ngql-guide/native-index-statements/drop-native-index', label: 'DROP INDEX' },
          ],
        },
        {
          type: 'category',
          label: 'Full-text index statements',
          items: [
            { type: 'doc', id: 'deployment-and-installation/deploy-text-based-index/text-based-index-restrictions', label: 'Full-text restrictions' },
            { type: 'doc', id: 'deployment-and-installation/deploy-text-based-index/deploy-es', label: 'Deploy Elasticsearch cluster' },
            { type: 'doc', id: 'deployment-and-installation/deploy-text-based-index/deploy-listener', label: 'Deploy Raft Listener cluster' },
            { type: 'doc', id: 'ngql-guide/full-text-index-statements/search-with-text-based-index', label: 'Search with full-text index' },
          ],
        },
        {
          type: 'category',
          label: 'Query tuning and terminating statements',
          items: [
            { type: 'doc', id: 'ngql-guide/query-tuning-statements/explain-and-profile', label: 'EXPLAIN and PROFILE' },
            { type: 'doc', id: 'ngql-guide/query-tuning-statements/kill-query', label: 'Kill queries' },
            { type: 'doc', id: 'ngql-guide/query-tuning-statements/kill-session', label: 'Kill sessions' },
          ],
        },
        { type: 'doc', id: 'ngql-guide/job-statements', label: 'Job statements' },
      ],
    },

    // Deploy and install
    {
      type: 'category',
      label: 'Deploy and install',
      collapsible: true,
      collapsed: true,
      items: [
        { type: 'doc', id: 'deployment-and-installation/resource-preparations', label: 'Resource preparations' },
        {
          type: 'category',
          label: 'Compile and install',
          items: [
            { type: 'doc', id: 'deployment-and-installation/compile-and-install-nebula-graph/install-nebula-graph-by-compiling-the-source-code', label: 'Compile the source' },
            { type: 'doc', id: 'deployment-and-installation/compile-and-install-nebula-graph/compile-using-docker', label: 'Compile using Docker' },
          ],
        },
        {
          type: 'category',
          label: 'Local single-node installation',
          items: [
            { type: 'doc', id: 'deployment-and-installation/compile-and-install-nebula-graph/install-nebula-graph-by-rpm-or-deb', label: 'Install using RPM or DEB package' },
            { type: 'doc', id: 'deployment-and-installation/compile-and-install-nebula-graph/install-nebula-graph-from-tar', label: 'Install using TAR package' },
            { type: 'doc', id: 'deployment-and-installation/standalone-deployment', label: 'Install standalone NebulaGraph' },
          ],
        },
        { type: 'doc', id: 'deployment-and-installation/compile-and-install-nebula-graph/deploy-nebula-graph-cluster', label: 'Local multi-node installation' },
        { type: 'doc', id: 'deployment-and-installation/compile-and-install-nebula-graph/deploy-nebula-graph-with-docker-compose', label: 'Install using Docker Compose' },
        { type: 'doc', id: 'deployment-and-installation/compile-and-install-nebula-graph/deploy-nebula-graph-with-lite', label: 'Install using NebulaGraph Lite' },
        { type: 'doc', id: 'deployment-and-installation/compile-and-install-nebula-graph/deploy-nebula-graph-with-peripherals', label: 'Install with ecosystem tools' },
        { type: 'doc', id: 'deployment-and-installation/manage-service', label: 'Manage Service' },
        { type: 'doc', id: 'deployment-and-installation/connect-to-nebula-graph', label: 'Connect to Service' },
        { type: 'doc', id: 'deployment-and-installation/manage-storage-host', label: 'Manage Storage host' },
        { type: 'doc', id: 'deployment-and-installation/upgrade-nebula-graph/upgrade-nebula-comm', label: 'Upgrade' },
        { type: 'doc', id: 'deployment-and-installation/uninstall-nebula-graph', label: 'Uninstall NebulaGraph' },
      ],
    },

    // Configure and log
    {
      type: 'category',
      label: 'Configure and log',
      collapsible: true,
      collapsed: true,
      items: [
        {
          type: 'category',
          label: 'Configurations',
          items: [
            { type: 'doc', id: 'configurations-and-logs/configurations/configurations', label: 'Configurations' },
            { type: 'doc', id: 'configurations-and-logs/configurations/meta-config', label: 'Meta Service configurations' },
            { type: 'doc', id: 'configurations-and-logs/configurations/graph-config', label: 'Graph Service configurations' },
            { type: 'doc', id: 'configurations-and-logs/configurations/storage-config', label: 'Storage Service configurations' },
            { type: 'doc', id: 'configurations-and-logs/configurations/kernel-config', label: 'Kernel configurations' },
          ],
        },
        {
          type: 'category',
          label: 'Log management',
          items: [
            { type: 'doc', id: 'configurations-and-logs/log-management/logs', label: 'Runtime logs' },
          ],
        },
      ],
    },

    // Monitor
    {
      type: 'category',
      label: 'Monitor',
      collapsible: true,
      collapsed: true,
      items: [
        { type: 'doc', id: 'monitor-and-metrics/query-performance-metrics', label: 'Query NebulaGraph metrics' },
        { type: 'doc', id: 'monitor-and-metrics/rocksdb-statistics', label: 'RocksDB Statistics' },
      ],
    },

    // Data security
    {
      type: 'category',
      label: 'Data security',
      collapsible: true,
      collapsed: true,
      items: [
        {
          type: 'category',
          label: 'Authentication and authorization',
          items: [
            { type: 'doc', id: 'data-security/authentication/authentication', label: 'Authentication' },
            { type: 'doc', id: 'data-security/authentication/management-user', label: 'User management' },
            { type: 'doc', id: 'data-security/authentication/role-list', label: 'Roles and privileges' },
          ],
        },
        { type: 'doc', id: 'data-security/ssl', label: 'SSL' },
      ],
    },

    // Backup and restore
    {
      type: 'category',
      label: 'Backup and restore',
      collapsible: true,
      collapsed: true,
      items: [
        {
          type: 'category',
          label: 'NebulaGraph BR Community',
          items: [
            { type: 'doc', id: 'backup-and-restore/nebula-br/what-is-br', label: 'What is BR Community' },
            { type: 'doc', id: 'backup-and-restore/nebula-br/compile-br', label: 'Install BR' },
            { type: 'doc', id: 'backup-and-restore/nebula-br/br-backup-data', label: 'Use BR to back up data' },
            { type: 'doc', id: 'backup-and-restore/nebula-br/br-restore-data', label: 'Use BR to restore data' },
          ],
        },
        { type: 'doc', id: 'backup-and-restore/manage-snapshot', label: 'Manage snapshots' },
      ],
    },

    // Synchronize and migrate
    {
      type: 'category',
      label: 'Synchronize and migrate',
      collapsible: true,
      collapsed: true,
      items: [
        { type: 'doc', id: 'synchronization-and-migration/balance-syntax', label: 'Load balance' },
      ],
    },

    // Import and export
    {
      type: 'category',
      label: 'Import and export',
      collapsible: true,
      collapsed: true,
      items: [
        { type: 'doc', id: 'import-export/write-tools', label: 'Overview' },
        { type: 'doc', id: 'import-export/use-importer', label: 'Use NebulaGraph Importer' },
        {
          type: 'category',
          label: 'NebulaGraph Exchange',
          items: [
            {
              type: 'category',
              label: 'Introduction',
              items: [
                { type: 'doc', id: 'import-export/nebula-exchange/about-exchange/ex-ug-what-is-exchange', label: 'What is NebulaGraph Exchange' },
                { type: 'doc', id: 'import-export/nebula-exchange/about-exchange/ex-ug-limitations', label: 'Limitations' },
              ],
            },
            { type: 'doc', id: 'import-export/nebula-exchange/ex-ug-compile', label: 'Get Exchange' },
            {
              type: 'category',
              label: 'Exchange configurations',
              items: [
                { type: 'doc', id: 'import-export/nebula-exchange/parameter-reference/ex-ug-para-import-command', label: 'Options for import' },
                { type: 'doc', id: 'import-export/nebula-exchange/parameter-reference/ex-ug-parameter', label: 'Parameters in the configuration file' },
              ],
            },
            {
              type: 'category',
              label: 'Use NebulaGraph Exchange',
              items: [
                { type: 'doc', id: 'import-export/nebula-exchange/use-exchange/ex-ug-import-from-csv', label: 'Import data from CSV files' },
                { type: 'doc', id: 'import-export/nebula-exchange/use-exchange/ex-ug-import-from-json', label: 'Import data from JSON files' },
                { type: 'doc', id: 'import-export/nebula-exchange/use-exchange/ex-ug-import-from-orc', label: 'Import data from ORC files' },
                { type: 'doc', id: 'import-export/nebula-exchange/use-exchange/ex-ug-import-from-parquet', label: 'Import data from Parquet files' },
                { type: 'doc', id: 'import-export/nebula-exchange/use-exchange/ex-ug-import-from-hbase', label: 'Import data from HBase' },
                { type: 'doc', id: 'import-export/nebula-exchange/use-exchange/ex-ug-import-from-mysql', label: 'Import data from MySQL/PostgreSQL' },
                { type: 'doc', id: 'import-export/nebula-exchange/use-exchange/ex-ug-import-from-oracle', label: 'Import data from Oracle' },
                { type: 'doc', id: 'import-export/nebula-exchange/use-exchange/ex-ug-import-from-clickhouse', label: 'Import data from ClickHouse' },
                { type: 'doc', id: 'import-export/nebula-exchange/use-exchange/ex-ug-import-from-neo4j', label: 'Import data from Neo4j' },
                { type: 'doc', id: 'import-export/nebula-exchange/use-exchange/ex-ug-import-from-hive', label: 'Import data from Hive' },
                { type: 'doc', id: 'import-export/nebula-exchange/use-exchange/ex-ug-import-from-maxcompute', label: 'Import data from MaxCompute' },
                { type: 'doc', id: 'import-export/nebula-exchange/use-exchange/ex-ug-import-from-pulsar', label: 'Import data from Pulsar' },
                { type: 'doc', id: 'import-export/nebula-exchange/use-exchange/ex-ug-import-from-kafka', label: 'Import data from Kafka' },
                { type: 'doc', id: 'import-export/nebula-exchange/use-exchange/ex-ug-import-from-jdbc', label: 'Import data from JDBC' },
                { type: 'doc', id: 'import-export/nebula-exchange/use-exchange/ex-ug-import-from-sst', label: 'Import data from SST files' },
                { type: 'doc', id: 'import-export/nebula-exchange/use-exchange/ex-ug-import-from-custom', label: 'Import data from custom data sources' },
              ],
            },
            { type: 'doc', id: 'import-export/nebula-exchange/ex-ug-FAQ', label: 'Exchange FAQ' },
          ],
        },
      ],
    },

    // Connectors
    {
      type: 'category',
      label: 'Connectors',
      collapsible: true,
      collapsed: true,
      items: [
        { type: 'doc', id: 'connector/nebula-spark-connector', label: 'NebulaGraph Spark Connector' },
        { type: 'doc', id: 'connector/nebula-flink-connector', label: 'NebulaGraph Flink Connector' },
      ],
    },

    // Best practices
    {
      type: 'category',
      label: 'Best practices',
      collapsible: true,
      collapsed: true,
      items: [
        { type: 'doc', id: 'service-tuning/compaction', label: 'Compaction' },
        { type: 'doc', id: 'service-tuning/load-balance', label: 'Storage load balance' },
        { type: 'doc', id: 'service-tuning/graph-modeling', label: 'Modeling suggestions' },
        { type: 'doc', id: 'service-tuning/system-design', label: 'System design suggestions' },
        { type: 'doc', id: 'service-tuning/plan', label: 'Execution plan' },
        { type: 'doc', id: 'service-tuning/super-node', label: 'Processing super vertices' },
        { type: 'doc', id: 'service-tuning/enable_autofdo_for_nebulagraph', label: 'Enable AutoFDO' },
        { type: 'doc', id: 'service-tuning/practice', label: 'Best practices' },
      ],
    },

    // Clients
    {
      type: 'category',
      label: 'Clients',
      collapsible: true,
      collapsed: true,
      items: [
        { type: 'doc', id: 'client/nebula-client', label: 'Clients overview' },
        { type: 'doc', id: 'nebula-console', label: 'NebulaGraph Console' },
        { type: 'doc', id: 'client/nebula-cpp-client', label: 'NebulaGraph CPP' },
        { type: 'doc', id: 'client/nebula-java-client', label: 'NebulaGraph Java' },
        { type: 'doc', id: 'client/nebula-python-client', label: 'NebulaGraph Python' },
        { type: 'doc', id: 'client/nebula-go-client', label: 'NebulaGraph Go' },
        { type: 'doc', id: 'client/contributed-clients', label: 'Community contributed clients' },
      ],
    },

    // Studio
    {
      type: 'category',
      label: 'Studio',
      collapsible: true,
      collapsed: true,
      items: [
        {
          type: 'category',
          label: 'About NebulaGraph Studio',
          items: [
            { type: 'doc', id: 'nebula-studio/about-studio/st-ug-what-is-graph-studio', label: 'What is NebulaGraph Studio' },
            { type: 'doc', id: 'nebula-studio/about-studio/st-ug-limitations', label: 'Limitations' },
          ],
        },
        {
          type: 'category',
          label: 'Deploy and connect',
          items: [
            { type: 'doc', id: 'nebula-studio/deploy-connect/st-ug-deploy', label: 'Deploy Studio' },
            { type: 'doc', id: 'nebula-studio/deploy-connect/st-ug-connect', label: 'Connect to NebulaGraph' },
          ],
        },
        {
          type: 'category',
          label: 'Quick start',
          items: [
            { type: 'doc', id: 'nebula-studio/quick-start/st-ug-plan-schema', label: 'Design a schema' },
            { type: 'doc', id: 'nebula-studio/quick-start/st-ug-create-schema', label: 'Create a schema' },
            { type: 'doc', id: 'nebula-studio/quick-start/st-ug-import-data', label: 'Import data' },
            { type: 'doc', id: 'nebula-studio/quick-start/st-ug-console', label: 'Use Console' },
            {
              type: 'category',
              label: 'Use Schema',
              items: [
                { type: 'doc', id: 'nebula-studio/manage-schema/st-ug-crud-space', label: 'Manage graph spaces' },
                { type: 'doc', id: 'nebula-studio/manage-schema/st-ug-crud-tag', label: 'Manage tags' },
                { type: 'doc', id: 'nebula-studio/manage-schema/st-ug-crud-edge-type', label: 'Manage edge types' },
                { type: 'doc', id: 'nebula-studio/manage-schema/st-ug-crud-index', label: 'Manage indexes' },
                { type: 'doc', id: 'nebula-studio/manage-schema/st-ug-view-schema', label: 'View schema' },
              ],
            },
            { type: 'doc', id: 'nebula-studio/quick-start/draft', label: 'Schema drafting' },
          ],
        },
        { type: 'doc', id: 'nebula-studio/system-settings', label: 'Global settings' },
        {
          type: 'category',
          label: 'Troubleshooting',
          items: [
            { type: 'doc', id: 'nebula-studio/troubleshooting/st-ug-config-server-errors', label: 'Database connection error' },
            { type: 'doc', id: 'nebula-studio/troubleshooting/st-ug-connection-errors', label: 'Unable to access Studio' },
            { type: 'doc', id: 'nebula-studio/troubleshooting/st-ug-faq', label: 'FAQ' },
          ],
        },
      ],
    },

    // Dashboard (Community)
    {
      type: 'category',
      label: 'Dashboard (Community)',
      collapsible: true,
      collapsed: true,
      items: [
        { type: 'doc', id: 'nebula-dashboard/what-is-dashboard', label: 'What is NebulaGraph Dashboard' },
        { type: 'doc', id: 'nebula-dashboard/deploy-dashboard', label: 'Deploy Dashboard' },
        { type: 'doc', id: 'nebula-dashboard/connect-dashboard', label: 'Connect to Dashboard' },
        { type: 'doc', id: 'nebula-dashboard/use-dashboard', label: 'Use Dashboard' },
        { type: 'doc', id: 'nebula-dashboard/monitor-parameter', label: 'Monitoring metrics' },
      ],
    },

    // NebulaGraph Operator
    {
      type: 'category',
      label: 'NebulaGraph Operator',
      collapsible: true,
      collapsed: true,
      items: [
        { type: 'doc', id: 'k8s-operator/introduction-to-nebula-operator', label: 'What is NebulaGraph Operator' },
        {
          type: 'category',
          label: 'Getting started',
          items: [
            { type: 'doc', id: 'k8s-operator/get-started/2.1.install-operator', label: 'Install NebulaGraph Operator' },
            { type: 'doc', id: 'k8s-operator/get-started/2.3.create-cluster', label: 'Create a NebulaGraph cluster' },
            { type: 'doc', id: 'k8s-operator/get-started/2.4.connect-to-cluster', label: 'Connect to a NebulaGraph cluster' },
          ],
        },
        {
          type: 'category',
          label: 'NebulaGraph Operator management',
          items: [
            { type: 'doc', id: 'k8s-operator/operator-management/3.1.customize-installation', label: 'Customize installation defaults' },
            { type: 'doc', id: 'k8s-operator/operator-management/3.2.update-operator', label: 'Update NebulaGraph Operator' },
            { type: 'doc', id: 'k8s-operator/operator-management/3.5.cluster-scope-config', label: 'Manage specific clusters' },
            { type: 'doc', id: 'k8s-operator/operator-management/3.3.upgrade-operator', label: 'Upgrade NebulaGraph Operator' },
            { type: 'doc', id: 'k8s-operator/operator-management/3.4.unistall-operator', label: 'Uninstall NebulaGraph Operator' },
          ],
        },
        {
          type: 'category',
          label: 'Cluster administration',
          items: [
            {
              type: 'category',
              label: 'Deployment',
              items: [
                { type: 'doc', id: 'k8s-operator/cluster-administration/4.1.installation/4.1.1.cluster-install', label: 'Install clusters' },
                { type: 'doc', id: 'k8s-operator/cluster-administration/4.1.installation/4.1.2.cluster-upgrade', label: 'Upgrade clusters' },
                { type: 'doc', id: 'k8s-operator/cluster-administration/4.1.installation/4.1.3.cluster-uninstall', label: 'Uninstall clusters' },
              ],
            },
            { type: 'doc', id: 'k8s-operator/cluster-administration/4.2.configuration', label: 'Customize cluster configurations' },
            {
              type: 'category',
              label: 'Storage management',
              items: [
                { type: 'doc', id: 'k8s-operator/cluster-administration/4.4.storage-management/4.4.2.pv-expansion', label: 'Dynamically expand persistent volumes' },
                { type: 'doc', id: 'k8s-operator/cluster-administration/4.4.storage-management/4.4.1.use-local-pv', label: 'Use local PV' },
                { type: 'doc', id: 'k8s-operator/cluster-administration/4.4.storage-management/4.4.3.configure-pv-reclaim', label: 'Configure PV reclaim' },
              ],
            },
            { type: 'doc', id: 'k8s-operator/cluster-administration/4.5.logging', label: 'Log management' },
            {
              type: 'category',
              label: 'Security',
              items: [
                { type: 'doc', id: 'k8s-operator/cluster-administration/4.7.security/4.7.2.enable-admission-control', label: 'Enable admission control' },
                { type: 'doc', id: 'k8s-operator/cluster-administration/4.7.security/4.7.3.config-deletion-protection', label: 'Configure deletion protection' },
              ],
            },
            {
              type: 'category',
              label: 'HA and balancing',
              items: [
                { type: 'doc', id: 'k8s-operator/cluster-administration/4.8.ha-and-balancing/4.8.1.self-healing', label: 'Self-healing overview' },
              ],
            },
            {
              type: 'category',
              label: 'Advanced',
              items: [
                { type: 'doc', id: 'k8s-operator/cluster-administration/4.9.advanced/4.9.1.rolling-update-strategy', label: 'Optimize leader transfer in rolling updates' },
                { type: 'doc', id: 'k8s-operator/cluster-administration/4.9.advanced/4.9.2.restart-cluster', label: 'Restart clusters' },
              ],
            },
          ],
        },
        { type: 'doc', id: 'k8s-operator/FAQ', label: 'FAQ' },
      ],
    },

    // Graph computing
    {
      type: 'category',
      label: 'Graph computing',
      collapsible: true,
      collapsed: true,
      items: [
        { type: 'doc', id: 'graph-computing/nebula-algorithm', label: 'NebulaGraph Algorithm' },
      ],
    },

    // Bench & FAQ
    { type: 'doc', id: 'nebula-bench', label: 'Bench' },
    { type: 'doc', id: 'appendix/FAQ', label: 'FAQ' },

    // Appendix
    {
      type: 'category',
      label: 'Appendix',
      collapsible: true,
      collapsed: true,
      items: [
        {
          type: 'category',
          label: 'Release Note',
          items: [
            { type: 'doc', id: 'appendix/release-notes/nebula-comm-release-note', label: 'NebulaGraph Community' },
            { type: 'doc', id: 'appendix/release-notes/studio-release-note', label: 'NebulaGraph Studio' },
            { type: 'doc', id: 'appendix/release-notes/dashboard-comm-release-note', label: 'NebulaGraph Dashboard Community' },
          ],
        },
        { type: 'doc', id: 'appendix/eco-tool-version', label: 'Ecosystem tools' },
        { type: 'doc', id: 'appendix/port-guide', label: 'Port guide for company products' },
        { type: 'doc', id: 'contribution/how-to-contribute', label: 'How to contribute' },
        { type: 'doc', id: 'appendix/history', label: 'History timeline' },
        { type: 'doc', id: 'appendix/error-code', label: 'Error code' },
      ],
    },
  ],
};

export default sidebars;