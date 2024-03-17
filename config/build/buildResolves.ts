import { ResolveOptions } from 'webpack';
import { BuildOptions } from './types/config';

export default function buildResolves({ paths }: BuildOptions): ResolveOptions {
    return {
        extensions: ['.tsx', '.ts', '.js'],
        preferAbsolute: true,
        mainFiles: ['index'],
        modules: [paths.src, 'node_modules'],
    };
}
