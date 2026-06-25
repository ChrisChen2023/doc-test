/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  docsSidebar: [
    // About
    { type: 'doc', id: 'README', label: 'About' },

    // Introduction
    {
      type: 'category',
      label: 'Introduction',
      items: [
        '1.introduction/1.what-is-nebula-graph',
        '1.introduction/2.data-model',
        '1.introduction/2.1.path',
        '1.introduction/3.vid',
        {
          type: 'category',
          label: 'NebulaGraph architecture',
          items: [
            '1.introduction/3.nebula-graph-architecture/1.architecture-overview',
            '1.introduction/3.nebula-graph-architecture/2.meta-service',
            '1.introduction/3.nebula-graph-architecture/3.graph-service',
            '1.introduction/3.nebula-graph-architecture/4.storage-service',
          ],
        },
      ],
    },

    // Quick start
    {
      type: 'category',
      label: 'Quick start',
      items: [
        '2.quick-start/1.quick-start-workflow',
        {
          type: 'category',
          label: 'Deploy NebulaGraph on-premise',
          items: [
            '2.quick-start/2.install-nebula-graph',
            '2.quick-start/5.start-stop-service',
            '2.quick-start/3.connect-to-nebula-graph',
            '2.quick-start/3.1add-storage-hosts',
            '2.quick-start/4.nebula-graph-crud',
          ],
        },
        '2.quick-start/6.cheatsheet-for-ngql',
      ],
    },

    // nGQL guide
    {
      type: 'category',
      label: 'nGQL guide',
      items: [
        {
          type: 'category',
          label: 'nGQL overview',
          items: [
            '3.ngql-guide/1.nGQL-overview/1.overview',
            '3.ngql-guide/1.nGQL-overview/3.graph-patterns',
            '3.ngql-guide/1.nGQL-overview/comments',
            '3.ngql-guide/1.nGQL-overview/identifier-case-sensitivity',
            '3.ngql-guide/1.nGQL-overview/keywords-and-reserved-words',
            '3.ngql-guide/1.nGQL-overview/ngql-style-guide',
          ],
        },
        {
          type: 'category',
          label: 'Data types',
          items: [
            '3.ngql-guide/3.data-types/1.numeric',
            '3.ngql-guide/3.data-types/2.boolean',
            '3.ngql-guide/3.data-types/3.string',
            '3.ngql-guide/3.data-types/4.date-and-time',
            '3.ngql-guide/3.data-types/5.null',
            '3.ngql-guide/3.data-types/6.list',
            '3.ngql-guide/3.data-types/7.set',
            '3.ngql-guide/3.data-types/8.map',
            '3.ngql-guide/3.data-types/9.type-conversion',
            '3.ngql-guide/3.data-types/10.geography',
          ],
        },
        {
          type: 'category',
          label: 'Operators',
          items: [
            '3.ngql-guide/5.operators/1.comparison',
            '3.ngql-guide/5.operators/2.boolean',
            '3.ngql-guide/5.operators/4.pipe',
            '3.ngql-guide/5.operators/6.set',
            '3.ngql-guide/5.operators/7.string',
            '3.ngql-guide/5.operators/8.list',
            '3.ngql-guide/5.operators/10.arithmetic',
            '3.ngql-guide/5.operators/9.precedence',
          ],
        },
        {
          type: 'category',
          label: 'Functions and expressions',
          items: [
            '3.ngql-guide/6.functions-and-expressions/1.math',
            '3.ngql-guide/6.functions-and-expressions/15.aggregating',
            '3.ngql-guide/6.functions-and-expressions/2.string',
            '3.ngql-guide/6.functions-and-expressions/3.date-and-time',
            '3.ngql-guide/6.functions-and-expressions/4.schema',
            '3.ngql-guide/6.functions-and-expressions/6.list',
            '3.ngql-guide/6.functions-and-expressions/16.type-conversion',
            '3.ngql-guide/6.functions-and-expressions/5.conditional-expressions',
            '3.ngql-guide/6.functions-and-expressions/8.predicate',
            '3.ngql-guide/6.functions-and-expressions/14.geo',
          ],
        },
        {
          type: 'category',
          label: 'General queries statements',
          items: [
            '3.ngql-guide/7.general-query-statements/1.general-query-statements-overview',
            '3.ngql-guide/7.general-query-statements/2.match',
            '3.ngql-guide/7.general-query-statements/optional-match',
            '3.ngql-guide/7.general-query-statements/5.lookup',
            '3.ngql-guide/7.general-query-statements/3.go',
            '3.ngql-guide/7.general-query-statements/4.fetch',
            {
              type: 'category',
              label: 'SHOW',
              items: [
                '3.ngql-guide/7.general-query-statements/6.show/1.show-charset',
                '3.ngql-guide/7.general-query-statements/6.show/2.show-collation',
                '3.ngql-guide/7.general-query-statements/6.show/4.show-create-space',
                '3.ngql-guide/7.general-query-statements/6.show/5.show-create-tag-edge',
                '3.ngql-guide/7.general-query-statements/6.show/6.show-hosts',
                '3.ngql-guide/7.general-query-statements/6.show/7.show-index-status',
                '3.ngql-guide/7.general-query-statements/6.show/8.show-indexes',
                '3.ngql-guide/7.general-query-statements/6.show/9.show-parts',
                '3.ngql-guide/7.general-query-statements/6.show/10.show-roles',
                '3.ngql-guide/7.general-query-statements/6.show/11.show-snapshots',
                '3.ngql-guide/7.general-query-statements/6.show/12.show-spaces',
                '3.ngql-guide/7.general-query-statements/6.show/14.show-stats',
                '3.ngql-guide/7.general-query-statements/6.show/15.show-tags-edges',
                '3.ngql-guide/7.general-query-statements/6.show/16.show-users',
                '3.ngql-guide/7.general-query-statements/6.show/17.show-sessions',
                '3.ngql-guide/7.general-query-statements/6.show/18.show-queries',
                '3.ngql-guide/7.general-query-statements/6.show/19.show-meta-leader',
              ],
            },
            '3.ngql-guide/7.general-query-statements/6.find-path',
            '3.ngql-guide/7.general-query-statements/7.get-subgraph',
          ],
        },
        {
          type: 'category',
          label: 'Clauses and options',
          items: [
            '3.ngql-guide/8.clauses-and-options/group-by',
            '3.ngql-guide/8.clauses-and-options/limit',
            '3.ngql-guide/8.clauses-and-options/sample',
            '3.ngql-guide/8.clauses-and-options/order-by',
            '3.ngql-guide/8.clauses-and-options/return',
            '3.ngql-guide/8.clauses-and-options/ttl-options',
            '3.ngql-guide/8.clauses-and-options/where',
            '3.ngql-guide/8.clauses-and-options/yield',
            '3.ngql-guide/8.clauses-and-options/with',
            '3.ngql-guide/8.clauses-and-options/unwind',
            '3.ngql-guide/8.clauses-and-options/joins',
          ],
        },
        {
          type: 'category',
          label: 'Variables and composite queries',
          items: [
            '3.ngql-guide/4.variable-and-composite-queries/1.composite-queries',
            '3.ngql-guide/4.variable-and-composite-queries/2.user-defined-variables',
            '3.ngql-guide/4.variable-and-composite-queries/3.property-reference',
          ],
        },
        {
          type: 'category',
          label: 'Space statements',
          items: [
            '3.ngql-guide/9.space-statements/1.create-space',
            '3.ngql-guide/9.space-statements/2.use-space',
            '3.ngql-guide/9.space-statements/3.show-spaces',
            '3.ngql-guide/9.space-statements/4.describe-space',
            '3.ngql-guide/9.space-statements/6.clear-space',
            '3.ngql-guide/9.space-statements/5.drop-space',
          ],
        },
        {
          type: 'category',
          label: 'Tag statements',
          items: [
            '3.ngql-guide/10.tag-statements/1.create-tag',
            '3.ngql-guide/10.tag-statements/2.drop-tag',
            '3.ngql-guide/10.tag-statements/3.alter-tag',
            '3.ngql-guide/10.tag-statements/4.show-tags',
            '3.ngql-guide/10.tag-statements/5.describe-tag',
            '3.ngql-guide/10.tag-statements/6.delete-tag',
            '3.ngql-guide/10.tag-statements/improve-query-by-tag-index',
          ],
        },
        {
          type: 'category',
          label: 'Edge type statements',
          items: [
            '3.ngql-guide/11.edge-type-statements/1.create-edge',
            '3.ngql-guide/11.edge-type-statements/2.drop-edge',
            '3.ngql-guide/11.edge-type-statements/3.alter-edge',
            '3.ngql-guide/11.edge-type-statements/4.show-edges',
            '3.ngql-guide/11.edge-type-statements/5.describe-edge',
          ],
        },
        {
          type: 'category',
          label: 'Vertex statements',
          items: [
            '3.ngql-guide/12.vertex-statements/1.insert-vertex',
            '3.ngql-guide/12.vertex-statements/4.delete-vertex',
            '3.ngql-guide/12.vertex-statements/2.update-vertex',
            '3.ngql-guide/12.vertex-statements/3.upsert-vertex',
          ],
        },
        {
          type: 'category',
          label: 'Edge statements',
          items: [
            '3.ngql-guide/13.edge-statements/1.insert-edge',
            '3.ngql-guide/13.edge-statements/4.delete-edge',
            '3.ngql-guide/13.edge-statements/2.update-edge',
            '3.ngql-guide/13.edge-statements/3.upsert-edge',
          ],
        },
        {
          type: 'category',
          label: 'Native index statements',
          items: [
            '3.ngql-guide/14.native-index-statements/README',
            '3.ngql-guide/14.native-index-statements/1.create-native-index',
            '3.ngql-guide/14.native-index-statements/2.show-native-indexes',
            '3.ngql-guide/14.native-index-statements/2.1.show-create-index',
            '3.ngql-guide/14.native-index-statements/3.describe-native-index',
            '3.ngql-guide/14.native-index-statements/4.rebuild-native-index',
            '3.ngql-guide/14.native-index-statements/5.show-native-index-status',
            '3.ngql-guide/14.native-index-statements/6.drop-native-index',
          ],
        },
        {
          type: 'category',
          label: 'Full-text index statements',
          items: [
            '4.deployment-and-installation/6.deploy-text-based-index/1.text-based-index-restrictions',
            '4.deployment-and-installation/6.deploy-text-based-index/2.deploy-es',
            '4.deployment-and-installation/6.deploy-text-based-index/3.deploy-listener',
            '3.ngql-guide/15.full-text-index-statements/1.search-with-text-based-index',
          ],
        },
        {
          type: 'category',
          label: 'Query tuning and terminating statements',
          items: [
            '3.ngql-guide/17.query-tuning-statements/1.explain-and-profile',
            '3.ngql-guide/17.query-tuning-statements/6.kill-query',
            '3.ngql-guide/17.query-tuning-statements/2.kill-session',
          ],
        },
        '3.ngql-guide/4.job-statements',
      ],
    },

    // Deploy and install
    {
      type: 'category',
      label: 'Deploy and install',
      items: [
        '4.deployment-and-installation/1.resource-preparations',
        {
          type: 'category',
          label: 'Compile and install',
          items: [
            '4.deployment-and-installation/2.compile-and-install-nebula-graph/1.install-nebula-graph-by-compiling-the-source-code',
            '4.deployment-and-installation/2.compile-and-install-nebula-graph/7.compile-using-docker',
          ],
        },
        {
          type: 'category',
          label: 'Local single-node installation',
          items: [
            '4.deployment-and-installation/2.compile-and-install-nebula-graph/2.install-nebula-graph-by-rpm-or-deb',
            '4.deployment-and-installation/2.compile-and-install-nebula-graph/4.install-nebula-graph-from-tar',
            '4.deployment-and-installation/standalone-deployment',
          ],
        },
        '4.deployment-and-installation/2.compile-and-install-nebula-graph/deploy-nebula-graph-cluster',
        '4.deployment-and-installation/2.compile-and-install-nebula-graph/3.deploy-nebula-graph-with-docker-compose',
        '4.deployment-and-installation/2.compile-and-install-nebula-graph/8.deploy-nebula-graph-with-lite',
        '4.deployment-and-installation/2.compile-and-install-nebula-graph/6.deploy-nebula-graph-with-peripherals',
        '4.deployment-and-installation/manage-service',
        '4.deployment-and-installation/connect-to-nebula-graph',
        '4.deployment-and-installation/manage-storage-host',
        '4.deployment-and-installation/3.upgrade-nebula-graph/upgrade-nebula-comm',
        '4.deployment-and-installation/4.uninstall-nebula-graph',
      ],
    },

    // Configure and log
    {
      type: 'category',
      label: 'Configure and log',
      items: [
        {
          type: 'category',
          label: 'Configurations',
          items: [
            '5.configurations-and-logs/1.configurations/1.configurations',
            '5.configurations-and-logs/1.configurations/2.meta-config',
            '5.configurations-and-logs/1.configurations/3.graph-config',
            '5.configurations-and-logs/1.configurations/4.storage-config',
            '5.configurations-and-logs/1.configurations/6.kernel-config',
          ],
        },
        {
          type: 'category',
          label: 'Log management',
          items: [
            '5.configurations-and-logs/2.log-management/logs',
          ],
        },
      ],
    },

    // Monitor
    {
      type: 'category',
      label: 'Monitor',
      items: [
        '6.monitor-and-metrics/1.query-performance-metrics',
        '6.monitor-and-metrics/2.rocksdb-statistics',
      ],
    },

    // Data security
    {
      type: 'category',
      label: 'Data security',
      items: [
        {
          type: 'category',
          label: 'Authentication and authorization',
          items: [
            '7.data-security/1.authentication/1.authentication',
            '7.data-security/1.authentication/2.management-user',
            '7.data-security/1.authentication/3.role-list',
          ],
        },
        '7.data-security/4.ssl',
      ],
    },

    // Backup and restore
    {
      type: 'category',
      label: 'Backup and restore',
      items: [
        {
          type: 'category',
          label: 'NebulaGraph BR Community',
          items: [
            'backup-and-restore/nebula-br/1.what-is-br',
            'backup-and-restore/nebula-br/2.compile-br',
            'backup-and-restore/nebula-br/3.br-backup-data',
            'backup-and-restore/nebula-br/4.br-restore-data',
          ],
        },
        'backup-and-restore/3.manage-snapshot',
      ],
    },

    // Synchronize and migrate
    {
      type: 'category',
      label: 'Synchronize and migrate',
      items: [
        'synchronization-and-migration/2.balance-syntax',
      ],
    },

    // Import and export
    {
      type: 'category',
      label: 'Import and export',
      items: [
        'import-export/write-tools',
        'import-export/use-importer',
        {
          type: 'category',
          label: 'NebulaGraph Exchange',
          items: [
            {
              type: 'category',
              label: 'Introduction',
              items: [
                'import-export/nebula-exchange/about-exchange/ex-ug-what-is-exchange',
                'import-export/nebula-exchange/about-exchange/ex-ug-limitations',
              ],
            },
            'import-export/nebula-exchange/ex-ug-compile',
            {
              type: 'category',
              label: 'Exchange configurations',
              items: [
                'import-export/nebula-exchange/parameter-reference/ex-ug-para-import-command',
                'import-export/nebula-exchange/parameter-reference/ex-ug-parameter',
              ],
            },
            {
              type: 'category',
              label: 'Use NebulaGraph Exchange',
              items: [
                'import-export/nebula-exchange/use-exchange/ex-ug-import-from-csv',
                'import-export/nebula-exchange/use-exchange/ex-ug-import-from-json',
                'import-export/nebula-exchange/use-exchange/ex-ug-import-from-hive',
                'import-export/nebula-exchange/use-exchange/ex-ug-import-from-hbase',
                'import-export/nebula-exchange/use-exchange/ex-ug-import-from-maxcompute',
                'import-export/nebula-exchange/use-exchange/ex-ug-import-from-mysql',
                'import-export/nebula-exchange/use-exchange/ex-ug-import-from-postgresql',
                'import-export/nebula-exchange/use-exchange/ex-ug-import-from-neo4j',
                'import-export/nebula-exchange/use-exchange/ex-ug-import-from-janusgraph',
              ],
            },
            'import-export/nebula-exchange/ex-ug-FAQ',
          ],
        },
        {
          type: 'category',
          label: 'Connectors',
          items: [
            'connector/nebula-spark-connector',
            'connector/nebula-flink-connector',
          ],
        },
      ],
    },

    // Best practices
    {
      type: 'category',
      label: 'Best practices',
      items: [
        '8.service-tuning/compaction',
        '8.service-tuning/load-balance',
        '8.service-tuning/2.graph-modeling',
        '8.service-tuning/3.system-design',
        '8.service-tuning/4.plan',
        '8.service-tuning/super-node',
        '8.service-tuning/enable_autofdo_for_nebulagraph',
        '8.service-tuning/practice',
      ],
    },

    // Clients
    {
      type: 'category',
      label: 'Clients',
      items: [
        '14.client/1.nebula-client',
        'nebula-console',
        '14.client/3.nebula-cpp-client',
        '14.client/4.nebula-java-client',
        '14.client/5.nebula-python-client',
        '14.client/6.nebula-go-client',
        '14.client/contributed-clients',
      ],
    },

    // Studio
    {
      type: 'category',
      label: 'Studio',
      items: [
        {
          type: 'category',
          label: 'About NebulaGraph Studio',
          items: [
            'nebula-studio/about-studio/st-ug-what-is-graph-studio',
            'nebula-studio/about-studio/st-ug-limitations',
          ],
        },
        {
          type: 'category',
          label: 'Deploy and connect',
          items: [
            'nebula-studio/deploy-connect/st-ug-deploy',
            'nebula-studio/deploy-connect/st-ug-connect',
          ],
        },
        {
          type: 'category',
          label: 'Quick start',
          items: [
            'nebula-studio/quick-start/st-ug-plan-schema',
            'nebula-studio/quick-start/st-ug-create-schema',
            'nebula-studio/quick-start/st-ug-import-data',
            'nebula-studio/quick-start/st-ug-console',
          ],
        },
        {
          type: 'category',
          label: 'Use Schema',
          items: [
            'nebula-studio/manage-schema/st-ug-crud-space',
            'nebula-studio/manage-schema/st-ug-crud-tag',
            'nebula-studio/manage-schema/st-ug-crud-edge-type',
            'nebula-studio/manage-schema/st-ug-crud-index',
            'nebula-studio/manage-schema/st-ug-view-schema',
          ],
        },
        'nebula-studio/quick-start/draft',
      ],
    },

    {
      type: 'category',
      label: '云原生自动化运维 (K8s Operator)',
      items: [
        'k8s-operator/1.overview',
        {
          type: 'category',
          label: '部署 K8s Operator',
          items: [
            'k8s-operator/2.deploy-k8s-operator/2.1.install-operator-by-helm',
          ],
        },
        {
          type: 'category',
          label: '使用 K8s Operator 部署集群',
          items: [
            'k8s-operator/3.deploy-nebula-graph-cluster/3.1.create-cluster-by-helm',
          ],
        },
        {
          type: 'category',
          label: '集群管理与高级功能',
          items: [
            'k8s-operator/4.cluster-administration/4.1.scale-cluster',
            'k8s-operator/4.cluster-administration/4.2.upgrade-cluster',
            {
              type: 'category',
              label: '存储管理',
              items: [
                'k8s-operator/4.cluster-administration/4.4.storage-management/4.4.1.expand-pv',
                'k8s-operator/4.cluster-administration/4.4.storage-management/4.4.3.configure-pv-reclaim',
              ],
            },
            'k8s-operator/4.cluster-administration/4.5.logging',
            {
              type: 'category',
              label: '安全',
              items: [
                'k8s-operator/4.cluster-administration/4.7.security/4.7.2.enable-admission-control',
                'k8s-operator/4.cluster-administration/4.7.security/4.7.3.config-deletion-protection',
              ],
            },
            {
              type: 'category',
              label: '高可用和负载均衡',
              items: [
                'k8s-operator/4.cluster-administration/4.8.ha-and-balancing/4.8.1.self-healing',
              ],
            },
            {
              type: 'category',
              label: '高阶功能',
              items: [
                'k8s-operator/4.cluster-administration/4.9.advanced/4.9.1.rolling-update-strategy',
                'k8s-operator/4.cluster-administration/4.9.advanced/4.9.2.restart-cluster',
              ],
            },
          ],
        },
        'k8s-operator/5.FAQ',
      ],
    },

    // 图计算
    {
      type: 'category',
      label: '图计算',
      items: [
        'graph-computing/nebula-algorithm',
      ],
    },

    // NebulaGraph Bench
    { type: 'doc', id: 'nebula-bench', label: 'NebulaGraph Bench' },

    // 常见问题
    { type: 'doc', id: '20.appendix/0.FAQ', label: '常见问题' },

    // 附录
    {
      type: 'category',
      label: '附录',
      items: [
        {
          type: 'category',
          label: '更新说明',
          items: [
            '20.appendix/release-notes/nebula-release-notes',
          ],
        },
      ],
    },
  ],
};

export default sidebars;