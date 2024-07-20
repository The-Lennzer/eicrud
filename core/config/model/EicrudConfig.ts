import { MicroServicesOptions } from '../crud.config.service';

export interface ExportOptions {
  /**
   * Exclude the given services from the export.
   * @example [User, 'user-profile', 'Email']
   */
  excludeServices?: Array<string | any>;

  /**
   * Include files that match the given patterns into the output directory.
   * @example ['*.shared.ts', '*.md']
   */
  includePatterns?: Array<string>;

  /**
   * Exclude files that match the given patterns from the output directory.
   * @example ['*secret-ms*.dto.ts']
   */
  excludePatterns?: Array<string>;

  /**
   * Remove given imports from the exported files.
   * @example ['@mypackage/core', 'rxjs']
   */
  removeImports?: Array<string>;

  /**
   * Output directory for the exported files.
   * @default 'eicrud_exports'
   */
  outputDir?: string;
}

export interface CliOptions {
  export?: ExportOptions;
}

export interface EicrudConfig {
  microservices?: MicroServicesOptions;

  cli?: CliOptions;
}
