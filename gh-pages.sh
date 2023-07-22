#!/usr/bin/env bash

nix-shell --run "pnpm i && pnpm static" ./shell.nix

