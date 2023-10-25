import { Command } from 'commander'
import DedupCommand from './commands/dedup/dedup'

const program = new Command()

program
    .name("knack-utils")
    .description("CLI for Knack applications")
    .version("0.0.1")

program
    .command("dedup")
    .description("Deduplicate Knack Elements")
    .argument("<file>", "Application file")
    .option("-s, --strategy <strategy>", "Deduplication strategy")
    .option("-a, --algorithm <algorithm>", "Deduplication algorithm")
    .option("-d, --dry-run", "Dry run")
    .option("-o, --output <output>", "Output file")
    .action((file, options) => {
        DedupCommand({file, ...options})
    })

program.parse()
