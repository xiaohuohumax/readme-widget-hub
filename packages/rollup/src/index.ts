import type { Plugin } from 'rollup'
import * as module from 'node:module'
import commonjs from '@rollup/plugin-commonjs'
import json from '@rollup/plugin-json'
import resolve from '@rollup/plugin-node-resolve'
import { readPackageSync } from 'read-pkg'
import { defineConfig as rollupDefineConfig } from 'rollup'
import dts from 'rollup-plugin-dts'
import esbuild from 'rollup-plugin-esbuild'

export interface Options {
  input?: string
  outDir?: string
  plugins?: Plugin[]
}

export const defaultOptions: Required<Options> = {
  input: 'src/index.ts',
  outDir: './dist',
  plugins: [],
}

export function defineConfig(options?: Options) {
  const packageJson = readPackageSync()
  const mergedOptions: Required<Options> = Object.assign({}, defaultOptions, options)

  const external = [
    ...Object.keys(packageJson.dependencies || {}),
    ...Object.keys(packageJson.devDependencies || {}),
    ...Object.values(module.builtinModules || {}),
    'fs-extra',
  ]

  const buildConfig = rollupDefineConfig({
    input: mergedOptions.input,
    external,
    output: [
      {
        format: 'cjs',
        dir: mergedOptions.outDir,
        entryFileNames: '[name].cjs',
      },
      {
        format: 'esm',
        dir: mergedOptions.outDir,
        entryFileNames: '[name].mjs',
      },
    ],
    plugins: [resolve(), commonjs(), json(), esbuild()],
  })

  const dtsConfig = rollupDefineConfig({
    input: mergedOptions.input,
    external,
    output: {
      format: 'esm',
      dir: mergedOptions.outDir,
      entryFileNames: '[name].d.ts',
    },
    plugins: [resolve(), commonjs(), json(), esbuild(), dts()],
  })
  return [buildConfig, dtsConfig]
}